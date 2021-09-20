<template>
    <div class="list-wrapper internship" v-for="(item, index) in internship" :key="index">
        <drag-wrapper :index="index" type="internship">
            <h3>{{`${item.title}  ${item.startTime} - ${item.endTime}`}}</h3>
            <div style="margin-top: 0.4rem">
                <div v-for="description in item.descriptions" :key="description">
                    <p class="description"><i class="fa fa-circle-o" aria-hidden="true"></i>{{description}}</p>
                </div>
            </div>
        </drag-wrapper>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'

    export default {
        name: 'InternList',
        setup() {
            const store = useStore()
            const internship = store.state.internship

            return {
                internship
            }
        }
    }

</script>