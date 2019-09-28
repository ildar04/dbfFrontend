import Vue from "vue";
import Router from "vue-router";
import store from "./store/store";

Vue.use(Router);

const ifAuthenticated = (to, from, next) => {
    // next();
    if (store.getters["auth/isAuth"]) {
        next()
    } else {
        next("/login");
    }
}

export default new Router({
    routes: [
        {
            path: "/",
            component: () => import("@/views/Home"),
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
            component: () => import("@/views/CreateActivity")
        }

    ]
});