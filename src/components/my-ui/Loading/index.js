import vLoading from './src/directive'

export default {
    install: (app) => {
        let test = app.directive('loading', vLoading)
    },
    directive: vLoading
}