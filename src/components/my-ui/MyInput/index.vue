<template>
    <div class="console-input-wrapper">
        <label class="console-input-label" :style="styleObject">
            <slot></slot>
        </label>
        <input type="text" ref="input" class="console-input" :value="modelValue" @input="handleInput"
            @change="handleChange" @focus="handleFocus" @blur="handleBlur" v-if="type !== 'textarea'">
        <textarea ref="textarea" class="console-input" :style="textareaCalcStyle" :value="modelValue"
            @input="handleInput" @change="handleChange" @focus="handleFocus" @blur="handleBlur" v-else
            style="margin-top: 20px;"></textarea>
        <button class="close-btn" @click="handleClear"><i class="fa fa-times-circle-o" aria-hidden="true"></i></button>
    </div>
</template>

<script>
    import {
        reactive,
        ref,
        watch,
        computed,
        onMounted,
        nextTick
    } from 'vue'

    import calcTextareaHeight from './calcTextareaHeight'
    import copy from '../../../utils/copy'

    export default {
        name: 'MyInput',
        emits: ['update:modelValue', 'input', 'change'],
        props: {
            modelValue: String,
            modelModifiers: {
                default: () => ({})
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        setup(props, context) {
            const focus = ref(false)

            const input = ref(null)

            const textarea = ref(null)

            const nativeInputValue = computed(
                () => (props.modelValue === null || props.modelValue === undefined) ?
                '' :
                String(props.modelValue)
            )

            const textareaCalcStyle = reactive({
                height: "0",
                minHeight: "0"
            })

            const styleObject = reactive({
                top: '0',
                fontSize: '14px',
                color: '#a6a9b1'
            })

            onMounted(() => {
                if (!haveContent(props.modelValue)) {
                    toBottom(styleObject)
                }
                if (props.type == 'textarea') {
                    setTextareaHeight()
                }
            })

            watch(() => props.modelValue, (newValue) => {
                if (haveContent(props.modelValue)) {
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

            watch(nativeInputValue, () => {
                setNativeInputValue()
            })

            const setTextareaHeight = () => {
                const textareaHeight = calcTextareaHeight(textarea.value)

                if (textareaCalcStyle.height == textareaHeight.height) return
                copy(textareaCalcStyle, textareaHeight)
            }

            const setNativeInputValue = () => {
                if (!input || input.value === nativeInputValue.value) return
                input.value = nativeInputValue.value
            }

            const handleInput = (event) => {
                if (props.modelModifiers.lazy) return

                context.emit('input', event.target.value)
                context.emit('update:modelValue', event.target.value)

                nextTick(setNativeInputValue)
            }

            const handleChange = (event) => {
                if (props.modelModifiers.lazy || !focus.value) {
                    context.emit('change', event.target.value)
                    context.emit('update:modelValue', event.target.value)
                }
            }

            const handleFocus = () => {
                focus.value = true
                toTop(styleObject)
                styleObject.color = '#409eff'
            }

            function handleBlur() {
                focus.value = false
                styleObject.color = '#a6a9b1'
                if (haveContent(props.modelValue)) {
                    return
                }
                toBottom(styleObject)
            }

            function handleClear() {
                context.emit('input', '')
                context.emit('update:modelValue', '')
            }

            return {
                styleObject,
                handleInput,
                handleChange,
                handleFocus,
                handleBlur,
                handleClear,
                textareaCalcStyle,
                input,
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

        &:hover .close-btn,
        .console-input:focus+.close-btn {
            opacity: 1;
        }
    }

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
        user-select: none;
        position: absolute;

        &:focus {
            top: 1rem;
            left: 13px;
            font-size: 18px;
        }
    }
</style>
