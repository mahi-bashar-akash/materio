<template>

    <div class="news-letter" :class="{ 'active': showNewsLetter }">
        <div class="news-modal py-4 px-3 img-fluid object-fit-cover" :style="{ background: 'url(' + NewsLetterImageUrl + ')' }">

            <div class="d-flex justify-content-end">
                <button type="button" class="btn-close shadow-none" @click="closeNewsLetter"></button>
            </div>

            <div class="fs-5 text-center fw-bold mb-3 pt-5">
                Become a subscriber
            </div>

            <div class="text-center mb-3 text-secondary text-opacity-75">
                Subscribe to get the notification of latest posts
            </div>

            <div class="d-flex justify-content-center align-items-center flex-column">
                <div class="col-10 mb-3">
                    <input type="text" name="" class="form-control shadow-none border border-secondary rounded-0" placeholder="Your email address" autocomplete="new-news-letter" required>
                </div>
                <div class="col-4 mb-4">
                    <button type="button" class="btn btn-theme rounded-0 w-100">
                        Subscribe
                    </button>
                </div>
                <label for="checkbox" class="form-label text-secondary text-opacity-75">
                    <input id="checkbox" type="checkbox" class="form-check-input" name="newLetterPass">
                    Don't show this popup again
                </label>
            </div>

        </div>
    </div>

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
            NewsLetterImageUrl: '/images/news-letter.webp',
            showNewsLetter: false,
        }

    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {

        /* Function to check if user has scrolled enough to reveal the news-letter content */
        handleScroll() {

            if (!this.showNewsLetter && window.scrollY > 100) {
                this.showNewsLetter = true;
            }
        },

        /* Function to close newsletter */
        closeNewsLetter() {
            let newsModal = document.querySelector('.news-letter');
            if (newsModal.classList.contains('news-letter')) {
                newsModal.classList.add('content-none');
            }
        },

    }

}

</script>
