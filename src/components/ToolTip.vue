<template>
    <div class="tooltip" v-if="show">
        <div class="tooltip__ropper">
            可拖拽移动
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue'
    export default {
        name: 'ToolTip',
        setup() {
            let show = ref(false)

            return {
                show
            }
        }
    }

</script>

<style lang="scss" scoped>
    .tooltip__ropper {
        background-color: #303133;

        &::after {
            content: ' ';
            position: absolute;
            display: block;
            bottom: -5px;
            left: 1px;
            border-color: transparent;
            border-style: solid;
            border-width: 5px;
            border-right-color: #303133;
            border-left-width: 0;
        }
    }
</style>
