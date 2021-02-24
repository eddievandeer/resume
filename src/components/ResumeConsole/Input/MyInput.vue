<template>
    <div class="console-input-wrapper">
        <label class="console-input-label" :style="styleObject">
            <slot></slot>
        </label>
        <input type="text" class="console-input" :value="value" @input="handleInput" @focus="handleFocus"
            @blur="handleBlur" v-if="type !== 'textarea'">
        <textarea ref="textarea" class="console-input" :style="textareaCalcStyle" :value="value" @input="handleInput"
            @focus="handleFocus" @blur="handleBlur" v-else style="margin-top: 20px;"></textarea>
        <button class="close-btn" @click="handleClear"><i class="fa fa-times-circle-o" aria-hidden="true"></i></button>
    </div>
</template>

<script>
    import {
        reactive,
        ref,
        watch,
        onMounted
    } from 'vue'

    import calcTextareaHeight from '../../../utils/calcTextareaHeight'
    import copy from '../../../utils/copy'

    export default {
        name: 'MyInput',
        props: {
            value: String,
            type: {
                type: String,
                default: 'text'
            }
        },
        setup(props, context) {
            const focus = ref(false)

            const textarea = ref(null)

            const textareaCalcStyle = reactive({
                height: "23.8px",
                minHeight: "23.8px"
            })

            const styleObject = reactive({
                top: '0',
                fontSize: '14px',
                color: '#a6a9b1'
            })

            onMounted(() => {
                if (!haveContent(props.value)) {
                    toBottom(styleObject)
                }
                if (props.type == 'textarea') {
                    setTextareaHeight()
                }
            })

            watch(() => props.value, (newValue) => {
                if (haveContent(props.value)) {
                    toTop(styleObject)
                } else {
                    if (!focus.value) {
                        toBottom(styleObject)
                    }
                }

                if (props.type == 'textarea') {
                    textarea.value.value = newValue
                    setTextareaHeight()
                }
            })

            function setTextareaHeight() {
                const textareaHeight = calcTextareaHeight(textarea.value)

                if (textareaCalcStyle.height == textareaHeight.height) return
                copy(textareaCalcStyle, textareaHeight)
            }

            function handleInput(e) {
                context.emit('handleInput', e.target.value)
            }

            function handleFocus() {
                focus.value = true
                toTop(styleObject)
                styleObject.color = '#409eff'
            }

            function handleBlur() {
                focus.value = false
                styleObject.color = '#a6a9b1'
                if (haveContent(props.value)) {
                    return
                }
                toBottom(styleObject)
            }

            function handleClear() {
                context.emit('handleInput', '')
            }

            return {
                styleObject,
                handleInput,
                handleFocus,
                handleBlur,
                handleClear,
                textareaCalcStyle,
                textarea
            }
        }
    }

    function haveContent(target) {
        return target && target.length > 0
    }

    function toBottom(styleObject) {
        styleObject.top = '25px'
        styleObject.fontSize = '16px'
    }

    function toTop(styleObject) {
        styleObject.top = '0'
        styleObject.fontSize = '14px'
    }

</script>

<style lang="scss">
    .console-input-wrapper {
        min-height: 3.4rem;
        margin-bottom: .8rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;

        .close-btn {
            opacity: 0;
            color: #c0c4cc;
            background-color: transparent;
            position: absolute;
            bottom: .7rem;
            right: .3rem;

            &:hover {
                color: #909399;
            }
        }

        .console-input-label {
            width: fit-content;
            font-size: 14px;
            transition: all .2s ease-in-out;
            pointer-events: none;
            position: absolute;

            &:focus {
                top: 1rem;
                left: 13px;
                font-size: 18px;
            }
        }

        &:hover .close-btn,
        .console-input:focus+.close-btn {
            opacity: 1;
        }
    }

</style>
