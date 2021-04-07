<template>
    <div class="drag-wrapper" @dragstart="handleDragStart" @dragover="handleDragOver" @dragenter="handleDragEnter"
        @drop="handleDrop" title="长按拖拽可改变位置" draggable="true">
        <slot></slot>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'

    import {
        CHANGE_THE_ORDER
    } from '../../../store/mutation-types'

    export default {
        name: 'DragWrapper',
        props: {
            index: {
                type: Number
            },
            type: {
                type: String
            }
        },
        setup(props) {
            const store = useStore()

            function handleDragStart(event) {
                event.dataTransfer.setData('text/plain', props.index);
            }

            function handleDragOver(event) {
                // Prevent default to allow drop. [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/dragover)
                event.preventDefault();
            }

            function handleDragEnter(event) {
                // Prevent default to allow drop.
                event.preventDefault();
            }

            function handleDrop(event) {
                let from = event.dataTransfer.getData('text/plain'),
                    to = props.index;

                store.commit(CHANGE_THE_ORDER, {
                    type: props.type,
                    from,
                    to
                })
            }
            return {
                handleDragStart,
                handleDragOver,
                handleDragEnter,
                handleDrop
            }
        }
    }

</script>

<style>
    .drag-wrapper {
        cursor: pointer;
        cursor: -webkit-grab;
    }

</style>
