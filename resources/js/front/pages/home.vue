<template>

    <!-- slider area -->
    <section class="w-100 container-fluid">
        <div class="slider-carousel owl-carousel owl-theme">
            <div class="item" v-for="each in Sliders">
                <div class="slider-item" :style="{ background: 'url(' + each.imageUrl + ')' }"></div>
            </div>
        </div>
    </section>

    <!-- box area -->
    <section class="w-100 container-fluid mt-4">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">

            <div class="p-3">
                <div class="shadow rounded-3 p-3 d-flex justify-content-start align-items-center">
                    <i class="bi bi-truck fs-1 text-theme"></i>
                    <div class="ms-3">
                        <div class="text-secondary">Free Delivery</div>
                        <div class="text-secondary text-opacity-50">orders over $99.00</div>
                    </div>
                </div>
            </div>

            <div class="p-3">
                <div class="shadow rounded-3 p-3 d-flex justify-content-start align-items-center">
                <i class="bi bi-cash-coin fs-1 text-theme"></i>
                <div class="ms-3">
                    <div class="text-secondary">Money Guarantee</div>
                    <div class="text-secondary text-opacity-50">7 days back</div>
                </div>
                </div>
            </div>
            <div class="p-3">
                <div class="shadow rounded-3 p-3 d-flex justify-content-start align-items-center">
                <i class="bi bi-credit-card-2-front fs-1 text-theme"></i>
                <div class="ms-3">
                    <div class="text-secondary">Payment</div>
                    <div class="text-secondary text-opacity-50">secure system</div>
                </div>
                </div>
            </div>
            <div class="p-3">
                <div class="shadow rounded-3 p-3 d-flex justify-content-start align-items-center">
                <i class="bi bi-telephone fs-1 text-theme"></i>
                <div class="ms-3">
                    <div class="text-secondary">Online Support</div>
                    <div class="text-secondary text-opacity-50">24/24h on day</div>
                </div>
            </div>
            </div>
        </div>
    </section>

    <!-- best seller product area -->
    <section class="w-100 container-fluid mt-4">
        <div class="fw-bold text-center fs-3">
            Best Seller Products
        </div>
        <div class="product-carousel owl-carousel owl-theme">
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-01.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme border-0 me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme border-0">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-02.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-03.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-04.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-05.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-06.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-07.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- operation area  -->
    <div class="w-100 container-fluid mt-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div class="p-3">
                <div class="w-100 coupon-box btn-light-theme">
                    <div class="d-flex justify-content-between align-items-center h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold text-secondary mb-2"> Best Selling </div>
                            <div class="fw-bold fs-4 mb-2"> 100% Naturals </div>
                            <div class="text-secondary text-opacity-50"> Up to 70% off </div>
                        </div>
                        <img :src="`/images/product/p-01.jpg`" style="width: 100px; height: 100px;" class="img-fluid rounded-circle" alt="product-for-coupon-frame">
                    </div>
                </div>
            </div>
            <div class="p-3">
                <div class="w-100 coupon-box btn-light-theme">
                    <div class="d-flex justify-content-between align-items-center h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold text-secondary mb-2"> New Arrivals </div>
                            <div class="fw-bold fs-4 mb-2"> Vegetables </div>
                            <div class="text-secondary text-opacity-50"> Save $29.00 </div>
                        </div>
                        <img :src="`/images/product/p-02.jpg`" style="width: 100px; height: 100px;" class="img-fluid rounded-circle" alt="product-for-coupon-frame">
                    </div>
                </div>
            </div>
            <div class="p-3">
                <div class="w-100 coupon-box btn-light-theme">
                    <div class="d-flex justify-content-between align-items-center h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold text-secondary mb-2"> Trending </div>
                            <div class="fw-bold fs-4 mb-2"> Farm Foods </div>
                            <div class="text-secondary text-opacity-50"> Only $18.00 </div>
                        </div>
                        <img :src="`/images/product/p-03.jpg`" style="width: 100px; height: 100px;" class="img-fluid rounded-circle" alt="product-for-coupon-frame">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- deal of the days product area -->
    <section class="w-100 container-fluid mt-4">
        <div class="fw-bold text-center fs-3">
            Deals Of The Days
        </div>
        <div class="product-carousel owl-carousel owl-theme">
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-08.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-09.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-10.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-11.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-12.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-13.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product-item">
                    <img :src="`/images/product/image-14.jpg`" class="product-image img-fluid">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        category
                    </div>
                    <div class="mt-2 fw-semibold text-center">product name</div>
                    <div class="text-theme text-center mt-2">$100.00</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- recent most viewer product  -->
    <section class="w-100 container-fluid mt-4">
        <div class="fw-bold text-center fs-3">
            Latest Blog Posts
        </div>
        <div class="blog-carousel owl-carousel owl-theme">
            <div class="item">
                <div class="blog-item">
                    <div class="mb-3">
                        <img :src="`/images/slider/banner-1.jpg`" class="mb-3 blog-image img-fluid object-fit-cover"/>
                        <div class="mb-3 text-theme fw-semibold fs-4 text-center">
                            Blog title
                        </div>
                        <div class="text-center fw-semibold">
                            Mahi Bashar Akash
                        </div>
                        <small class="d-block mb-3 text-secondary text-opacity-50 text-center">
                            june 18, 2023
                        </small>
                        <div class="text-secondary text-opacity-50 fw-light">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor doloribus earum incidunt maiores, nam nemo numquam, pariatur porro sequi soluta totam velit voluptate voluptatum.
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="blog-item">
                    <div class="mb-3">
                        <img :src="`/images/slider/banner-2.jpg`" class="mb-3 blog-image img-fluid object-fit-cover"/>
                        <div class="mb-3 text-theme fw-semibold fs-4 text-center">
                            Blog title
                        </div>
                        <div class="text-center fw-semibold">
                            Mahi Bashar Akash
                        </div>
                        <small class="d-block mb-3 text-secondary text-opacity-50 text-center">
                            june 18, 2023
                        </small>
                        <div class="text-secondary text-opacity-50 fw-light">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor doloribus earum incidunt maiores, nam nemo numquam, pariatur porro sequi soluta totam velit voluptate voluptatum.
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="blog-item">
                    <div class="mb-3">
                        <img :src="`/images/slider/banner-3.jpg`" class="mb-3 blog-image img-fluid object-fit-cover"/>
                        <div class="mb-3 text-theme fw-semibold fs-4 text-center">
                            Blog title
                        </div>
                        <div class="text-center fw-semibold">
                            Mahi Bashar Akash
                        </div>
                        <small class="d-block mb-3 text-secondary text-opacity-50 text-center">
                            june 18, 2023
                        </small>
                        <div class="text-secondary text-opacity-50 fw-light">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor doloribus earum incidunt maiores, nam nemo numquam, pariatur porro sequi soluta totam velit voluptate voluptatum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

export default {

    data(){

        return{
            Sliders: [
                { id: '1', imageUrl: '/images/slider/banner-1.jpg' },
                { id: '2', imageUrl: '/images/slider/banner-2.jpg' },
                { id: '3', imageUrl: '/images/slider/banner-3.jpg' },
            ],
        }

    },

    mounted() {
        this.slider();
        this.product();
        this.blog();
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
        },

        product(){
            $('.product-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
            })
        },

        blog(){
            $('.blog-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            })
        }

    }

}

</script>
