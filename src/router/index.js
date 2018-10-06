import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '../layout';
import * as Views from '../views';

const router = new VueRouter({
    routes: [ { path: '', component: Layout, children: [
        { path: 'activation/:user_id',  name: 'activation',     component: Views.Activation,    meta: { private: false } },
        { path: '',                     name: 'home',           component: Views.Home,          meta: { private: true  } },
        { path: 'login',                name: 'login',          component: Views.Login,         meta: { private: false } },
        { path: 'register',             name: 'registration',   component: Views.Registration,  meta: { private: false } }
    ] } ]
});

export default router;