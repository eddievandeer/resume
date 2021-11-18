<template>
    <div class="inputs">
        <load-image style="margin-bottom: 1rem"></load-image>
        <div v-for="(type, key) in inputTypes" :key="key">
            <my-input v-model="info[key]">
                <span>{{type}}</span>
            </my-input>
        </div>
    </div>
</template>

<script>
    import {
        reactive,
        defineComponent
    } from 'vue'

    import {
        useStore
    } from 'vuex'

    import LoadImage from '../Load/LoadImage'
    export default defineComponent({
        components: {
            LoadImage
        },
        setup() {
            const store = useStore()

            const info = store.state.personalInfo

            const inputTypes = reactive({
                name: '姓名',
                job: '求职岗位',
                gender: '输入性别',
                age: '输入年龄',
                qualification: '输入学历',
                university: '毕业院校',
                major: '所学专业',
                email: '联系邮箱',
                tel: '联系电话',
                github: 'GitHub主页',
                blog: '博客网站'
            })

            return {
                info,
                inputTypes
            }
        }
    })

</script>

<style lang="scss" scoped>

</style>
