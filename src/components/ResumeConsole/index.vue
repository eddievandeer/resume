<template>
    <div class="console-wrapper">
        <nav-bar></nav-bar>
        <load-json></load-json>
    </div>
</template>

<script>
    import LoadJson from './Load/LoadJson'
    import NavBar from './NavBar'

    export default {
        name: 'ResumeConsole',
        components: {
            LoadJson,
            NavBar
        }
    }

</script>

<style lang="scss" scoped>
    .console-wrapper {
        height: 100vh;
        border-right: 1px solid #e0e0e0;
        box-sizing: border-box;
        padding: 0 1.5rem 1.5rem;
        flex: 1;
        overflow: auto;
        position: sticky;
        top: 0;
        left: 0;

        &::-webkit-scrollbar {
            width: 0px;
            height: 0px;
        }
    }

</style>
