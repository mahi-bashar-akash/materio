<template>

    <global/>

    <!-- admin authentication content -->
    <div class="user-authentication container-fluid" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="d-flex justify-content-center align-items-center min-vh-100">

            <!-- form-content -->
            <div class="form-content my-4">
                <div class="mb-3 h5 d-flex align-items-center justify-content-center">

                    <!-- logo image with name -->
                    <img :src="`/images/svg/logo.svg`" class="img-fluid me-3" style="width: 35px; height: 35px;" alt="logo">
                    {{app_name}}

                </div>

                <router-view/>

            </div>

        </div>
    </div>

</template>

<script>

import global from "../../../global/global.vue";

export default {

    components: {
        /* components for uses purpose */
        global
    },

    data(){

        return{
            /* Data properties for the component */
            app_name: window.core.APP_NAME,
            imageUrl: '/images/dots.png',
        }

    },

    mounted() {  },

    methods: {  }

}

</script>
