<template>
    <div class="inputs">
        <div class="input-item">
            <div class="input-evaluation" v-for="(evaluation, index) in evaluations" :key="index">
                <my-input v-model="evaluations[index]">
                    <span>自我评价 {{index + 1}}</span>
                </my-input>
                <remove-button :target="evaluations" :index="index" type="text">
                    删除
                </remove-button>
            </div>
            <add-button :type="ADD_EVALUATION" :item="''">
                <span>添加自我评价</span>
            </add-button>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import { ADD_EVALUATION } from '../../../store/mutation-types'
    import AddButton from '../Input/AddButton'
    import RemoveButton from '../Input/RemoveButton'

    export default {
        name: 'Evaluations',
        components: {
            AddButton,
            RemoveButton
        },
        setup() {
            const store = useStore()

            const evaluations = store.state.evaluation

            return {
                evaluations,
                ADD_EVALUATION
            }
        }
    }

</script>

<style>
    .input-evaluation {
        display: flex;
        justify-content: space-around;
    }
</style>
