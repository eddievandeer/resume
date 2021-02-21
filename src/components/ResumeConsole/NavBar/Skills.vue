<template>
    <div class="inputs">
        <div class="input-item" v-for="(item, key) in skills" :key="key">
            <drawer :title="item.type">
                <my-input v-model:value="item.type">
                    <span>{{skillItem.type}}</span>
                </my-input>
                <div class="input-item" v-for="(skill, key) in item.skill" :key="key">
                    <my-input v-model:value="skill.title">
                        <span>{{skillItem.skill[0].title}}</span>
                    </my-input>
                </div>
            </drawer>
        </div>
    </div>
</template>

<script>
    import {
        reactive
    } from 'vue'

    import {
        useStore
    } from 'vuex'

    import MyInput from '../Input/MyInput'
    import Drawer from '../Input/Drawer.vue'

    export default {
        components: {
            MyInput,
            Drawer
        },
        setup() {
            const store = useStore()

            const skills = store.state.skills

            const skillItem = reactive({
                type: '类型',
                skill: [{
                    title: '标题',
                    descriptions: [
                        '描述'
                    ]
                }]
            })

            return {
                skills,
                skillItem
            }
        }
    }

</script>

<style lang="scss" scoped>


</style>
