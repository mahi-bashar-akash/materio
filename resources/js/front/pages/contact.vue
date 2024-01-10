<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 p-3 p-sm-4">
                <div class="fs-4 fw-semibold">
                    Find us here.
                </div>
                <div class="mt-4 d-flex justify-content-start align-items-center">
                    <i class="bi bi-geo-alt py-2 px-3 border"></i>
                    <div class="ms-2">
                        <div class="fw-semibold d-block">
                            Address:
                        </div>
                        <small class="text-secondary d-block">
                            1234 Heaven Stress, Beverly Hill, Melbourne, USA.
                        </small>
                    </div>
                </div>
                <div class="mt-4 d-flex justify-content-start align-items-center">
                    <i class="bi bi-telephone py-2 px-3 border"></i>
                    <div class="ms-2">
                        <div class="fw-semibold d-block">
                            Phone Number:
                        </div>
                        <small class="text-secondary d-block">
                            (800) 123 456 789, (800) 987 654 321
                        </small>
                    </div>
                </div>
                <div class="mt-4 d-flex justify-content-start align-items-center">
                    <i class="bi bi-geo-alt py-2 px-3 border"></i>
                    <div class="ms-2">
                        <div class="fw-semibold d-block">
                            Email:
                        </div>
                        <small class="text-secondary d-block">
                            Contact@themedevelopment.com
                        </small>
                    </div>
                </div>
                <div class="mt-4 text-secondary">
                    <span class="fs-4"> {{app_name}} </span> is a premium Templates theme with advanced admin module. It’s extremely customizable, easy
                    to use and fully responsive and retina ready. Vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                    dolore te feugait nulla facilisi.
                </div>
            </div>
            <div class="col-lg-6 p-3 p-sm-4">
                <form autocomplete="off" class="row">
                    <div class="mb-3 col-md-6">
                        <div class="form-group">
                            <label for="full_name" class="form-label">Full Name <span class="text-theme">*</span> </label>
                            <input type="text" name="full_name" id="full_name" class="form-control" placeholder="Name" required autocomplete="new-full-name">
                        </div>
                    </div>
                    <div class="mb-3 col-md-6">
                        <div class="form-group">
                            <label for="email" class="form-label">Email <span class="text-theme">*</span> </label>
                            <input type="text" name="email" id="email" class="form-control" placeholder="Email" required autocomplete="new-email">
                        </div>
                    </div>
                    <div class="mb-3 col-12">
                        <div class="form-group">
                            <label for="subject" class="form-label">Subject <span class="text-theme">*</span> </label>
                            <input type="text" name="subject" id="subject" class="form-control" placeholder="Subject" required autocomplete="new-subject">
                        </div>
                    </div>
                    <div class="mb-3 col-12">
                        <div class="form-group">
                            <label for="message" class="form-label">Message <span class="text-theme">*</span> </label>
                            <textarea name="message" id="message" cols="30" rows="5" class="form-textarea" placeholder="Message" required autocomplete="new-message"></textarea>
                        </div>
                    </div>
                    <div class="mb-3 col-12">
                        <button type="button" class="btn btn-theme">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- google map area -->
    <div class="mt-4">
        <div style="overflow:hidden; min-width:100%; max-width:100%; height:500px;">
            <div id="gmap-canvas" style="height:100%; width:100%;max-width:100%;">
                <iframe style="height:100%;width:100%;" src="https://www.google.com/maps/embed/v1/place?q=Jessore,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>
        </div>
    </div>

    <!-- brand area -->
    <section class="container-fluid w-100 border mt-3">
        <div class="brand-carousel owl-carousel owl-theme">
            <div class="p-3" v-for="each in brands">
                <img :src="each.imageUrl" class="img-fluid" alt="">
            </div>
        </div>
    </section>

</template>

<script>

export default {

    data(){

        return{
            app_name: window.core.APP_NAME,
            brands: [
                { id: '1', imageUrl: '/images/brand/brand-1.jpg'},
                { id: '2', imageUrl: '/images/brand/brand-2.jpg'},
                { id: '3', imageUrl: '/images/brand/brand-3.jpg'},
                { id: '4', imageUrl: '/images/brand/brand-4.jpg'},
                { id: '5', imageUrl: '/images/brand/brand-5.jpg'},
                { id: '6', imageUrl: '/images/brand/brand-6.jpg'},
            ]
        }

    },

    mounted() {

        this.brand();

    },

    methods: {

        brand(){
            $('.brand-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                responsive:{
                    0:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            })
        }

    }

}

</script>
