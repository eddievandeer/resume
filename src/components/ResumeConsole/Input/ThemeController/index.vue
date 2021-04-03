<template>
    <div class="theme-controller">
        <button :class="['btn normal', {'active': storeTheme.type === theme[0]}]" v-for="(theme, key) of themes"
            :key="key" @click="changeTheme(theme[0])">
            <span>{{ theme[1] }}</span>
        </button>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'

    import themes from './themes'
    import {
        SET_THEME_TYPE
    } from '../../../../store/mutation-types'

    export default {
        name: 'ThemeController',
        setup() {
            const store = useStore()

            const storeTheme = store.state.theme

            function changeTheme(type) {
                store.commit(SET_THEME_TYPE, type)
            }

            return {
                storeTheme,
                themes,
                changeTheme
            }
        }
    }

</script>

<style lang="scss" scoped>
    .theme-controller {
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

</style>
