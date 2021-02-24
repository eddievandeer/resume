<template>
    <div class="inputs">
        <div v-for="(item, key1) in skills" :key="key1">
            <drawer :title="item.type">
                <my-input v-model:value="item.type" @handleInput="handleAttribute(item, 'type', $event)">
                    <span>{{skillItem.type}}</span>
                </my-input>
                <div class="input-item" v-for="(skill, key2) in item.skill" :key="key2">
                    <my-input v-model:value="skill.title" @handleInput="handleAttribute(skill, 'title', $event)">
                        <span>{{skillItem.skill[0].title}}</span>
                    </my-input>
                    <div class="input-item">
                        <div v-for="(description, index) in skill.descriptions" :key="index">
                            <my-input :value="description" @handleInput="handleArray(skill.descriptions, index, $event)"
                                type="textarea">
                                <span>{{'描述'+(index+1)}}</span>
                            </my-input>
                        </div>
                    </div>
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
                skillItem,
                handleAttribute,
                handleArray
            }
        }
    }

    function handleAttribute(target, key, value) {
        target[key] = value
    }

    function handleArray(target, index, value) {
        target[index] = value
    }

</script>

<style lang="scss" scoped>
    .input-item {
        border: 1px solid #ebebeb;
        padding: .5rem 1rem;
        margin-bottom: .6rem;
        border-radius: 5px;

        &:hover {
            box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);
        }
    }

</style>
