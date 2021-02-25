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

    reader.readAsDataURL(imageFile); // 发起异步请求，读取文件
    reader.onload = function () {
        // console.log(typeof this.result);
        target.value = this.result
    };
}