/* eslint-disable */

import Vue from "vue";
import Router from "vue-router";
import store from './store/store'

Vue.use(Router);

const ifAuthenticated = (to, from, next) => {
    // next();

    if(localStorage.getItem('token') !== null && localStorage.getItem('token')!== undefined) {
        next()
    }else {
        next("/login");
    }
    // if(store.getters["auth/isAuth"]) {
    //     // next()
    // } else {
    //     next("/login");
    // }
}

export default new Router({
    routes: [
        {
            path: "/activitys",
            component: () => import("@/views/Activity"),
            beforeEnter: ifAuthenticated
        },
        {
            path: "/fund",
            component: () => import("@/views/Fund"),
            beforeEnter: ifAuthenticated
        },
        {
            name: "activitydetails",
            path: "/activitydetails/:id",
            component: () => import("@/views/ActivityDetails"),
            props: true,
            beforeEnter: ifAuthenticated
        },
        {
            name: "funddetails",
            path: "/funddetails/:id",
            component: () => import("@/views/FundDetails"),
            props: true,
            beforeEnter: ifAuthenticated
        },
        {
            name: "login",
            path: "/login",
            component: () => import("@/views/Login")
        },
        {
            name: "registration",
            path: "/registration",
            component: () => import("@/views/Registration")
        },
        {
            name: "create-activity",
            path: "/create-activity",
            component: () => import("@/views/CreateActivity"),
            beforeEnter: ifAuthenticated
        },
        {
            name: "create-fund",
            path: "/create-fund",
            component: () => import("@/views/CreateFund"),
            beforeEnter: ifAuthenticated
        },
        {
            name: "user",
            path: "/user/:uid",
            component: () => import("@/views/User"),
            beforeEnter: ifAuthenticated
        }
    ]
});