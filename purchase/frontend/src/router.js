import Vue from 'vue'
import Router from 'vue-router'

import PurchasePurchaseManager from "./components/listers/PurchasePurchaseCards"
import PurchasePurchaseDetail from "./components/listers/PurchasePurchaseDetail"


Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '/purchases/purchases',
            name: 'PurchasePurchaseManager',
            component: PurchasePurchaseManager,
        },
        {
            path: '/purchases/purchases/:id',
            name: 'PurchasePurchaseDetail',
            component: PurchasePurchaseDetail,
        },
        {
            path: '/queryPurchases',
            name: 'QueryPurchaseView',
            component: QueryPurchaseView,
        },
        {
            path: '/queryPurchases/:id',
            name: 'QueryPurchaseViewDetail',
            component: QueryPurchaseViewDetail,
        },
    ]
})
