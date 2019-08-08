<?php

namespace Statamic\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\View\Compilers\BladeCompiler;

class BladeServiceProvider extends ServiceProvider
{
    /**
     * @var BladeCompiler
     */
    private $blade;

    public function register()
    {
        //
    }

    public function boot(BladeCompiler $blade)
    {
        $this->blade = $blade;

        $this->access();

        $this->actions();
        $this->checkbox();
        $this->checkboxAll();
        $this->search();
    }

    /**
     * Directive: @access / @endaccess
     *
     * Shows content if the current user has permission to access the section.
     */
    private function access()
    {
        $this->blade->directive('access', function($expression) {
            return "<?php if (\\Statamic\\API\\User::getCurrent()->canAccess{$expression}): ?>";
        });

        $this->blade->directive('endaccess', function() {
            return '<?php endif; ?>';
        });
    }

    /**
     * Directive: @dossierActions / @endDossierActions
     *
     * Lets you construct a three-dot 'more' dropdown button in a `td`.
     *
     * The `li`s for the dropdown items should be between the tags.
     */
    private function actions()
    {
        $this->blade->directive('dossierActions', function () {
            return '
                <td class="column-actions">
                    <div class="btn-group">
                        <button type="button" class="btn-more dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="icon icon-dots-three-vertical"></i>
                        </button>
                        <ul class="dropdown-menu">';
        });

        $this->blade->directive('endDossierActions', function () {
            return '</ul></div></td>';
        });
    }

    /**
     * Directive: @dossierCheckbox
     *
     * Lets you output a table cell containing a checkbox for use inside a Dossier
     */
    private function checkbox()
    {
        $this->blade->directive('dossierCheckbox', function() {
            return '
                <td class="checkbox-col">
                    <input type="checkbox" :id="\'checkbox-\' + $index" v-model="item.checked" />
                    <label :for="\'checkbox-\' + $index"></label>
                </td>';
        });
    }

    /**
     * Directive: @dossierCheckAll
     *
     * Outputs a checkbox that controls all checkboxes in a Dossier
     */
    private function checkboxAll()
    {
        $this->blade->directive('dossierCheckAll', function() {
            return '
                <input type="checkbox" id="checkbox-all" :checked="allItemsChecked" @click="checkAllItems" />
                <label for="checkbox-all"></label>';
        });
    }

    /**
     * Directive: @dossierSearch
     *
     * Outputs a search box.
     *
     * Accepts an optional number argument that defines how
     * many items need to exist for it to display.
     */
    private function search()
    {
        $this->blade->directive('dossierSearch', function($limit) {
            $limit = $limit ?: 2;

            return '<search v-if="items.length > ' . trim($limit, '()') . '"></search>';
        });
    }

}
