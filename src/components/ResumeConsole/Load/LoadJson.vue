<template>
    <div class="upload-file">
        <label for="json" class="btn normal load-btn">
            <i class="fa fa-cloud-upload" aria-hidden="true"></i>
            <span>上传数据(JSON)</span>
        </label>
        <input type="file" id="json" style="display: none" @change="doLoad" accept="application/json" />
    </div>
    <div class="download-file">
        <button class="btn normal load-btn" @click="daSave">
            <i class="fa fa-cloud-download" aria-hidden="true"></i>
            <span>保存数据</span>
        </button>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'
    import {
        SET_PERSONAL_INFO,
        SET_INTERNSHIP,
        SET_SKILLS,
        SET_EXPERIENCES
    } from '../../../store/mutation-types'
    import {
        LoadJSON,
        SaveJSON
    } from '../../../utils/loaders'

    export default {
        name: 'LoadJson',
        setup() {
            const store = useStore()

            function doLoad() {
                LoadJSON('#json', (evt) => {
                    let fileJSON = JSON.parse(evt.target.result);
                    store.commit(SET_PERSONAL_INFO, fileJSON.personalInfo)
                    store.commit(SET_INTERNSHIP, fileJSON.internship)
                    store.commit(SET_SKILLS, fileJSON.skills)
                    store.commit(SET_EXPERIENCES, fileJSON.experiences)
                    // console.log(store.state.skills);
                })
            }

            function daSave() {
                const content = JSON.stringify(store.state)
                SaveJSON(content)
            }

            return {
                doLoad,
                daSave
            }
        }
    }

</script>

<style lang="scss" scoped>
    .upload-file {
        margin-top: 1rem;
    }

    .download-file {
        margin-top: .5rem;
    }

    .load-btn {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        i {
            font-size: 26px;
        }
    }

</style>
