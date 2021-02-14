<template>
    <div class="experiences-wrapper wrapper">
        <h2 class="title"><i class="fa fa-file-text-o" aria-hidden="true"></i>项目经历</h2>
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
