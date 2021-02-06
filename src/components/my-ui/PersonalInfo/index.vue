<template>
    <div class="info-wrapper wrapper" :class="style">
        <div class="info-image">
            <div class="image">
                <img :src="info.image" alt="加载中..." v-if="info.image.length > 0">
            </div>
            <span>{{info.name}}</span>
            {{info.job}}
        </div>
        <info-detail v-if="info.name.length > 0" :info="info"></info-detail>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'
    import InfoDetail from './InfoDetail.vue'

    export default {
        name: 'PersonalInfo',
        components: {
            InfoDetail
        },
        props: {
            style: String
        },
        setup() {
            const store = useStore()

            const info = store.state.personalInfo

            return {
                info
            }
        }
    }

</script>

<style lang="scss" scoped>
    .info-wrapper {
        flex: 1;
        // background-color: #C0E3E7;
        color: white;
        background-color: #232240;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .info-image {
            color: #ccc;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .image {
                width: 8rem;
                height: 8rem;
                border-radius: 50%;
                margin-bottom: .6rem;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 100%;
                    height: auto;
                }
            }

            // img {
            //     width: 8rem;
            //     height: 8rem;
            //     border-radius: 50%;
            //     margin-bottom: .6rem;
            //     object-fit: cover;
            // }

            span {
                color: white;
                font-size: 24px;
                letter-spacing: 1px;
            }
        }

        .info-detail {
            min-width: 8rem;
            // flex: 7;
        }

        &.horizontal {
            padding-top: 4rem;
            padding-bottom: 4rem;
            flex-direction: column;
        }

        &.vertical {
            padding-top: 1.2rem;
            padding-bottom: 0rem;
            flex-direction: row;
        }
    }

</style>
