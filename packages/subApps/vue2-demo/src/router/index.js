import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import AboutView from '../views/About.vue';
import HomeView from '../views/Home.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView }
];

export function createRouter() {
    return new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? '/vue2/' : '/',
        mode: 'history',
        routes
    });
}