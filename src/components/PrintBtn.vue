<template>
    <div class="print-wrapper">
        <button class="print-btn" @click="ExportSavePdf('#pdfCentent',title)">
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
            color: #606266;
            border-radius: 4px;
            margin: 0;
            padding: 12px 20px;
            background: #fff;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            transition: .1s;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;

            i {
                font-size: 24px;
            }

            span {
                font-size: 14px;
                margin-left: .5rem;
            }

            &:hover {
                color: #409eff;
                border-color: #c6e2ff;
                background-color: #ecf5ff;
            }

            &:active {
                color: #3a8ee6;
                border-color: #3a8ee6;
            }
        }
    }

</style>
