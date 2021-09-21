<template>
    <div class="inputs">
        <div v-for="(item, key) in internship" :key="key">
            <my-input v-model="item.title">
                <span>公司名称</span>
            </my-input>
            <my-input v-model="item.type">
                <span>工作性质</span>
            </my-input>
            <my-input v-model="item.startTime">
                <span>起始时间</span>
            </my-input>
            <my-input v-model="item.endTime">
                <span>结束时间</span>
            </my-input>
            <div class="input-item">
                <div v-for="(description, index) in item.descriptions" :key="index">
                    <my-input v-model="item.descriptions[index]" type="textarea">
                        <span>{{'描述' + (index + 1)}}</span>
                    </my-input>
                </div>
                <div class="controller-btns">
                    <add-button :target="item.descriptions" :item="''">
                        <span>添加描述</span>
                    </add-button>
                </div>
            </div>
            <div class="add-experience controller-btns">
                <add-button :type="ADD_INTERNSHIP_EXPERIENCE" :item="internshipItem">
                    <span>添加实习经历</span>
                </add-button>
                <remove-button :target="internship" :index="key">
                    删除经历
                </remove-button>
            </div>
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
        ADD_INTERNSHIP_EXPERIENCE
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

            const internship = store.state.internship

            const internshipItem = reactive({
                title: '实习公司',
                startTime: '起始时间',
                endTime: '结束时间',
                descriptions: [
                    '实习经历描述'
                ]
            })

            return {
                internship,
                internshipItem,
                ADD_INTERNSHIP_EXPERIENCE
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
