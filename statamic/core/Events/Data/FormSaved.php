<?php

namespace Statamic\Events\Data;

use Statamic\Events\Event;
use Statamic\Contracts\Forms\Form;
use Statamic\Contracts\Data\DataEvent;

class FormSaved extends Event implements DataEvent
{
    /**
     * @var Form
     */
    private $form;

    /**
     * @param Form $form
     */
    public function __construct(Form $form)
    {
        $this->form = $form;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->form->toArray();
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        return [$this->form->formset()->path()];
    }
}
