<template>
    <div class="evaluation-wrapper wrapper">
        <h2 class="title">自我评价</h2>
        <div class="list-wrapper evaluation">
            <div v-for="(evaluation, index) in evaluations" :key="index">
                <p class="description"><i class="fa fa-circle-o" aria-hidden="true"></i>{{evaluation}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex'

    export default {
        name: 'MyEvaluations',
        setup() {
            const store = useStore()
            const evaluations = store.state.evaluation

            return {
                evaluations
            }
        }
    }

</script>

<style>

</style>
