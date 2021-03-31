export function LoadJSON(el, handler) {
    const reader = new FileReader()

    const file = document.querySelector(el)

    const JSONFile = file.files[0]

    reader.readAsText(JSONFile, 'utf-8')
    reader.onload = handler

    file.value = ''
}

export function LoadImage(el, target) {
    const reader = new FileReader()
    const imageFile = document.querySelector(el).files[0]

    reader.readAsDataURL(imageFile) // 发起异步请求，读取文件
    reader.onload = function () {
        // console.log(typeof this.result)
        target.value = this.result
    }
}

export function SaveJSON(content, fileName) {
    const eleLink = document.createElement('a')

    if (!fileName) {
        const date = new Date()
        fileName = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}_${date.getMilliseconds()}.json`
    }

    eleLink.download = fileName
    eleLink.style.display = 'none'

    // 字符内容转变成blob地址
    const blob = new Blob([content])
    eleLink.href = URL.createObjectURL(blob)
    // 触发点击
    document.body.appendChild(eleLink)
    eleLink.click()
    // 然后移除
    document.body.removeChild(eleLink)
}