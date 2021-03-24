<template>
    <div class="delete-wrapper">
        <button class="btn danger delete-button" @click="handler">
            <i class="fa fa-trash" aria-hidden="true"></i>
            <span>
                <slot></slot>
            </span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'RemoveButton',
        props: {
            target: Array,
            index: Number
        },
        setup(props) {
            function handler() {
                props.target.splice(props.index, 1)
            }

            return {
                handler
            }
        }
    }

</script>

<style lang="scss" scoped>
    .delete-wrapper {
        display: flex;
        justify-content: center;

        .delete-button {
            border-radius: 25px;

            i {
                margin-right: .2rem;
            }
        }
    }

</style>
