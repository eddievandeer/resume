<template>
    <div class="info-wrapper wrapper" :class="style">
        <div class="info-image">
            <div class="image" v-loading="loaded" loading-type="2" loading-text="正在加载中...">
                <img src="/images/avatar.png" ref="image" alt="加载中...">
            </div>
            <span>{{info.name}}</span>
            {{info.job}}
        </div>
        <info-detail :info="info"></info-detail>
    </div>
</template>

<script>
    import {
        ref,
        watch
    } from 'vue'

    import {
        useStore
    } from 'vuex'

    import InfoDetail from './InfoDetail.vue'

    function loadImage(target, url, loaded) {
        const img = document.createElement('img')
        img.src = url
        loaded.value = false

        img.addEventListener('load', () => {
            target._value.src = url
            loaded.value = true
        })

        img.addEventListener('error', () => {
            target._value.src = '/images/avatar.png'
            loaded.value = true
        })
    }

    export default {
        name: 'PersonalInfo',
        components: {
            InfoDetail
        },
        props: {
            style: String
        },
        setup() {
            const image = ref()
            const loaded = ref(false)

            const store = useStore()

            const info = store.state.personalInfo

            // loadImage(image, info.image, loaded)

            watch(() => info.image, (newImage) => {
                loadImage(image, newImage, loaded)
            }, {
                immediate: true,
            })

            return {
                info,
                loaded,
                image
            }
        }
    }

</script>

<style lang="scss" scoped>
    .info-wrapper {
        flex: 1;
        // background-color: #C0E3E7;
        // background-color: #232240;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .info-image {
            width: fit-content;
            white-space:nowrap;
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

            span {
                font-size: 24px;
                letter-spacing: 3px;
            }
        }

        .info-detail {
            min-width: 8rem;
            display: flex;
            // flex: 7;
        }

        &.horizontal {
            padding-top: 4rem;
            padding-bottom: 4rem;
            flex-direction: column;

            .info-detail {
                flex-direction: column;
            }
        }

        &.vertical {
            padding-top: 1.2rem;
            padding-bottom: 0rem;
            flex-direction: row;
            align-items: flex-end;

            .info-detail {
                flex-direction: row;
                justify-content: flex-end;

                margin-bottom: 0;
            }
        }
    }

</style>
