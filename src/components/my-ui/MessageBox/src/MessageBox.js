import { h, render, watch, isVNode } from 'vue'
import MessageBoxConstructor from './index.vue'

const messageInstance = new Map()

const initInstance = (props, container) => {
    const vNode = h(MessageBoxConstructor, props)
    render(vNode, container)
    document.body.appendChild(container.firstElementChild)
    return vNode.component
}

const container = document.createElement('div')

function showMessage(options) {
    options.onVanish = () => {
        render(null, container)
        messageInstance.delete(vm)
    }

    options.onAction = (action) => {
        const currentMsg = messageInstance.get(vm)
        let resolve

        if (options.showInput) {
            resolve = { value: vm.inputValue, action }
        } else {
            resolve = action
        }

        if (action === 'close') {
            currentMsg.reject(action)
        }
        else {
            currentMsg.resolve(resolve)
        }
    }

    const instance = initInstance(options, container)

    const vm = instance.proxy

    for (const prop in options) {
        if (options.hasOwnProperty(prop) && !vm.$props.hasOwnProperty(prop)) {
            vm[prop] = options[prop]
        }
    }

    watch(() => vm.customNode, (newVal, oldVal) => {
        if (isVNode(newVal)) {
            // Override slots since message is vnode type.
            instance.slots.default = () => [newVal]
        } else if (isVNode(oldVal) && !isVNode(newVal)) {
            delete instance.slots.default
        }
    }, {
        immediate: true,
    })

    vm.visible = true

    return vm
}

function MessageBox(options) {
    return new Promise((resolve, reject) => {
        const vm = showMessage(options)

        messageInstance.set(vm, {
            options,
            resolve,
            reject
        })
    })
}

MessageBox.confirm = (title, message) => {
    return MessageBox(
        Object.assign(
            {
                title: title,
                message: message,
            }
        )
    )
}

MessageBox.prompt = (title, message) => {
    return MessageBox(
        Object.assign(
            {
                title: title,
                message: message,
                showInput: true
            }
        )
    )
}

export default MessageBox