<template>

    <Global/>

    <div class="modal fade" id="openNewsLetterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content object-fit-cover img-fluid py-2 px-0" :style="{ background: 'url(' + NewsLetterImageUrl + ')' }">
                <div class="modal-header d-flex justify-content-end border-bottom-0">
                    <button type="button" class="btn-close" @click="closeNewsLetter"></button>
                </div>
                <form autocomplete="off" class="modal-body">
                    <div v-if="content === 'submitEmail'">
                        <div class="fs-5 text-center fw-bold mb-3">
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
                                <button type="submit" class="btn btn-theme rounded-0 w-100" @click="content = 'showThanksMessage'">
                                    Subscribe
                                </button>
                            </div>
                            <label for="checkbox" class="form-label text-secondary text-opacity-75">
                                <input id="checkbox" type="checkbox" class="form-check-input" name="newLetterPass">
                                Don't show this popup again
                            </label>
                        </div>
                    </div>
                    <div v-if="content === 'showThanksMessage'">
                        <div class="fs-5 mb-3 text-center fw-bold">
                            Welcome to send your Email.
                        </div>
                        <div class="text-center mb-3 text-secondary text-opacity-75">
                            You receive email from us.
                        </div>
                        <div class="text-center pb-5 text-secondary text-opacity-75">
                            Enjoy your day to visit our website.
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

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
            NewsLetterImageUrl: '/images/news-letter.png',
            content: 'submitEmail',
        }

    },

    mounted() {

        setTimeout(() => {
            this.openNewsLetter()
        }, 7000);

    },

    methods: {

        /* Function to open newsLetter */
        openNewsLetter() {
            const myModal = new bootstrap.Modal("#openNewsLetterModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to close newsletter */
        closeNewsLetter() {
            let myModalEl = document.getElementById('openNewsLetterModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
