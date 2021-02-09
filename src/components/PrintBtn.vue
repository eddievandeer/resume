<template>
    <div class="print-wrapper">
        <button class="print-btn btn normal" @click="show = !show">
            <i class="fa fa-print" aria-hidden="true"></i>
            <span>打印简历</span>
        </button>
        <div class="file-name" v-if="show">
            <div class="mask"></div>
            <div class="file-name-container">
                <div class="close" @click="show = !show"><i class="fa fa-times" aria-hidden="true"></i></div>
                <input class="file-name-input" type="text" v-model="title" placeholder="请输入文件名">
                <button class="print-btn btn normal" @click="doPrint('#pdfCentent', title)">
                    <span>确认打印</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue'
    import ExportSavePdf from '../utils/html2pdf'

    export default {
        name: 'ResumeConsole',
        setup() {
            const show = ref(false)
            const title = ref("")

            function doPrint(el, title) {
                ExportSavePdf(el, title)
                show.value = !show.value
            }

            return {
                show,
                title,
                doPrint
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

        .file-name {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;

            .mask {
                z-index: 10;
                width: 100%;
                height: 100%;
                background-color: rgba($color: #000000, $alpha: .6);
                position: absolute;
                top: 0;
                left: 0;
            }

            .file-name-container {
                z-index: 20;
                padding: 2rem 2.6rem;
                background-color: white;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                position: relative;

                .close {
                    color: #909399;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 300;
                    font-variant: normal;
                    text-transform: none;
                    line-height: 1;
                    vertical-align: baseline;
                    position: absolute;
                    top: .3rem;
                    right: .3rem;
                    cursor: pointer;
                }

                .file-name-input {
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 4px;
                    border: 1px solid #dcdfe6;
                    box-sizing: border-box;
                    color: #606266;
                    padding: 0 15px;
                    margin-bottom: 1rem;
                    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);

                    &:focus {
                        border-color: #409eff;
                    }
                }
            }
        }
    }

</style>
