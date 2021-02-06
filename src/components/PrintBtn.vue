<template>
    <div class="print-wrapper">
        <button class="print-btn btn normal" @click="ExportSavePdf('#pdfCentent',title)">
            <i class="fa fa-print" aria-hidden="true"></i>
            <span>打印简历</span>
        </button>
    </div>
</template>

<script>
    import ExportSavePdf from '../utils/html2pdf'

    export default {
        name: 'ResumeConsole',
        setup() {
            let title = "简历"

            return {
                title,
                ExportSavePdf
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

            span {
                font-size: 14px;
                margin-left: .5rem;
            }
        }
    }

</style>
