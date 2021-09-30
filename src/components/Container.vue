<template>
    <div class="resume-container">
        <div id="pdfCentent" :class="['resume', theme.type, theme.style, theme.color]">
            <personal-info :style="theme.style"></personal-info>
            <div class="pluggable">
                <component v-for="(part, index) in parts" :key="index" :is="part"></component>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        useStore
    } from 'vuex'

    import {
        REMOVE_PART
    } from '../store/mutation-types'

    const store = useStore()
    const parts = store.state.parts
    const theme = store.state.theme

    function remove(index) {
        store.commit(REMOVE_PART, index)
    }
</script>

<style lang="scss" scoped>
    .resume-container {
        padding: 2rem 0;
        box-sizing: border-box;
        background-color: #f5f5f6;
        user-select: none;
        flex: 3;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;

        .resume {
            width: 840px;
            min-height: 988px;
            background-color: white;
            display: flex;

            .pluggable {
                padding-top: .6rem;
                padding-bottom: 2rem;
                flex: 3;
            }
        }
    }

</style>
