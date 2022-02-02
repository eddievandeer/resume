<template>
    <div class="upload-image">
        <label for="image" class="btn normal upload-btn">
            <i class="fa fa-picture-o" aria-hidden="true"></i>
            <span>上传图片</span>
        </label>
        <input type="file" id="image" style="display: none" @change="doLoad"
            accept="image/gif, image/jpeg, image/png" />
        或
        <my-input v-model.lazy="inputURL">
            <span>输入图片网址</span>
        </my-input>
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
            const store = useStore()

            const imageURL = ref('')
            const inputURL = ref('')

            let timeout = null

            watch(imageURL, (newValue) => {
                store.commit(SET_PERSONAL_INFO, {
                    value: newValue,
                    key: 'image'
                })
            })

            watch(inputURL, (newValue) => {
                timeout && clearTimeout(timeout)

                timeout = setTimeout(() => {
                    store.commit(SET_PERSONAL_INFO, {
                        value: newValue,
                        key: 'image'
                    })
                }, 500)
            })

            function doLoad() {
                LoadImage('#image', imageURL)
            }

            return {
                doLoad,
                imageURL,
                inputURL
            }
        }
    }

</script>

<style lang="scss" scoped>
    .upload-image {
        color: #606266;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

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
