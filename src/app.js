import Vue from 'vue';

// Set up VeeValidate
import VeeValidate, { Validator } from 'vee-validate';
Vue.use(VeeValidate, {
    classes: true,
    classNames: { invalid: 'is-invalid', valid: 'is-valid' },
    events: '',
    fieldsBagName: 'formFields',
    locale: 'fr'
});

console.log('TEST');

// Start Vue App
import i18n from './i18n';
import router from './router';
import store from './store';

export default new Vue({ i18n, router, store }).$mount('#app');