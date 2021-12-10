<template>
    <div class="delete-wrapper">
        <button :class="['btn danger delete-button', type]" @click="handler">
            <i class="fa fa-trash" aria-hidden="true"></i>
            <span class="btn-text">
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
            index: Number,
            type: {
                type: String,
                default: 'default'
            }
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
    }

    .delete-button[class] {
        border-radius: 25px;

        i {
            margin-right: .2rem;
        }
    }

    .delete-button.text {
        padding: 0;

        &:hover {
            color: #f56c6c;
        }
    }

    .btn-text {
        white-space: nowrap;
    }

</style>
