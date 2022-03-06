<template>
    <theme-controller></theme-controller>
    <div class="input-item">
        <color-buttons></color-buttons>
        <div class="style-control">
            <span class="style-pre">横版</span>
            <my-switch v-model="style" />
            <span class="style-next">竖版</span>
        </div>
    </div>
</template>

<script>
    import ThemeController from '../Input/ThemeController'
    import ColorButtons from '../Input/ColorButtons'
    import { ref, watch } from 'vue'
    import { useStore } from 'vuex'
    import { SET_THEME_STYLE } from '../../../store/mutation-types'

    export default {
        components: {
            ThemeController,
            ColorButtons
        },
        setup() {
            const store = useStore()

            const themeStyle = store.state.theme.style

            const style = ref(themeStyle === 'vertical')

            watch(() => style.value, (newValue) => {
                const styleType = newValue ? 'vertical' : 'horizontal'

                store.commit(SET_THEME_STYLE, styleType)
            })

            return {
                style
            }
        }
    }

</script>

<style>
    .style-control {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .style-pre {
        margin-right: 1rem;
    }

    .style-next {
        margin-left: 1rem;
    }
</style>
