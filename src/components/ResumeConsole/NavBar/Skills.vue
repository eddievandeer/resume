<template>
    <div class="inputs">
        <div class="input-item" v-for="(type, key) in skillItem" :key="key">
            <my-input :type="key">
                <span>{{type}}</span>
            </my-input>
        </div>
    </div>
</template>

<script>
    import {
        reactive
    } from 'vue'
    import MyInput from '../Input/MyInput'

    export default {
        components: {
            MyInput
        },
        setup() {
            const skillItem = reactive({
                name: '姓名',
                job: '求职岗位',
                gender: '输入性别',
                university: '毕业院校',
                major: '所学专业',
                email: '联系邮箱',
                tel: '联系电话',
                github: 'GitHub主页',
                blog: '博客网站'
            })

            return {
                skillItem
            }
        }
    }

</script>

<style lang="scss" scoped>


</style>
