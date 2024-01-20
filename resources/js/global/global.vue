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

    <!--  color select content  -->
    <div class="color-wrapper" :class="{'active': colorWrapperActive}">
        <div class="color-controller">
            <button type="button" class="btn btn-gear" @click="colorController">
                <i class="bi bi-gear-fill"></i>
            </button>
            <div class="fw-semibold ms-4">Theme Colors</div>
        </div>
        <div class="color-selector">
            <button v-for="color in themeColors" :key="color" type="button" class="btn btn-circle-code p-1" :style="{ backgroundColor: color }" @click="updateThemeColor(color);"/>
        </div>
        <div class="form-control-color-selector">
            <div class="fw-semibold">Customize Theme color</div>
            <input type="color" class="form-control form-control-color" v-model="selectedColor" @input="handleColorChange">
        </div>
    </div>

</template>

<script>

import tinyColor from "tinycolor2";

export default {

    data(){

        return{
            colorWrapperActive: false,
            themeColors: ["#8C57FF", "#0D9394", "#8A8D93", "#FF4C51", "#16B1FF"],
            selectedColor: null,
        }

    },

    mounted() {

        setTimeout(() =>{
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                document.getElementById('app').removeChild(preloader)
            },1000)
        },1000);

        const savedColor = localStorage.getItem('themeColor');
        if (savedColor) {
            this.selectedColor = savedColor;
            this.updateThemeColor(savedColor);
        }

    },

    methods: {

        colorController(){
            this.colorWrapperActive = !this.colorWrapperActive
        },

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

        handleColorChange() {
            this.updateThemeColor(this.selectedColor);
        },

    }

}

</script>
