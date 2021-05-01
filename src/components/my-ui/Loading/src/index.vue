<template>
    <div :class="['loading', `type-${type}`]">
        <div class="loading-icon">
            <i class="fa fa-spinner fa-pulse fa-2x fa-fw" aria-hidden="true"></i>
            <span>{{ text }}</span>
        </div>
    </div>
</template>

<script>
    import {
        reactive,
        toRefs
    } from 'vue'

    export default {
        name: 'Loading',
        inheritAttrs: false,
        setup() {
            const state = reactive({
                loading: true,
                type: undefined,
                text: null
            })

            return {
                ...toRefs(state)
            }
        }
    }

</script>

<style scoped>
    .loading {
        z-index: 30;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
    }

    .loading.type-1 {
        color: white;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .loading.type-2 {
        color: #409EFF;
        background-color: white;
    }

    .loading span {
        margin-top: 10px;
        font-size: 14px;
    }

    .loading.type-1 span {
        color: white;
    }

    .loading.type-2 span {
        color: #409EFF;
    }

    .loading-icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>
