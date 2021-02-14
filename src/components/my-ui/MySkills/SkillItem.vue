<template>
    <div class="list-item">
        <div class="skill" v-for="skill in item.skill" :key="skill">
            <h4 class="item-title">{{ skill.title }}</h4>
            <div class="item-wrapper" v-for="description in skill.descriptions" :key="description">
                <p class="description"><i class="fa fa-circle-o" aria-hidden="true"></i>{{description}}</p>
            </div>
        </div>
        <div class="else">
            <div class="item-wrapper" v-for="description in item.descriptions" :key="description">
                <p class="description"><i class="fa fa-circle-o" aria-hidden="true"></i>{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkillItem',
        props: {
            item: Object
        }
    }

</script>

<style lang="scss" scoped>

</style>
