import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import MyUI from './components/my-ui'
import MessageBox from './components/my-ui/MessageBox'
import Loading from './components/my-ui/Loading'
import './style/global.scss'
import './style/print.scss'
import './theme/default.scss'
import './theme/artistic.scss'
import './theme/pure.scss'
import 'font-awesome/css/font-awesome.min.css'

const app = createApp(App)
app.use(store)
app.use(MyUI)
app.use(MessageBox)
app.use(Loading)
app.mount('#app')