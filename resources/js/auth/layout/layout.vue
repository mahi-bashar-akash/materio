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

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <hr class="col-7 border">
                </div>

                <div class="d-flex justify-content-center">
                    <a href="/front/home" class="btn btn-theme d-flex justify-content-center align-items-center">
                        Go to home
                    </a>
                </div>

            </div>

        </div>
    </div>

</template>

<script>

import global from "../../global/global.vue";

export default {

    components: {
        global
    },

    data(){

        return{
            app_name: window.core.APP_NAME,
            imageUrl: '/images/dots.png',
        }

    },

    mounted() {  },

    methods: {  }

}

</script>
