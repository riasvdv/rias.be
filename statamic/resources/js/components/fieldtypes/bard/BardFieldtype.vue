<template>
    <div class="bard-fieldtype-wrapper replicator" :class="{'bard-fullscreen': fullScreenMode, 'no-sets': !hasSets }">

        <div class="bard-toolbar" v-el:toolbar :style="{ top: toolbarCoords.top, left: toolbarCoords.left }" :class="{'bard-toolbar-active': toolbarShowing }" v-if="!config.markdown && buttons.length">
            <button
                v-for="button in buttons"
                v-tip
                :tip-text="button.text"
                :data-command-name="button.command"
                v-html="button.html"
            ></button>
        </div>

        <link-toolbar v-ref:link-toolbar :config="config" v-if="!config.markdown"></link-toolbar>

        <div class="bard-blocks" v-if="isReady" v-el:blocks>
            <component
                :is="block.type === 'text' ? 'BardText' : 'BardSet'"
                v-for="(index, block) in data"
                v-ref:set
                :class="{ 'divider-at-start': canShowDividerAtStart(index), 'divider-at-end': canShowDividerAtEnd(index) }"
                :key="index"
                :data="block"
                :index="index"
                :parent-name="name"
                :config="setConfig(block.type)"
                :show-source="showSource"
                @set-inserted="setInserted"
                @deleted="deleteSet"
                @source-toggled="toggleSource"
                @arrow-up-at-start="goToPreviousTextField"
                @arrow-down-at-end="goToNextTextField"
                @text-updated="updateText"
                @selection-changed="selectionChanged"
            >
                <template slot="divider-start">
                    <div v-show="canShowDividerAtStart(index)" class="bard-divider bard-divider-start" @click="addTextBlock(index-1)"></div>
                </template>
                <template slot="divider-end">
                    <div v-show="canShowDividerAtEnd(index)" class="bard-divider bard-divider-end" @click="addTextBlock(index)"></div>
                </template>
                <template slot="expand-collapse">
                    <li><a @click="collapseAll">{{ translate('cp.collapse_all') }}</a></li>
                    <li><a @click="expandAll">{{ translate('cp.expand_all') }}</a></li>
                </template>
            </component>
        </div>

        <div class="bard-field-title" v-text="config.display"></div>

        <div class="bard-field-options no-select">
            <a @click="toggleSource" :class="{ active: showSource }" v-if="allowSource"><i class="icon icon-code"></i></a>
            <a @click="toggleFullscreen"><i class="icon" :class="{ 'icon-resize-full-screen' : ! fullScreenMode, 'icon-resize-100' : fullScreenMode }"></i></a>
        </div>
    </div>
</template>

<script>
import Replicator from '../replicator/Replicator';
import { Draggable } from '@shopify/draggable';
import { availableButtons, addButtonHtml } from './buttons';

export default {

    mixins: [Replicator, Fieldtype],

    components: {
        BardSet: require('./BardSet.vue'),
        BardText: require('./BardText.vue'),
        LinkToolbar: require('./LinkToolbar')
    },

    computed: {

        textBlocks() {
            return this.$refs.set.filter(set => set.data.type === 'text');
        },

        allowSource() {
            if (this.config.markdown) return false;

            return this.config.allow_source === undefined ? true : this.config.allow_source
        }

    },

    data: function() {
        return {
            isReady: false,
            setBeingDragged: null,
            lastDraggedOverElement: null,
            hasSets: this.config.sets !== undefined,
            showSource: false,
            fullScreenMode: false,
            autoBindChangeWatcher: false,
            changeWatcherWatchDeep: false,
            previousScrollPosition: null,
            toolbarCoords: { },
            toolbarShowing: false,
            buttons: []
        };
    },

    ready() {
        if (! this.data) {
            this.data = [{type: 'text', text: '<p><br></p>'}];
        }

        this.initToolbarButtons();

        this.combineConsecutiveTextBlocks();

        this.isReady = true;

        this.$nextTick(() => {
            this.draggable();
            if (this.accordionMode) this.collapseAll();
            this.bindChangeWatcher();
        });

        this.hideToolbar();
    },

    watch: {

        data(data) {
            if (data.length === 0) {
                this.data = [{type: 'text', text: '<p><br></p>'}];
                this.$nextTick(() => this.getBlock(0).focus());
            }
        }

    },

    methods: {

        addTextBlock(index, text) {
            text = text || '<p><br></p>';
            index = index + 1;
            this.data.splice(index, 0, { type: 'text', text });
            this.$nextTick(() => {
                const block = this.getBlock(index);
                if (text) {
                    block.focusAtStart();
                } else {
                    block.focus();
                }
            });
        },

        addBlock: function(type, index) {
            var newSet = { type: type };

            // Get nulls for all the set's fields so Vue can track them more reliably.
            var set = this.setConfig(type);
            _.each(set.fields, function(field) {
                newSet[field.name] = field.default || Statamic.fieldtypeDefaults[field.type] || null;
            });

            if (index === undefined) {
                index = this.data.length;
            }

            this.data.splice(index, 0, newSet);

            this.$nextTick(() => this.getBlock(index).focus());
        },

        setSelected(type, index) {
            var newSet = { type: type };

            // Get nulls for all the set's fields so Vue can track them more reliably.
            var set = this.setConfig(type);
            _.each(set.fields, function(field) {
                newSet[field.name] = field.default || Statamic.fieldtypeDefaults[field.type] || null;
            });

            this.data.splice(index, 1, newSet);

            this.$nextTick(() => this.getBlock(index).focus());
        },

        setInserted(type, index, before, after) {
            const newSet = this.getBlankSet(type);
            const beforeSet = { type: 'text', text: before };
            const afterSet = { type: 'text', text: after };

            let newItems = [beforeSet, newSet, afterSet].filter(set => {
                if (set.type !== 'text') return true;
                return set.text !== '';
            });

            this.data.splice(index, 1, ...newItems);
        },

        getBlankSet(type) {
            let newSet = { type: type };

            // Get nulls for all the set's fields so Vue can track them more reliably.
            var set = this.setConfig(type);
            _.each(set.fields, function(field) {
                newSet[field.name] = field.default || Statamic.fieldtypeDefaults[field.type] || null;
            });

            return newSet;
        },

        getBlock(index) {
            return this.$refs.set[index];
        },

        /**
         * Whether a divider / insertion point can be displayed before a given block.
         * We don't want the UI to get clogged with multiple empty blocks.
         */
        canShowDividerAtStart(index) {
            return index === 0;
        },

        /**
         * Whether a divider / insertion point can be displayed after a given block.
         * We don't want the UI to get clogged with multiple empty blocks.
         */
        canShowDividerAtEnd(index) {
            if (index === this.data.length - 1) {
                return true;
            }

            return this.getBlock(index + 1).data.type !== 'text';
        },

        draggable() {
            const draggable = new Draggable(this.$els.blocks, {
                draggable: '.bard-block',
                handle: '.bard-drag-handle',
                mirror: {
                    xAxis: false,
                    constrainDimensions: true
                },
                delay: 200
            });

            draggable.on('drag:start', (e, a) => {
                let doc = document.documentElement;
                this.previousScrollPosition = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

                this.setBeingDragged = e.originalSource.__vue__.index;
                this.textBlocks.forEach(block => block.addDropAreas());
            });

            draggable.on('drag:move', (e) => {
                if (!e.originalEvent) return; // Sometimes this is undefined for whatever reason.

                const target = e.originalEvent.target;

                if (target.classList.contains('bard-drop-area-inner') || target.classList.contains('bard-divider')) {
                    this.lastDraggedOverElement = target;
                }
            });

            draggable.on('drag:stop', (e) => {
                // Prevent the div from actually being moved. Vue will do that for us.
                e.cancel();

                if (this.lastDraggedOverElement) {
                    this.moveSetToNewLocation();
                } else {
                    this.removeDropAreas();
                }

                this.$nextTick(() => {
                    window.scrollTo(0, this.previousScrollPosition);
                    this.previousScrollPosition = null;

                    // Temporary workaround for hiding the empty link
                    // toolbar that pops up after moving sets around.
                    setTimeout(() => {
                        this.$refs.linkToolbar.positionTop = '-999em';
                        this.$refs.linkToolbar.positionLeft = '-999em';
                    }, 1);
                });
            });
        },

        moveSetToNewLocation() {
            // Get the block this was dragged over.
            // There's obviously a better way to do this. Or is there?
            let block;
            if (this.lastDraggedOverElement.classList.contains('bard-divider')) {
                block = this.lastDraggedOverElement.parentNode.__vue__;
            } else {
                block = this.lastDraggedOverElement // .bard-drop-area-inner
                    .parentNode // .bard-drop-area
                    .parentNode // .bard-editor
                    .parentNode // .bard-block
                    .__vue__;
            }

            this.removeDropAreas();

            if (! block) return;

            this.moveSet(block);

            this.lastDraggedOverElement = null;
        },

        moveSet(block) {
            if (block.data.type === 'text') {
                return this.moveSetIntoText(block);
            }

            const start = this.setBeingDragged;
            let end = block.index + (start > block.index ? 1 : 0);

            // The only place a start divider exists is right at the beginning. In this case, we
            // want to move the set to the beginning of everything, instead of *after* some other set.
            if (this.lastDraggedOverElement.classList.contains('bard-divider-start')) {
                end = 0;
            }

            this.data.splice(end, 0, this.data.splice(start, 1)[0]);

            this.$nextTick(() => this.combineConsecutiveTextBlocks());
        },

        moveSetIntoText(block) {
            block.insertParagraph();

            const [before, after] = block.getBeforeAndAfterHtml();
            const beforeSet = { type: 'text', text: before };
            const afterSet = { type: 'text', text: after };
            const set = this.data[this.setBeingDragged];

            this.data.splice(this.setBeingDragged, 1);

            let newItems = [beforeSet, set, afterSet].filter(set => {
                if (set.type !== 'text') return true;
                return set.text !== '';
            });

            const index = this.getInsertIndex(this.setBeingDragged, block.index);
            this.data.splice(index, 1, ...newItems);

            this.setBeingDragged = null;

            this.$nextTick(() => this.combineConsecutiveTextBlocks());
        },

        removeDropAreas() {
            this.textBlocks.forEach(block => block.removeDropAreas());
        },

        getInsertIndex(from, to) {
            if (from === 0) return 0;

            if (from < to) return to - 1;

            return to;
        },

        combineConsecutiveTextBlocks() {
            let data = [];
            let previousBlockWasText = false

            this.data.forEach((block, i) => {
                if (block.type !== 'text') {
                    data.push(block)
                    previousBlockWasText = false;
                    return;
                }

                if (! previousBlockWasText) {
                    data.push(block);
                    previousBlockWasText = true;
                    return;
                }

                data[data.length-1].text += block.text;
            });

            this.data = data;
        },

        toggleSource() {
            this.showSource = !this.showSource;
        },

        toggleFullscreen() {
            this.fullScreenMode = !this.fullScreenMode;
            this.$root.hideOverflow = ! this.$root.hideOverflow;
        },

        deleteSet(index) {
            let block = this.getBlock(index - 1);
            const previousBlockWasText = block && block.data.type === 'text';

            // If there's a previous text block, we will add a blank paragraph to determine
            // where the caret should be positioned once the block is deleted. We use a data
            // attribute instead of just a reference to the DOM element because Scribe
            // will be manipulating the DOM and the element we choose will be removed
            // but the data attribute will be maintained. We'll remove it later.
            if (previousBlockWasText) {
                let placeholder = document.createElement('p');
                placeholder.dataset.bardFocus = true;
                block.editor.el.appendChild(placeholder);
            }

            // Remove the set and combine the surrounding text blocks.
            this.data.splice(index, 1);
            this.$nextTick(() => this.combineConsecutiveTextBlocks());

            // We'll now move the caret behind the element we targeted earlier and remove the data attribute.
            if (previousBlockWasText) {
                // Use a setTimeout instead of a nextTick. Scribe appears be changing the dom, and the
                // focusable element is still the outdated one if we were to use nextTick here.
                setTimeout(() => {
                    const focusableEl = block.$el.querySelector('[data-bard-focus]');
                    block.setCaretAfter(focusableEl);
                    delete focusableEl.dataset.bardFocus;
                }, 10);
            }
        },

        goToPreviousTextField(index) {
            if (index === 0) return;

            while (index > 0) {
                index--;
                const block = this.getBlock(index);
                if (block.data.type === 'text') {
                    setTimeout(() => { block.focusAtEnd() }, 10);
                    return;
                }
            }
        },

        goToNextTextField(index) {
            const totalBlocks = this.$refs.set.length - 1;

            if (index === totalBlocks) return;

            while (index < totalBlocks) {
                index++;
                const block = this.getBlock(index);
                if (block.data.type === 'text') {
                    setTimeout(() => { block.focusAtStart() }, 10);
                    return;
                }
            }
        },

        updateText(i, text) {
            this.data[i].text = text;
        },

        getReplicatorPreviewText() {
            return _.map(this.$refs.set, (set) => {
                return (set.data.type === 'text') ? set.plainText() : set.getCollapsedPreview();
            }).join(', ');
        },

        selectionChanged() {
            let selection = window.getSelection();
            let selectionStr = selection.toString().trim();
            (selectionStr === '') ? this.hideToolbar() : this.moveToolbar();
        },

        hideToolbar() {
            if (this.config.markdown) return;

            this.toolbarCoords = { top: '-999em', left: '-999em' };
            this.toolbarShowing = false;
        },

        moveToolbar() {
            if (this.config.markdown) return;

            var selection = window.getSelection(),
                range = selection.getRangeAt(0),
                boundary = range.getBoundingClientRect(),
                coords = {},
                outer = this.$el,
                outerBoundary = outer.getBoundingClientRect(),
                toolbarEl = this.$els.toolbar;

            coords.top = (boundary.top - outerBoundary.top) + 'px';
            coords.left = (((boundary.left + boundary.right) / 2) - (toolbarEl.offsetWidth / 2) - outerBoundary.left) + 'px';

            this.toolbarCoords = coords;
            this.toolbarShowing = true;
        },

        initToolbarButtons() {
            const selectedButtons = this.config.buttons || [
                'h2', 'h3', 'bold', 'italic', 'unorderedlist', 'orderedlist', 'removeformat', 'quote', 'anchor',
            ];

            // Get the configured buttons and swap them with corresponding objects
            let buttons = selectedButtons.map(button => {
                return _.findWhere(availableButtons, { name: button.toLowerCase() })
                    || button;
            });

            // Let addons add, remove, or control the position of buttons.
            Statamic.bard.buttons.forEach(callback => callback.call(null, buttons));

            // Remove any non-objects. This would happen if you configure a button name that doesn't exist.
            buttons = buttons.filter(button => typeof button != 'string');

            // Generate fallback html for each button
            buttons = addButtonHtml(buttons);

            // Remove buttons that don't pass conditions.
            // eg. only the insert asset button can be shown if a container has been set.
            buttons = buttons.filter(button => {
                return (button.condition) ? button.condition.call(null, this.config) : true;
            });

            this.buttons = buttons;
        }
    }
};
</script>
