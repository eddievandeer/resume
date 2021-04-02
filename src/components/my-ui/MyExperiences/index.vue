<template>
    <div class="experiences-wrapper wrapper">
        <h2 class="title">项目经历</h2>
        <experience-list></experience-list>
    </div>
</template>

<script>
    import ExperienceList from './ExperienceList'

    export default {
        name: 'MyExperiences',
        components: {
            ExperienceList
        }
    }

</script>

<style>

</style>
