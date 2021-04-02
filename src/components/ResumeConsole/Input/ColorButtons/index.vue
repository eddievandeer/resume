<template>
    <div class="color-buttons" v-if="theme.type == 'normal'">
        <button v-for="color in colors" :key="color" :class="['color-button', color]" @click="setColor(color)"></button>
    </div>
</template>

<script>
    import {
        watch
    } from 'vue'
    import {
        useStore
    } from 'vuex'
    import {
        SET_COLOR
    } from '../../../../store/mutation-types'
    import colors from './colors'

    export default {
        name: 'ColorButtons',
        setup() {
            const store = useStore()

            const theme = store.state.theme

            function setColor(color) {
                store.commit(SET_COLOR, color)
            }

            return {
                colors,
                setColor,
                theme
            }
        }
    }

</script>

<style lang="scss" scoped>
    .color-buttons {
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .color-button {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
    }

</style>
