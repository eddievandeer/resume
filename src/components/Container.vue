<template>
    <div class="resume-container">
        <div id="pdfCentent" class="resume vertical">
            <personal-info></personal-info>
            <div class="pluggable">
                <component :is="part" v-for="(part, index) in parts" :key="index"></component>
                <button @click="remove(index)"><i class="fa fa-trash-o" aria-hidden="true"></i>移除</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'

    export default {
        name: 'Container',
        setup() {
            const store = useStore()
            const parts = store.state.parts

            function remove(index) {
                store.commit('REMOVE_PART', index)
            }

            return {
                parts,
                remove
            }
        }
    }

</script>

<style lang="scss" scoped>
    .resume-container {
        padding: 2rem 0;
        background-color: #f5f5f6;
        flex: 3;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .resume {
            width: 85%;
            min-height: 100vh;
            background-color: white;
            display: flex;

            &.horizontal {
                flex-direction: row;
            }

            &.vertical {
                flex-direction: column;
            }
        }
    }

</style>
