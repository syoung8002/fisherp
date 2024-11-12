
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import PurchaseManager from "./components/ui/PurchaseGrid"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/purchases',
                name: 'PurchaseManager',
                component: PurchaseManager
            },

    ]
})
