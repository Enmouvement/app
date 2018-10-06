import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '../layout';
import * as Views from '../views';

const router = new VueRouter({
    routes: [ { path: '', component: Layout, children: [
        { path: '',                     component: Views.Home       },
        { path: 'activation/:user_id',  component: Views.Activation }
    ] } ]
});

export default router;