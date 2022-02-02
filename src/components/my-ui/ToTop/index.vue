<template>
    <div class="back-to-top" @click="toTop">
        <svg data-v-5fd4ef0c="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.484 28.284"
            :class="['go-to-top', transition]" v-if="!transition.fade">
            <g data-v-5fd4ef0c="" transform="translate(-229 -126.358)">
                <rect data-v-5fd4ef0c="" fill="currentColor" width="35" height="5" rx="2"
                    transform="translate(229 151.107) rotate(-45)"></rect>
                <rect data-v-5fd4ef0c="" fill="currentColor" width="35" height="5" rx="2"
                    transform="translate(274.949 154.642) rotate(-135)"></rect>
            </g>
        </svg>
    </div>
</template>

<script>
    import {
        reactive
    } from 'vue'

    export default {
        name: 'ToTop',
        setup() {
            const transition = reactive({
                fade: true,
                show: false,
                'fade-active': false,
                'show-active': false
            })

            function onScroll() {
                let timer = null
                let scrolled = document.documentElement.scrollTop || document.body.scrollTop

                if (scrolled > 100) {
                    if (transition.show) return
                    transition['show-active'] = true
                    transition.fade = false

                    timer && clearTimeout(timer)

                    timer = setTimeout(() => {
                        transition['show-active'] = false
                        transition.show = true
                    }, 100)
                } else {
                    if (transition.fade) return
                    transition['fade-active'] = true
                    transition.show = false

                    timer && clearTimeout(timer)

                    timer = setTimeout(() => {
                        transition['fade-active'] = false
                        transition.fade = true
                    }, 300)
                }
            }

            window.addEventListener('scroll', onScroll, false)

            return {
                transition,
                toTop
            }
        }
    }

    function toTop() {
        window.scrollTo(0, 0)
    }

</script>

<style lang="scss" scoped>
    .back-to-top {
        display: block;
    }

    .go-to-top {
        cursor: pointer;
        position: fixed;
        bottom: 2rem;
        right: 2.5rem;
        width: 2rem;
        color: #2a80b9;
        transition: all .3s ease-in-out;
        z-index: 1;

        &.show {
            transform: rotateZ(0turn);
            opacity: 1;
        }

        &.show-active {
            transform: rotateZ(0.5turn);
            opacity: 0;
        }

        &.fade-active {
            transform: rotateZ(0.5turn);
            opacity: 0;
        }
    }
</style>
