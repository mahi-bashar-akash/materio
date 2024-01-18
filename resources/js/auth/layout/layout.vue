<template>

    <!-- preloader content -->
    <div id="preloader">
        <div class="position-relative">
            <div class="spinner-border text-secondary" role="status" style="width: 150px; height: 150px;">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="position-absolute top-50 start-50 translate-middle">
                <img :src="`/images/svg/logo.svg`" class="img-fluid" style="width: 50px; height: 50px;" alt="logo">
            </div>
        </div>
    </div>

    <!-- admin authentication content -->
    <div class="admin-authentication container-fluid" style="background: url('/images/dots.png')">
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

import tinyColor from "tinycolor2";

export default {

    data(){

        return{
            app_name: window.core.APP_NAME,
            themeColors: ["#8C57FF", "#0D9394", "#8A8D93", "#FF4C51", "#16B1FF"],
            selectedColor: null,
        }

    },

    mounted() {

        setTimeout(() =>{
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                document.getElementById('auth').removeChild(preloader)
            },1000)
        },1000);

        const savedColor = localStorage.getItem('themeColor');
        if (savedColor) {
            this.selectedColor = savedColor;
            this.updateThemeColor(savedColor);
        }

    },

    methods: {

        updateThemeColor(color) {
            localStorage.setItem('themeColor', color);
            document.documentElement.style.setProperty('--theme', color);
            const darkenedColor = this.darken(color, 10);
            document.documentElement.style.setProperty('--theme-dark', darkenedColor);
            const lightenColor = this.lighten(color, 30);
            document.documentElement.style.setProperty('--theme-light', lightenColor);
            this.colorWrapperActive = false;
        },

        darken(color, amount) {
            const darkColor = tinyColor(color).darken(amount).toString();
            return darkColor;
        },

        lighten(color, amount) {
            const lightColor = tinyColor(color).lighten(amount).toString();
            return lightColor;
        },

    }

}

</script>
