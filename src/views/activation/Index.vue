<template>
    <b-container>
        <b-row align-v="center" class="justify-content-center">
            <b-col md="6" v-if="$route.params['user_id']">
                ACTIVATE: {{ $route.params['user_id'] }}
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {

};
</script>

<style>

</style>