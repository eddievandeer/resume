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

<script setup>
    import {
        reactive
    } from 'vue'

    import {
        useStore
    } from 'vuex'

    import LoadImage from '../Load/LoadImage'

    const store = useStore()

    const info = store.state.personalInfo

    const inputTypes = {
        name: '姓名',
        job: '求职岗位',
        gender: '输入性别',
        university: '毕业院校',
        major: '所学专业',
        email: '联系邮箱',
        tel: '联系电话',
        github: 'GitHub主页',
        blog: '博客网站'
    }
</script>

<style lang="scss" scoped>

</style>
