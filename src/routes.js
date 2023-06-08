import Vue from "vue";
import VueRouter from "vue-router";

import IndexPage from "./pages/index.vue";
import StorePage from "./pages/store.vue";

Vue.use(VueRouter);

// Index page - solution with vuex store
// /store page - solution with vuex store
const routes = [
    { path: "/", component: IndexPage },
    { path: "/store", component: StorePage },
];

export const router = new VueRouter({
    routes,
});
