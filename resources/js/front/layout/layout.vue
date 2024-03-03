<template>

    <Global/>

    <Header/>

    <!-- router content view -->
    <div class="w-100 py-4" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <router-view/>
        </div>
    </div>

    <Footer/>

</template>

<script>

import Global from "../../global/global.vue";
import Header from "./includes/header.vue";
import Footer from "./includes/footer.vue";

export default {

    components: {
        /* components for global, header and footer */
        Global, Header, Footer
    },

    data(){

        return{
            /* Data properties for the component */
            imageUrl: '/images/dots.png',

        }

    },

    mounted() {  },

    methods: {  }

}

</script>
