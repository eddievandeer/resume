<template>
    <div class="add-wrapper">
        <button class="btn normal add-button" @click="handler">
            <i class="fa fa-plus" aria-hidden="true"></i>
            <slot></slot>
        </button>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'

    export default {
        name: 'AddButton',
        props: {
            target: Array,
            type: {
                type: String,
                default: ''
            },
            item: String | Object
        },
        setup(props) {
            const store = useStore()

            function handler() {
                if (props.type.length > 0) {
                    store.commit(props.type, props.item)
                } else {
                    props.target.push(props.item)
                }
            }

            return {
                handler
            }
        }
    }

</script>

<style lang="scss" scoped>
    .add-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;

        .add-button {
            border-radius: 25px;

            i {
                margin-right: .2rem;
            }
        }
    }

</style>
