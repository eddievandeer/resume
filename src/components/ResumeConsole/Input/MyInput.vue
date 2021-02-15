<template>
    <div class="console-input-wrapper">
        <label for="console-input" class="console-input-label" :style="styleObject">
            <slot></slot>
        </label>
        <input id="console-input" type="text" class="console-input" v-model="info[type]" @focus="inFocus"
            @blur="inBlur">
    </div>
</template>

<script>
    import {
        reactive
    } from 'vue'

    import {
        useStore
    } from 'vuex'

    export default {
        name: 'MyInput',
        props: {
            type: String
        },
        setup(props) {
            const store = useStore()

            const info = store.state.personalInfo

            const styleObject = reactive({
                top: '0',
                fontSize: '14px',
                color: '#a6a9b1'
            })

            if (!haveContent(info[props.type])) {
                styleObject.top = '30px'
                styleObject.fontSize = '16px'
            }

            function inFocus() {
                styleObject.top = '0'
                styleObject.fontSize = '14px'
                styleObject.color = '#409eff'
            }

            function inBlur() {
                styleObject.color = '#a6a9b1'
                if (haveContent(info[props.type])) {
                    return
                }
                styleObject.top = '30px'
                styleObject.fontSize = '16px'
            }

            return {
                info,
                styleObject,
                inFocus,
                inBlur
            }
        }
    }

    function haveContent(target) {
        return target && target.length > 0
    }

</script>

<style lang="scss">
    .console-input-wrapper {
        height: 3.5rem;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;

        .console-input-label {
            width: fit-content;
            font-size: 14px;
            transition: all .2s ease-in-out;
            position: absolute;

            &:focus {
                top: 1rem;
                left: 13px;
                font-size: 18px;
            }
        }
    }

</style>
