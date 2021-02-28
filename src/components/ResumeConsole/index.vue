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
        border-right: 1px solid #e0e0e0;
        padding: 1.5rem;
        flex: 1;
    }

</style>
