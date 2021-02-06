<template>
    <div class="skills-wrapper wrapper">
        <h2 class="title">掌握技能</h2>
        <skill-list></skill-list>
    </div>
</template>

<script>
    import SkillList from './SkillList'

    export default {
        name: 'MySkills',
        components: {
            SkillList
        }
    }

</script>

<style lang="scss" scoped>
</style>
