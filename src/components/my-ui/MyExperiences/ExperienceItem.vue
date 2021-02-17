<template>
    <h3>{{item.type}}</h3>
    <div class="list-item experience" v-for="experience in item.details" :key="experience">
        <h4 class="item-title">{{ experience.title }}</h4>
        <div class="item-wrapper" v-for="description in experience.descriptions" :key="description">
            <p class="description"><i class="fa fa-circle-o" aria-hidden="true"></i>{{description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ExperienceItem',
        props: {
            item: Object
        }
    }

</script>

<style lang="scss" scoped>

</style>
