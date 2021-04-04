<template>
    <div class="print-wrapper">
        <button class="print-btn btn normal" @click="clickHandler">
            <i class="fa fa-print" aria-hidden="true"></i>
            <span>打印简历</span>
        </button>
    </div>
</template>

<script>
    import {
        getCurrentInstance
    } from 'vue'
    import ExportSavePdf from '../utils/html2pdf'

    export default {
        name: 'ResumeConsole',
        setup() {
            const {
                proxy
            } = getCurrentInstance()

            function clickHandler() {
                proxy.$prompt('打印简历', '请输入文件名').then(({
                    value
                }) => {
                    ExportSavePdf('#pdfCentent', value)
                })
            }

            return {
                clickHandler
            }
        }
    }

</script>

<style lang="scss" scoped>
    .print-wrapper {
        position: fixed;
        top: 1rem;
        right: 1rem;

        .print-btn {

            i {
                font-size: 24px;
            }

            i+span {
                font-size: 14px;
                margin-left: .5rem;
            }
        }
    }

</style>
