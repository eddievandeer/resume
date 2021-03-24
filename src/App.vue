<template>
    <div class="generator-wrapper">
        <resume-console></resume-console>
        <container></container>
        <print-btn></print-btn>
    </div>
    <to-top></to-top>
</template>

<script>
    import ResumeConsole from './components/ResumeConsole'
    import Container from './components/Container'
    import PrintBtn from './components/PrintBtn'

    export default {
        name: 'App',
        components: {
            ResumeConsole,
            Container,
            PrintBtn
        }
    }

</script>

<style lang="scss" scoped>
    .generator-wrapper {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        position: relative;
    }

</style>
