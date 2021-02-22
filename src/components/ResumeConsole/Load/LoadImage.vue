<template>
    <div class="upload-image">
        <label for="image" class="btn normal upload-btn">
            <i class="fa fa-picture-o" aria-hidden="true"></i>
            <span>上传图片</span>
        </label>
        <input type="file" id="image" style="display: none" @change="doLoad"
            accept="image/gif, image/jpeg, image/png" />
    </div>
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
    .upload-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        i {
            font-size: 26px;
        }
    }

</style>
