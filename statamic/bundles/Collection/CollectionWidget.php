<?php

namespace Statamic\Addons\Collection;

use Statamic\API\Collection;
use Statamic\API\Config;
use Statamic\API\Content;
use Statamic\API\User;
use Statamic\Extend\Widget;

class CollectionWidget extends Widget
{
    public function html()
    {
        $collection = $this->get('collection');

        if (! Collection::handleExists($collection)) {
            return t('collection_does_not_exist', ['collection' => $collection]);
        }

        // Ensure the collection can be viewed
        if ( ! User::getCurrent()->can("collections:{$collection}:view")) {
            return;
        }

        $collection = Collection::whereHandle($collection);

        $entries = $collection->entries()
            ->removeUnpublished()
            ->limit($this->getInt('limit', 5));

        $title = $this->get('title', $collection->title());

        $format = $this->get('date_format', Config::get('cp.date_format'));

        $button = array_get(
                $collection->fieldset()->contents(),
                'create_title',
                t('create_entry', ['noun' => $collection->fieldset()->title()])
        );

        return $this->view('widget', compact('collection', 'entries', 'title', 'format', 'button'));
    }
}
