export const isObj = (o) => {
    return o !== null && typeof o === 'object'
}

export const isArr = (a) => {
    return Array.isArray(a)
}

export const isDef = (v) => {
    return v !== undefined && v !== null
}

export const isUndef = (v) => {
    return v === undefined || v === null
}