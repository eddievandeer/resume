<template>
    <div class="nav-bar-wrapper">
        <div class="nav-bar">
            <button class="nav-bar-btn btn menu" :class="{'active':index==show}" v-for="(text, index) in description"
                :key="index" @click="show = index">{{text}}</button>
        </div>
        <div v-for="(component, index) in components" :key="index">
            <keep-alive>
                <component :is="component" v-if="index == show"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue'

    import Info from './Info'
    import Skills from './Skills'
    import Experiences from './Experiences'

    export default {
        components: {
            Info,
            Skills,
            Experiences
        },
        setup() {
            const show = ref(0)

            const components = ['info', 'skills', 'experiences']

            const description = ['个人信息', '掌握技能', '项目经历', '主题设置']

            return {
                show,
                components,
                description
            }
        }
    }

</script>

<style lang="scss" scoped>
    .nav-bar {
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;

        .nav-bar-btn {
            height: 3rem;
            font-size: 16px;
            box-sizing: border-box;
            transition: all .2s ease-in-out;

            &:hover {
                color: #303133;
            }
        }
    }

</style>
