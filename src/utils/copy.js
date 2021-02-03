function isObject(obj) {
    return typeof obj === 'object' && obj != null
}

/**
 * 将目标对象中的所有属性拷贝到源对象中
 * @param {*} origin 源对象
 * @param {*} target 目标对象
 */
function copy(origin, target) {
    if (origin == undefined || !isObject(origin)) {
        return
    }

    for (const key in origin) {
        if (isObject(origin[key])) {
            copy(origin[key], target[key])
        }
        else {
            origin[key] = target[key]
        }
    }
}

export default copy