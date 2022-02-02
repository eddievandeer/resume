<template>
    <div :class="['drawer-wrapper', {'active': active}]">
        <div class="drawer-title" @click.self="toggle">
            <span>{{title.length>0?title:'空标题'}}</span>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        <div class="drawer">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue'
    import Transition from './transition'

    export default {
        name: 'Drawer',
        props: {
            title: String
        },
        setup() {
            const transition = new Transition

            const active = ref(true)

            function toggle(e) {
                if (active.value) {
                    transition.leave(e.target.parentNode.children[1])
                } else {
                    transition.enter(e.target.parentNode.children[1])
                }
                active.value = !active.value
            }

            return {
                active,
                toggle
            }
        }
    }

</script>

<style lang="scss" scoped>
    .drawer-wrapper {
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        border-bottom: 1px solid transparent;

        &.active {
            border-bottom: 1px solid #ebeef5;

            .drawer-title {
                color: #409EFF;
                border-bottom: 1px solid transparent;

                i {
                    transform: rotateZ(-90deg);
                }
            }
        }
    }

    .drawer-title {
        width: 100%;
        height: 2rem;
        color: #303133;
        padding: .6rem 0;
        border-bottom: 1px solid #ebeef5;
        cursor: pointer;
        transition: all .2s ease-in-out;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span,
        i {
            pointer-events: none;
        }

        i {
            margin-right: .5rem;
            transition: transform .2s ease-in-out;
        }

        &:hover {
            color: #409EFF;
        }
    }

    .drawer {
        will-change: height;
        padding-bottom: 1rem;
        transition: all .2s ease-in-out;
    }
</style>
