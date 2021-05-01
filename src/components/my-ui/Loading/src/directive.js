import { render } from 'vue'
import Loading from './loading'

const container = document.createElement('div')

const initInstance = (el, binding) => {
    el.style.position = 'relative'

    updateLoading(el, binding)
}

const closeLoading = (el) => {
    render(null, container)
}

const updateLoading = (el, binding) => {
    const typeExr = parseInt(el.getAttribute('loading-type'))
    const textExr = el.getAttribute('loading-text')

    Loading(el, container, {
        loading: !binding.value,
        type: typeExr || 1,
        text: textExr || ''
    })
}

const vLoading = {
    mounted(el, binding) {
        initInstance(el, binding)
    },
    updated(el, binding) {
        if (binding.oldValue !== binding.value) {
            if (!binding.value) {
                updateLoading(el, binding)
            } else {
                closeLoading(el)
            }
        }
    }
}

export default vLoading