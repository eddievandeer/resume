<template>
    <div class="inputs">
        <div v-for="(item, key1) in skills" :key="key1">
            <drawer :title="item.type">
                <my-input v-model="item.type">
                    <span>{{skillItem.type}}</span>
                </my-input>
                <div class="input-item" v-for="(skill, key2) in item.skill" :key="key2">
                    <my-input v-model="skill.title">
                        <span>{{'标题'}}</span>
                    </my-input>
                    <div class="input-item">
                        <div v-for="(description, index) in skill.descriptions" :key="index">
                            <my-input v-model="skill.descriptions[index]" type="textarea">
                                <span>{{'描述'+(index+1)}}</span>
                            </my-input>
                        </div>
                    </div>
                </div>
                <div class="input-item" v-for="(description, index) in item.descriptions" :key="index">
                    <my-input v-model="item.descriptions[index]" type="textarea">
                        <span>{{'描述'+(index+1)}}</span>
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

    export default {
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
