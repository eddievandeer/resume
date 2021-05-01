import { h, render } from 'vue'
import LoadingConstructor from './index.vue'

export default function Loading(el, container, options) {
    const vNode = h(LoadingConstructor, options)

    render(vNode, container)

    el.appendChild(container.firstElementChild)

    const vm = vNode.component.proxy

    for (const prop in options) {
        if (options.hasOwnProperty(prop) && !vm.$props.hasOwnProperty(prop)) {
            vm[prop] = options[prop]
        }
    }
}