import { createApp } from 'vue'
import App from './App.vue'
import route from './common/Route.js'


const myApp = createApp(App);
myApp.use(route)
myApp.mount('#app')