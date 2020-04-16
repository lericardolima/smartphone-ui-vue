import Vue from 'vue'
import VueRouter from 'vue-router';
import Smartphones from '../pages/Smartphones.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/smartphones',
        component: Smartphones
    },
    {
        path: '*',
        redirect: '/smartphones'
    }
];

export default new VueRouter({
    routes,
    mode: 'history'
});