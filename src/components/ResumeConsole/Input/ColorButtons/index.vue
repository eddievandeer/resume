<template>
    <div class="color-buttons" v-if="theme.type == 'normal'">
        <button v-for="(color, index) in colors" :key="color" :class="['color-button', color]" @click="setColor(color, index)">
            <span class="color-check" v-if="active == index">
                <i class="fa fa-check" aria-hidden="true"></i>
            </span>
        </button>
    </div>
</template>

<script>
    import {
        ref
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

            const active = ref(0)

            const theme = store.state.theme

            function setColor(color, index) {
                active.value = index
                store.commit(SET_COLOR, color)
            }

            return {
                colors,
                setColor,
                active,
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
    }

    .color-button {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
    }

    .color-check {
        color: white;
        font-size: 10px;
    }
</style>
