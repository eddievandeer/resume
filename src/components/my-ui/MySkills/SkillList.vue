<template>
    <div class="list-wrapper skills" v-for="(item, index) in skills" :key="index">
        <drag-wrapper :index="index" type="skills">
            <h3>{{item.type}}</h3>
            <skill-item :item="item"></skill-item>
        </drag-wrapper>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'

    import SkillItem from './SkillItem'

    export default {
        name: 'SkillList',
        components: {
            SkillItem
        },
        setup() {
            const store = useStore()
            const skills = store.state.skills

            return {
                skills
            }
        }
    }

</script>

<style>

</style>
