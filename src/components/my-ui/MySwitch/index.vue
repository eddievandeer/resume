<template>
    <div
        class="my-switch"
        :class="{'is-checked': checked}"
        @click.prevent="handleChange"
    >
        <input
            ref="input" 
            class="my-switch__input"
            type="checkbox"
            @change="handleChange"
        />
        <span
            class="my-switch__label"
            :style="{ 'width': (width || 40) + 'px' }"
        >
            <div class="my-switch__action">

            </div>
        </span>
    </div>
</template>

<script>
import { computed, ref, onMounted, nextTick } from 'vue'

export default {
    name: 'MySwitch',
    props: {
        modelValue: {
            type: [Boolean, String, Number],
            default: false,
        },
        value: {
            type: [Boolean, String, Number],
            default: false,
        },
        width: {
            type: Number,
            default: 40,
        },
        activeColor: {
            type: String,
            default: '#409EFF',
        },
        inactiveColor: {
            type: String,
            default: '#DCDFE6',
        },
    },
    emits: ['update:modelValue', 'change', 'input'],
    setup(props, ctx) {
        const checked = computed(() => {
            return props.modelValue
        })

        const input = ref(null)

        const handleChange = () => {
            const val = !checked.value
            ctx.emit('update:modelValue', val)
            ctx.emit('change', val)
            ctx.emit('input', val)
            nextTick(() => {
                input.value.checked = checked.value
            })
        }

        onMounted(() => {
            input.value.checked = checked.value
        })

        return {
            checked,
            input,
            handleChange
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-switch {
        display: inline-flex;
        align-items: center;
        position: relative;
        font-size: 14px;
        height: 32px;

        &.is-checked {
            .my-switch__label {
                border-color: #409EFF;
                background: #409EFF;
            }

            .my-switch__action {
                left: 100%;
                margin-left: calc(-1px - 16px);
            }
        }
    }

    .my-switch__input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
    }

    .my-switch__label {
        height: 20px;
        margin: 0;
        border: 1px solid #DCDFE6;
        background: #DCDFE6;
        border-radius: 10px;
        box-sizing: border-box;
        cursor: pointer;
        transition: border-color .3s, background-color .3s;
        display: inline-block;
        position: relative;
        vertical-align: middle;
    }

    .my-switch__action {
        width: 16px;
        height: 16px;
        background: white;
        border-radius: 50%;
        transition: all .3s;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 1px;
        left: 1px;
    }
</style>