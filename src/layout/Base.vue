<template>
    <div class="wrapper">
        <navbar :user-menu="isUserMenuDisplayed" :user-fullname="userFullname"></navbar>
        <div :class="[ contentClass ]" class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import { mapGetters  } from 'vuex';

import Navbar from './Navbar.vue';

Vue.use(BootstrapVue);

export default {
    components: {
        Navbar
    },
    computed: {
        contentClass() {
            return this.$route.name;
        },
        ...mapGetters({
            isUserMenuDisplayed: 'session/isLoggedIn',
            userFullname: 'session/user/fullname'
        })
    }
};
</script>

<style lang="scss">
@import "../assets/style/colors";

$theme-colors: (
    "primary": $enmouvement-green,
    "dark": $enmouvement-purple,
    "light": $enmouvement-yellow
);

@import "~bootstrap/scss/bootstrap";
@import "~bootstrap-vue/dist/bootstrap-vue.css";

body
{
    background-color: #f9f9f9;
}

.card.border-light
{
    a
    {
        color: $enmouvement-yellow;
    }
}
</style>
