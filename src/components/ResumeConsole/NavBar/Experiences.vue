<template>
    <div class="inputs">
        <div v-for="(item, key) in experiences" :key="key">
            <drawer :title="item.type">
                <my-input v-model="item.type">
                    <span>类型</span>
                </my-input>
                <div class="input-item" v-for="(detail, index1) in item.details" :key="index1">
                    <my-input v-model="detail.title">
                        <span>标题 (选填)</span>
                    </my-input>
                    <div class="input-item">
                        <div class="input-description" v-for="(description, index2) in detail.descriptions" :key="index2">
                            <my-input v-model="detail.descriptions[index2]" type="textarea">
                                <span>{{'描述'+(index2+1)}}</span>
                            </my-input>
                            <remove-button :target="detail.descriptions" :index="index2" :type="'text'">
                                删除
                            </remove-button>
                        </div>
                        <add-button :target="detail.descriptions" :item="''">
                            <span>添加描述</span>
                        </add-button>
                    </div>
                    <remove-button :target="item.details" :index="index1">
                        删除该项
                    </remove-button>
                </div>
                <div class="add-experience controller-btns">
                    <add-button :target="item.details" :item="{
                        source: '',
                        title: '',
                        descriptions: [
                            '描述'
                        ]
                    }">
                        <span>添加经历</span>
                    </add-button>
                    <remove-button :target="experiences" :index="key">
                        删除经历
                    </remove-button>
                </div>
            </drawer>
        </div>
        <div class="add-experience-item">
            <add-button :type="ADD_EXPERIENCE" :item="experienceItem">
                <span>添加经历类型</span>
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
        ADD_EXPERIENCE
    } from '../../../store/mutation-types'
    import AddButton from '../Input/AddButton'
    import RemoveButton from '../Input/RemoveButton'

    export default {
        components: {
            AddButton,
            RemoveButton
        },
        setup() {
            const store = useStore()

            const experiences = store.state.experiences

            const experienceItem = reactive({
                type: '',
                details: [{
                    source: '',
                    title: '',
                    descriptions: []
                }]
            })

            return {
                experiences,
                experienceItem,
                ADD_EXPERIENCE
            }
        }
    }

</script>

<style>
    .add-experience {
        margin-bottom: 1rem;
    }

    .add-experience-item {
        margin-top: 1rem;
    }

    .input-description {
        display: flex;
        justify-content: space-between;
    }
</style>
