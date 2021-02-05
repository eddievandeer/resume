<template>
    <input type="file" id="json" />
    <button class="btn normal" @click="doLoad">上传</button>
</template>

<script>
    import {
        useStore
    } from 'vuex'
    import {
        LoadJSON
    } from '../../../utils/loaders'

    export default {
        name: 'LoadJson',
        setup() {
            const store = useStore()

            function doLoad() {
                LoadJSON('#json', (evt) => {
                    let fileJSON = JSON.parse(evt.target.result);
                    store.commit('SET_PERSONAL_INFO', fileJSON.personalInfo)
                    store.commit('SET_SKILLS', fileJSON.skills)
                    // console.log(store.state.skills);
                })
            }

            return {
                doLoad
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>
