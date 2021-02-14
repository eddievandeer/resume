<template>
    <div class="skills-wrapper wrapper">
        <h2 class="title"><i class="fa fa-cogs" aria-hidden="true"></i>掌握技能</h2>
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
