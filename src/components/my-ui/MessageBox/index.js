import MessageBox from './src/MessageBox'

const _MessageBox = MessageBox

_MessageBox.install = app => {
    app.config.globalProperties.$msgBox = _MessageBox
    app.config.globalProperties.$confirm = _MessageBox.confirm
    app.config.globalProperties.$prompt = _MessageBox.prompt
}

export default _MessageBox