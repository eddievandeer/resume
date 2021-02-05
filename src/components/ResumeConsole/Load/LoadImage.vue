<template>
    <input type="file" id="image">
    <button class="btn normal" @click="doLoad">上传</button>
    <!-- <img :src="imageURL" v-if="imageURL.length > 0"> -->
</template>

<script>
    import {
        ref,
        watch
    } from 'vue'
    import {
        useStore
    } from 'vuex'
    import {
        SET_PERSONAL_INFO
    } from '../../../store/mutation-types'
    import {
        LoadImage
    } from '../../../utils/loaders'

    export default {
        name: 'LoadImage',
        setup() {
            const imageURL = ref('')
            const store = useStore()

            watch(imageURL, (newValue) => {
                store.commit(SET_PERSONAL_INFO, {
                    value: newValue,
                    key: 'image'
                })
            })

            function doLoad() {
                LoadImage('#image', imageURL)
            }

            return {
                doLoad,
                imageURL
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>
