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
                        <add-button :target="skill.descriptions" :item="''">
                            <span>添加描述</span>
                        </add-button>
                    </div>
                </div>
                <div class="input-item" v-if="item.descriptions">
                    <div v-for="(description, index) in item.descriptions" :key="index">
                        <my-input v-model="item.descriptions[index]" type="textarea">
                            <span>{{'描述'+(index+1)}}</span>
                        </my-input>
                    </div>
                    <add-button :target="item.descriptions" :item="''">
                        <span>添加描述</span>
                    </add-button>
                </div>
                <div class="add-skill">
                    <add-button :target="item.skill" :item="{
                        title: '标题',
                        descriptions: [
                            '描述'
                        ]
                    }">
                        <span>添加技能</span>
                    </add-button>
                </div>
            </drawer>
        </div>
        <div class="add-skill-item">
            <add-button :type="ADD_SKILL_ITEM" :item="skillItem">
                <span>添加技能类型</span>
            </add-button>
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

    import {
        ADD_SKILL_ITEM
    } from '../../../store/mutation-types'
    import AddButton from '../Input/AddButton'

    export default {
        components: {
            AddButton
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
                skillItem,
                ADD_SKILL_ITEM
            }
        }
    }

</script>

<style lang="scss" scoped>
    .add-skill {
        margin-bottom: 1rem;
    }

    .add-skill-item {
        margin-top: 1rem;
    }

</style>
