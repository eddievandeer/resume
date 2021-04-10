<template>
    <div class="list-wrapper experiences" v-for="(item, index) in experiences" :key="index">
        <drag-wrapper :index="index" type="experiences">
            <experience-item :item="item"></experience-item>
        </drag-wrapper>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'

    import ExperienceItem from './ExperienceItem'

    export default {
        name: 'ExperienceList',
        components: {
            ExperienceItem
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
