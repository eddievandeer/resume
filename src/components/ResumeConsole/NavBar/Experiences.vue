<template>
    <div class="inputs">
        <div v-for="(item, key) in experiences" :key="key">
            <drawer :title="item.type">
                <my-input v-model="item.type">
                    <span>类型</span>
                </my-input>
                <div class="input-item" v-for="(detail, index1) in item.details" :key="index1">
                    <my-input v-model="detail.title">
                        <span>标题</span>
                    </my-input>
                    <div class="input-item">
                        <div v-for="(description, index2) in detail.descriptions" :key="index2">
                            <my-input v-model="detail.descriptions[index2]" type="textarea">
                                <span>{{'描述'+(index2+1)}}</span>
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

            const experiences = store.state.experiences

            return {
                experiences
            }
        }
    }

</script>

<style>

</style>
