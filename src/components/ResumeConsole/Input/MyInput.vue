<template>
    <div class="console-input-wrapper">
        <label class="console-input-label" :style="styleObject">
            <slot></slot>
        </label>
        <button class="close-btn" @click="handleClear"><i class="fa fa-times-circle-o" aria-hidden="true"></i></button>
        <input type="text" class="console-input" :value="value" @input="handleInput" @focus="handleFocus"
            @blur="handleBlur">
    </div>
</template>

<script>
    import {
        reactive,
        watch
    } from 'vue'

    export default {
        name: 'MyInput',
        props: {
            value: String
        },
        setup(props, context) {
            const styleObject = reactive({
                top: '0',
                fontSize: '14px',
                color: '#a6a9b1'
            })

            if (!haveContent(props.value)) {
                toBottom(styleObject)
            }

            watch(() => props.value, () => {
                if (haveContent(props.value)) {
                    toTop(styleObject)
                } else {
                    toBottom(styleObject)
                }
            })

            function handleInput(e) {
                context.emit('handleInput', e.target.value)
            }

            function handleFocus() {
                toTop(styleObject)
                styleObject.color = '#409eff'
            }

            function handleBlur() {
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
                handleClear
            }
        }
    }

    function haveContent(target) {
        return target && target.length > 0
    }

    function toBottom(styleObject) {
        styleObject.top = '30px'
        styleObject.fontSize = '16px'
    }

    function toTop(styleObject) {
        styleObject.top = '0'
        styleObject.fontSize = '14px'
    }

</script>

<style lang="scss">
    .console-input-wrapper {
        height: 3.4rem;
        margin-bottom: .8rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;

        .close-btn {
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
    }

</style>
