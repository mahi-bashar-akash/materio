<template>

    <!--  color select content  -->
    <div class="color-wrapper" :class="{'active': colorWrapperActive}">
        <div class="color-controller">
            <button type="button" class="btn btn-gear" @click="colorContentToggle">
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
            /* Data properties for the component */
            colorWrapperActive: false,
            themeColors: ["#8C57FF", "#0D9394", "#8A8D93", "#FF4C51", "#16B1FF"],
            selectedColor: null,
        }

    },

    mounted() {

        const savedColor = localStorage.getItem('themeColor');
        if (savedColor) {
            this.selectedColor = savedColor;
            this.updateThemeColor(savedColor);
        }

    },

    methods: {

        /* this function to control color */
        colorContentToggle(){
            this.colorWrapperActive = !this.colorWrapperActive
        },

        /* this function to update theme color */
        updateThemeColor(color) {
            localStorage.setItem('themeColor', color);
            document.documentElement.style.setProperty('--theme', color);
            const darkenedColor = this.darken(color, 10);
            document.documentElement.style.setProperty('--theme-dark', darkenedColor);
            const lightenColor = this.lighten(color, 30);
            document.documentElement.style.setProperty('--theme-light', lightenColor);
            this.colorWrapperActive = false;
        },

        /* this function to darken color which i select as theme color to show dark  */
        darken(color, amount) {
            const darkColor = tinyColor(color).darken(amount).toString();
            return darkColor;
        },

        /* this function to darken color which i select as theme color to show light  */
        lighten(color, amount) {
            const lightColor = tinyColor(color).lighten(amount).toString();
            return lightColor;
        },

        /* this function to handle color when i use to choose from input color to choose color  */
        handleColorChange() {
            this.updateThemeColor(this.selectedColor);
        },

    }

}

</script>
