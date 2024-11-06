import Vue from 'vue'
import Router from 'vue-router'

import MasterAccountManager from "./components/listers/MasterAccountCards"
import MasterAccountDetail from "./components/listers/MasterAccountDetail"
import MasterItemManager from "./components/listers/MasterItemCards"
import MasterItemDetail from "./components/listers/MasterItemDetail"


Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '/masters/accounts',
            name: 'MasterAccountManager',
            component: MasterAccountManager,
        },
        {
            path: '/masters/accounts/:id',
            name: 'MasterAccountDetail',
            component: MasterAccountDetail,
        },
        { 
            path: '/masters/items',
            name: 'MasterItemManager',
            component: MasterItemManager,
        },
        {
            path: '/masters/items/:id',
            name: 'MasterItemDetail',
            component: MasterItemDetail,
        },
    ]
})
