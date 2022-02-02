<template>
    <div>
        <div class="nav-bar-controller-x">
            <button
                class="nav-bar-controller btn menu left"
                :disabled="leftDisable"
                @click="handleClick(true)"
            >
                <i class="fa fa-angle-left"></i>
            </button>
            <div class="nav-bar" ref="navBar">
                <div class="nav-bar-buttons">
                    <button class="nav-bar-btn btn menu" :class="{'active':index==show}" v-for="(text, index) in description"
                    :key="index" @click="show = index">{{text}}</button>
                </div>
            </div>
            <button
                class="nav-bar-controller btn menu right"
                :disabled="rightDisable"
                @click="handleClick(false)"
            >
                <i class="fa fa-angle-right"></i>
            </button>
        </div>
        <div class="nav-bar-wrapper">
            <div v-for="(component, index) in components" :key="index">
                <keep-alive>
                    <component :is="component" v-if="index == show"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue'

    import Info from './Info'
    import Internship from './Internship'
    import Skills from './Skills'
    import Experiences from './Experiences'
    import Theme from './Theme'

    export default {
        components: {
            Info,
            Internship,
            Skills,
            Experiences,
            Theme
        },
        setup() {
            const show = ref(0)
            const navBar = ref()
            const leftDisable = ref(false)
            const rightDisable = ref(false)

            let timer = null

            const components = ['info', 'internship', 'skills', 'experiences', 'theme']

            const description = ['个人信息', '实习经历', '掌握技能', '项目经历', '主题设置']

            const handleScroll = (x, y) => {
                navBar.value.scrollTo({
                    top: y,
                    left: x,
                    behavior: 'smooth'
                })
            }

            const handleClick = (direction) => {
                if (direction) {
                    handleScroll(0, 0)
                    leftDisable.value = true
                    rightDisable.value = false
                } else {
                    handleScroll(navBar.value.clientWidth, 0)
                    leftDisable.value = false
                    rightDisable.value = true
                }
            }

            return {
                show,
                navBar,
                components,
                description,
                handleClick,
                leftDisable,
                rightDisable
            }
        }
    }

</script>

<style lang="scss" scoped>
    .nav-bar {
        width: 100%;
        height: auto;
        padding-bottom: 2px;
        margin-bottom: 1rem;
        overflow-x: scroll;
        overflow-y: hidden;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .nav-bar-buttons {
        width: fit-content;
        height: 3rem;
        padding: 0 1rem;
        white-space: nowrap;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }

    .nav-bar-btn,
    .nav-bar-controller {
        height: 3rem;
        font-size: 16px;
        box-sizing: border-box;
        transition: all .2s ease-in-out;
    }

    .nav-bar-btn:hover {
        color: #303133;
    }

    .nav-bar-controller-x {
        z-index: 50;
        padding-top: 1rem;
        background-color: white;
        position: sticky;
        top: 0;
        left: 0;
    }

    [class].nav-bar-controller {
        width: 2rem;
        padding: 0;
        font-size: 24px;
        display: flex;
        align-content: center;
        position: absolute;
        top: 1rem;

        &:hover {
            color: #409EFF;
        }

        &.left {
            background-image: linear-gradient(to right, white 60%, transparent);
            justify-content: flex-start;
            left: 0;
        }

        &.right {
            background-image: linear-gradient(to left, white 60%, transparent);
            justify-content: flex-end;
            right: 0;
        }

        &:disabled {
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
</style>
