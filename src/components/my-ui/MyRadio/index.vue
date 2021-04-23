<template>
    <label :class="['my-radio', {'active': model == label}]" role="radio">
        <span class="my-radio__input">
            <span :class="['my-radio__inner', {'active': model == label}]"></span>
            <input class="my-radio__original" ref="radioRef" v-model="model" :value="label" type="radio"
                aria-hidden="true" @change="handleChange">
        </span>
        <span class="my-radio__label" @keydown.stop>
            <slot>
                {{ label }}
            </slot>
        </span>
    </label>
</template>

<script>
    import {
        computed,
        ref
    } from 'vue'

    export default {
        name: 'MyRadio',
        inheritAttrs: false,
        props: {
            modelValue: {
                type: [Object, String, Number, Boolean],
                default: '',
            },
            label: {
                type: [String, Number, Boolean],
                default: '',
            }
        },
        emits: ['update:modelValue', 'change'],
        setup(props, {
            emit
        }) {
            const UPDATE_MODEL_EVENT = 'update:modelValue'
            const radioRef = ref()

            const model = computed({
                get() {
                    return props.modelValue.value
                },
                set(val) {
                    emit(UPDATE_MODEL_EVENT, val)
                    if (typeof props.modelValue == 'object') {
                        radioRef.value.checked = props.modelValue.value === props.label
                    } else {
                        radioRef.value.checked = props.modelValue === props.label
                    }
                },
            })

            const handleChange = (event) => {
                emit('change', event.target.value)
            }

            return {
                radioRef,
                model,
                handleChange
            }
        }
    }

</script>

<style lang="scss" scoped>
    .my-radio {
        color: #606266;
        font-weight: 500;
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        outline: none;
        font-size: 14px;
        margin-right: 30px;
        margin-bottom: 20px;

        &.active {
            color: #409eff;
        }
    }

    .my-radio__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
    }

    .my-radio__original {
        display: none;
    }

    .my-radio__inner {
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;

        &.active {
            border-color: #409eff;
            background: #409eff;
        }

        &:hover {
            border-color: #409eff;
        }

        &::after {
            z-index: 10;
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background-color: #fff;
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: transform .15s ease-in;
        }

        &.active::after {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    .my-radio__label {
        font-size: 14px;
        padding-left: 10px;
        cursor: pointer;
    }

</style>
