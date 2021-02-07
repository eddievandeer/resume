<template>
    <div class="upload-file">
        <label for="json" class="btn normal upload-btn">
            <i class="fa fa-plus" aria-hidden="true"></i>
            <span>上传数据(JSON)</span>
        </label>
        <input type="file" id="json" style="display: none" @change="doLoad" accept="application/json" />
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'
    import {
        SET_PERSONAL_INFO,
        SET_SKILLS,
        SET_EXPERIENCES
    } from '../../../store/mutation-types'
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
                    store.commit(SET_PERSONAL_INFO, fileJSON.personalInfo)
                    store.commit(SET_SKILLS, fileJSON.skills)
                    store.commit(SET_EXPERIENCES, fileJSON.experiences)
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
    .upload-file {
        margin-bottom: 1rem;

        .upload-btn {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            i {
                font-size: 26px;
            }
        }
    }

</style>
