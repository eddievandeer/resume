<template>
    <transition name="fade-in-linear" @after-leave="$emit('vanish')">
        <div class="is-message-box" v-show="visible">
            <div class="message-box">
                <div class="message-box-header">
                    <div class="message-box-title">{{ title }}</div>
                    <button class="close" @click="doClose"><i class="fa fa-times" aria-hidden="true"></i></button>
                </div>
                <div class="message-box-detail">
                    <div class="message-box-custom" v-if="customNode">
                        <slot></slot>
                    </div>
                    <div class="message-box-input" v-if="showInput">
                        <my-input v-model="inputValue">
                            <span>{{ message }}</span>
                        </my-input>
                    </div>
                    <div v-else>{{ message }}</div>
                    <button class="btn normal action" @click="doAction">确定</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {
        defineComponent,
        ref,
        nextTick,
        reactive,
        toRefs
    } from 'vue'

    import MyInput from '../../MyInput'

    export default defineComponent({
        components: {
            MyInput
        },
        inheritAttrs: false,
        props: {
            showClose: {
                type: Boolean,
                default: true,
            }
        },
        emits: ['vanish', 'action'],
        setup(props, {
            emit
        }) {
            const visible = ref(false)

            const state = reactive({
                title: undefined,
                message: null,
                showInput: false,
                inputValue: null,
                placeholder: null,
                customNode: null
            })

            function doClose() {
                if (!visible.value) return
                visible.value = false

                nextTick(() => {
                    emit('action', 'close')
                })
            }

            function doAction() {
                emit('action', state.inputValue)
                doClose()
            }

            return {
                ...toRefs(state),
                doClose,
                doAction,
                visible
            }
        }
    })

</script>

<style lang="scss">
    .is-message-box {
        z-index: 1000;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
    }

    .message-box {
        display: inline-block;
        width: 400px;
        padding-bottom: 1rem;
        vertical-align: middle;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        font-size: 18px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        text-align: left;
        overflow: hidden;
        backface-visibility: hidden;
    }
    .message-box-header {
        position: relative;
        padding: 15px 15px 10px;
    }
    
    .message-box-title {
        font-size: 18px;
        line-height: 1;
        color: #303133;
    }

    .close {
        color: #909399;
        background-color: transparent;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        vertical-align: baseline;
        position: absolute;
        top: .3rem;
        right: .3rem;
        cursor: pointer;

        :hover {
            color: #409EFF;
        }
    }

    .message-box-detail {
        padding: 10px 15px;
        color: #606266;
        font-size: 14px;

        .action {
            width: 100%;
            height: 40px;
        }
    }

</style>
