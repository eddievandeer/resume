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
                <div class="nav-bar-buttons" ref="buttons">
                    <div class="nav-bar-button" v-for="(text, index) in description" :key="text">
                        <button
                            class="nav-bar-btn btn menu"
                            :class="{'active':index==show}"
                            @click="show = index"
                        >
                            {{text}}
                        </button>
                        <my-switch v-if="parts[components[index]] !== undefined" v-model="parts[components[index]]"/> 
                    </div>
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
    const scrollStep = 210

    import {
        reactive,
        ref,
        watch
    } from 'vue'
    import { useStore } from 'vuex'

    import { SET_PARTS } from '../../../store/mutation-types'

    import Info from './Info'
    import Internship from './Internship'
    import Skills from './Skills'
    import Experiences from './Experiences'
    import Evaluations from './Evaluations.vue'
    import Theme from './Theme'

    export default {
        components: {
            Info,
            Internship,
            Skills,
            Experiences,
            Evaluations,
            Theme
        },
        setup() {
            const store = useStore()

            const show = ref(0)
            const navBar = ref()
            const buttons = ref()
            const leftDisable = ref(true)
            const rightDisable = ref(false)

            const internship = ref(true)
            const skills = ref(true)
            const experiences = ref(true)
            const evaluations = ref(false)

            const parts = reactive({
                internship,
                skills,
                experiences,
                evaluations
            })

            const components = ['info', 'internship', 'skills', 'experiences', 'evaluations', 'theme']

            const description = ['个人信息', '实习经历', '掌握技能', '项目经历', '自我评价', '主题设置']

            const handleScroll = (x, y) => {
                navBar.value.scrollTo({
                    top: y,
                    left: x,
                    behavior: 'smooth'
                })
            }

            const handleClick = (direction) => {
                let preScroll = navBar.value.scrollLeft
                const maxScroll = buttons.value.scrollWidth

                if (direction) {
                    if(preScroll == 0 || preScroll - scrollStep < 0) {
                        preScroll = 0
                        leftDisable.value = true
                    } else {
                        preScroll -= scrollStep
                        rightDisable.value = false
                    }
                } else {
                    if(preScroll == maxScroll || preScroll + navBar.value.clientWidth + scrollStep >= maxScroll) {
                        preScroll = maxScroll
                        rightDisable.value = true
                    } else {
                        preScroll += scrollStep
                        leftDisable.value = false
                    }
                }

                handleScroll(preScroll, 0)
            }

            watch([internship, skills, experiences, evaluations], (newParts, preParts) => {
                const keys = Object.keys(parts)
                newParts.forEach((part, index) => {
                    if(part == preParts[index]) return

                    if(!part) {
                        store.commit(SET_PARTS, `my-${keys[index]}`)
                    } else {
                        store.commit(SET_PARTS, {
                            name: `my-${keys[index]}`,
                            index
                        })
                    }
                })
            })

            return {
                show,
                navBar,
                buttons,
                components,
                description,
                handleClick,
                leftDisable,
                rightDisable,
                parts
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

    .nav-bar-button {
        position: relative;
        padding: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        &+.nav-bar-button::before {
            content: '';
            width: 1px;
            height: 20px;
            background: #c0c4cc;
            transform: translate(0, -50%);
            position: absolute;
            top: 50%;
            left: 0;
        }
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
        z-index: 50;
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
            left: -10px;
        }

        &.right {
            background-image: linear-gradient(to left, white 60%, transparent);
            justify-content: flex-end;
            right: -10px;
        }

        &:disabled {
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
</style>
