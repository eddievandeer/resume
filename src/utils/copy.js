function isObject(obj) {
    return typeof obj === 'object' && obj != null && !isArray(obj)
}

function isArray(arr) {
    return Array.isArray(arr)
}

/**
 * 将目标对象中的所有属性拷贝到源对象中
 * @param {*} origin 源对象
 * @param {*} target 目标对象
 */
function copy(origin, target) {
    if (target == undefined || !isObject(target)) {
        return
    }

    for (const key in target) {
        if (isObject(target[key])) {
            origin[key] = {}
            copy(origin[key], target[key])
        }
        else if (isArray(target[key])) {
            origin[key] = []
            origin[key].length = target[key].length
            for (let i = 0; i < target[key].length; i++) {
                if (isObject(target[key][i])) {
                    origin[key][i] = {}
                    copy(origin[key][i], target[key][i])
                }
                else origin[key][i] = target[key][i]
            }
        }
        else {
            origin[key] = target[key]
        }
    }
}

export default copy