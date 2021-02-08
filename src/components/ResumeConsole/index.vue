<template>
    <div class="console-wrapper">
        <load-json></load-json>
        <load-image></load-image>
        <div class="color-buttons">
            <button v-for="color in colors" :key="color" :class="['color-button', color]"
                @click="setColor(color)"></button>
        </div>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'
    import {
        SET_COLOR
    } from '../../store/mutation-types'
    import colors from '../../store/colors'
    import LoadJson from './Load/LoadJson'
    import LoadImage from './Load/LoadImage'

    export default {
        name: 'ResumeConsole',
        components: {
            LoadJson,
            LoadImage
        },
        setup() {
            const store = useStore()

            function setColor(color) {
                store.commit(SET_COLOR, color)
            }

            return {
                colors,
                setColor
            }
        }
    }

</script>

<style lang="scss" scoped>
    .console-wrapper {
        border-right: 1px solid #e0e0e0;
        padding: 1.5rem;
        flex: 1;

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
    }

</style>
