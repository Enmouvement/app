<template>
    <b-navbar toggleable="md" type="dark" variant="primary">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">
            <!-- <img src="../../assets/img/favicon.png" /> -->
        </b-navbar-brand>
        <b-collapse v-if="userMenu" :is-nav="true" id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item href="#">MENU 1</b-nav-item>
                <b-nav-item href="#">MENU 2</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <template slot="button-content">{{ userFullname }}</template>
                    <b-dropdown-item href="#" @click="logout($event)">Déconnexion</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    props: {
        userMenu: Boolean,
        userFullname: String
    },
    methods: {
        logout($event) {
            $event.preventDefault();
            this.$store.commit('session/logout');
            this.$router.push({ name: 'login' });
        }
    }
};
</script>

<style lang="scss">
.navbar
{
    .navbar-brand
    {
        line-height: 1rem;

        img
        {
            height: 30px;
        }
    }
}
</style>
