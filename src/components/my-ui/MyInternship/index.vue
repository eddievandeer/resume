<template>
    <div class="internship-wrapper wrapper">
        <h2 class="title">工作经历</h2>
        <internship-list></internship-list>
    </div>
</template>

<script>
    import InternshipList from './InternshipList'

    export default {
        name: 'MyInternship',
        components: {
            InternshipList
        }
    }

</script>

<style>

</style>