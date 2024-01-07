<template>

    <div class="w-100 container-fluid">
        <div class="slider-carousel owl-carousel owl-theme">
            <div class="item">
                <img :src="`/images/slider/banner-1.jpg`" class="img-fluid slider-item rounded-3" alt="slider 1">
            </div>
            <div class="item">
                <img :src="`/images/slider/banner-2.jpg`" class="img-fluid slider-item rounded-3" alt="slider 2">
            </div>
            <div class="item">
                <img :src="`/images/slider/banner-3.jpg`" class="img-fluid slider-item rounded-3" alt="slider 3">
            </div>
        </div>
    </div>

    <div class="w-100 container-fluid mt-4">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
            <div class="p-3">
                <div class="border rounded-3 p-3 d-flex justify-content-center align-items-center">
                    <i class="bi bi-truck fs-1 text-theme"></i>
                    <div class="ms-3">
                        <div class="text-secondary">Free Delivery</div>
                        <div class="text-secondary text-opacity-50">orders over $99.00</div>
                    </div>
                </div>
            </div>
            <div class="p-3">
                <div class="border rounded-3 p-3 d-flex justify-content-center align-items-center">
                <i class="bi bi-cash-coin fs-1 text-theme"></i>
                <div class="ms-3">
                    <div class="text-secondary">Money Guarantee</div>
                    <div class="text-secondary text-opacity-50">7 days back</div>
                </div>
                </div>
            </div>
            <div class="p-3">
                <div class="border rounded-3 p-3 d-flex justify-content-center align-items-center">
                <i class="bi bi-credit-card-2-front fs-1 text-theme"></i>
                <div class="ms-3">
                    <div class="text-secondary">Payment</div>
                    <div class="text-secondary text-opacity-50">secure system</div>
                </div>
                </div>
            </div>
            <div class="p-3">
                <div class="border rounded-3 p-3 d-flex justify-content-center align-items-center">
                <i class="bi bi-telephone fs-1 text-theme"></i>
                <div class="ms-3">
                    <div class="text-secondary">Online Support</div>
                    <div class="text-secondary text-opacity-50">24/24h on day</div>
                </div>
            </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{}

    },

    mounted() {
        this.slider()

    },

    methods: {

        slider(){
            $('.slider-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })
        }

    }

}

</script>
