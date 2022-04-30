import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/view/Home'

const routers = [
    {path: '/', name: 'Home', component: Home}
]

const route = createRouter({
    history: createWebHashHistory(),
    routes: routers,
})

export default route;