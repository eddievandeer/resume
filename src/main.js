import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import MyUI from './components/my-ui'

const app = createApp(App)
app.use(store)
app.use(MyUI)
app.mount('#app')