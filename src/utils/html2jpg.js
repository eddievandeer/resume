import html2canvas from 'html2canvas'

/**
 * HTML转JPG
 * @param {string} selector DOM选择器
 * @param {string} jpgTitle 生成的JPG名称
 * @param {string} suffix   设置生成的JPG文件后缀（可选）
 */
const ExportSaveJpg = function (selector, jpgTitle = '简历', suffix = '') {
    const element = document.querySelector(selector)
    jpgTitle = jpgTitle.replace(/\./g, '')

    html2canvas(element, {
        useCORS: true,
        dpi: 350,
        scale: 2,
        logging: false,
        width: parseInt(window.getComputedStyle(element).width),
        height: parseInt(window.getComputedStyle(element).height),
        windowWidth: document.body.scrollWidth,
        windowHeight: document.body.scrollHeight
    }).then((canvas) => {
        const pageData = canvas.toDataURL('image/jpeg', 1.0);
        const aTag = document.createElement('a')
        aTag.download = jpgTitle + '.jpg'
        aTag.href = pageData
        aTag.click()
    })
}

export default ExportSaveJpg