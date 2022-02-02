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
        h,
        getCurrentInstance,
        ref,
        watch
    } from 'vue'
    import ExportSavePdf from '../utils/html2pdf'
    import ExportSaveJpg from '../utils/html2jpg'

    import MyRadio from './my-ui/MyRadio'

    export default {
        name: 'ResumeConsole',
        setup(props, {
            emit
        }) {
            const {
                proxy
            } = getCurrentInstance()

            let printType = ref(1)

            watch(() => printType, (newValue) => {
                console.log(newValue);
            })

            function clickHandler() {
                // proxy.$prompt('打印简历', '请输入文件名').then(({
                //     value,
                //     type
                // }) => {
                //     // ExportSavePdf('#pdfCentent', value)
                //     ExportSaveJpg('#pdfCentent', value)
                // })
                proxy.$msgBox({
                    title: '打印简历',
                    message: '请输入文件名',
                    customNode: h('div', null, [
                        h(MyRadio, {
                            modelValue: printType,
                            'onUpdate:modelValue': value => printType.value = value,
                            label: 1
                        }, {
                            default: () => h('span', null, '打印图片PDF格式(不可复制)')
                        }),
                        h(MyRadio, {
                            modelValue: printType,
                            'onUpdate:modelValue': value => printType.value = value,
                            label: 2
                        }, {
                            default: () => h('span', null, '打印文字PDF格式(可复制)')
                        }),
                        h(MyRadio, {
                            modelValue: printType,
                            'onUpdate:modelValue': value => printType.value = value,
                            label: 3
                        }, {
                            default: () => h('span', null, '打印JPG格式')
                        })
                    ]),
                    showInput: true
                }).then(({
                    value
                }) => {
                    switch (printType.value) {
                        case 1:
                            ExportSavePdf('#pdfCentent', value)
                            break
                        case 2:
                            setTimeout(() => {
                                document.title = value
                                window.print();
                                document.title = '简历生成器'
                            }, 500)
                            break
                        case 3:
                            ExportSaveJpg('#pdfCentent', value)
                            break
                        default:
                            break
                    }
                }, () => {
                    printType.value = 1
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
    }

    .print-btn {

        i {
            font-size: 24px;
        }

        i+span {
            font-size: 14px;
            margin-left: .5rem;
        }
    }
</style>
