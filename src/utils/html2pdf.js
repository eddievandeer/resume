import html2canvas from 'html2canvas'
import JSPDF from 'jspdf'

/**
 * HTML转PDF
 * @param {string} selector DOM选择器
 * @param {string} pdfTitle 生成的PDF名称
 * @param {string} suffix   设置生成的PDF文件后缀（可选）
 */
const ExportSavePdf = function (selector, pdfTitle = '简历', suffix = '') {
    const element = document.querySelector(selector)

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
        const pdf = new JSPDF('p', 'pt', [canvas.width / 2, canvas.height / 2])
        const pageData = canvas.toDataURL('image/jpeg', 1.0);

        pdf.addImage(pageData, 'JPEG', 0, 0, canvas.width / 2, canvas.height / 2);

        pdf.save(pdfTitle + suffix)
    })
}

export default ExportSavePdf