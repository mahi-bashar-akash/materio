<template>

    <!-- slider area -->
    <section class="w-100 container-fluid">
        <div class="slider-carousel owl-carousel owl-theme">
            <div class="item" v-for="each in Sliders">
                <div class="position-relative">
                    <div class="slider-item" :style="{ background: 'url(' + each.file_path + ')' }"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- box area -->
    <section class="w-100 container-fluid mt-4 cursor-content-menu">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">

            <div class="p-3">
                <div class="shadow rounded-3 p-3 d-flex justify-content-center align-items-center bg-white">
                    <i class="bi bi-truck fs-3 text-theme"></i>
                    <div class="ms-3">
                        <div class="text-secondary">Free Delivery</div>
                        <div class="text-secondary text-opacity-50">orders over $99.00</div>
                    </div>
                </div>
            </div>

            <div class="p-3">
                <div class="shadow rounded-3 p-3 d-flex justify-content-center align-items-center bg-white">
                <i class="bi bi-cash-coin fs-3 text-theme"></i>
                <div class="ms-3">
                    <div class="text-secondary">Money Guarantee</div>
                    <div class="text-secondary text-opacity-50">7 days back</div>
                </div>
                </div>
            </div>
            <div class="p-3">
                <div class="shadow rounded-3 p-3 d-flex justify-content-center align-items-center bg-white">
                <i class="bi bi-credit-card-2-front fs-3 text-theme"></i>
                <div class="ms-3">
                    <div class="text-secondary">Payment</div>
                    <div class="text-secondary text-opacity-50">secure system</div>
                </div>
                </div>
            </div>
            <div class="p-3">
                <div class="shadow rounded-3 p-3 d-flex justify-content-center align-items-center bg-white">
                <i class="bi bi-telephone fs-3 text-theme"></i>
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
            <div class="item" v-for="each in bestSellerProducts">
                <div class="product-item bg-white">
                    <img :src="each.file_path" class="product-image img-fluid" :alt="each.name">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        {{each.category}}
                    </div>
                    <div class="mt-2 fw-semibold text-center">{{each.name}}</div>
                    <div class="mt-2 text-center">
                        <span v-if="each.review === '1'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '2'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '3'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '4'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '5'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </span>
                    </div>
                    <div class="text-theme text-center mt-2">${{each.price}}</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1" @click="addToCart(each)">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme" @click="productInfo(each)">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- operation area  -->
    <div class="w-100 container-fluid mt-4">
        <div class="coupon-carousel owl-carousel owl-theme">
            <div class="item p-3">
                <div class="w-100 coupon-box" @click="pushType" :style="{ background: 'url(' + OperationImageUrl1 + ')' }">
                    <div class="h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold mb-2"> Best Selling </div>
                            <div class="fw-bold fs-4 mb-2"> 100% Naturals </div>
                            <div class="fw-semibold"> Up to 70% off </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item p-3">
                <div class="w-100 coupon-box" @click="pushType" :style="{ background: 'url(' + OperationImageUrl2 + ')' }">
                    <div class="h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold mb-2"> New Arrivals </div>
                            <div class="fw-bold fs-4 mb-2"> Vegetables </div>
                            <div class="fw-semibold"> Save $29.00 </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item p-3">
                <div class="w-100 coupon-box" @click="pushType" :style="{ background: 'url(' + OperationImageUrl3 + ')' }">
                    <div class="h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold mb-2"> Trending </div>
                            <div class="fw-bold fs-4 mb-2"> Farm Foods </div>
                            <div class="fw-semibold"> Only $18.00 </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item p-3">
                <div class="w-100 coupon-box" @click="pushType" :style="{ background: 'url(' + OperationImageUrl4 + ')' }">
                    <div class="h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold mb-2"> Best Selling </div>
                            <div class="fw-bold fs-4 mb-2"> 100% Naturals </div>
                            <div class="fw-semibold"> Up to 70% off </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item p-3">
                <div class="w-100 coupon-box" @click="pushType" :style="{ background: 'url(' + OperationImageUrl5 + ')' }">
                    <div class="h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold mb-2"> New Arrivals </div>
                            <div class="fw-bold fs-4 mb-2"> Vegetables </div>
                            <div class="fw-semibold"> Save $29.00 </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item p-3">
                <div class="w-100 coupon-box" @click="pushType" :style="{ background: 'url(' + OperationImageUrl6 + ')' }">
                    <div class="h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold mb-2"> Trending </div>
                            <div class="fw-bold fs-4 mb-2"> Farm Foods </div>
                            <div class="fw-semibold"> Only $18.00 </div>
                        </div>
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
            <div class="item" v-for="each in dealOfTheDaysProduct">
                <div class="product-item bg-white">
                    <img :src="each.file_path" class="product-image img-fluid" :alt="each.name">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        {{each.category}}
                    </div>
                    <div class="mt-2 fw-semibold text-center">{{each.name}}</div>
                    <div class="mt-2 text-center">
                        <span v-if="each.review === '1'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '2'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '3'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '4'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '5'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </span>
                    </div>
                    <div class="text-theme text-center mt-2">${{each.price}}</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1" @click="addToCart(each)">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme" @click="productInfo(each)">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- latest blog post  -->
    <section class="w-100 container-fluid mt-4">
        <div class="fw-bold text-center fs-3">
            Latest Blog Posts
        </div>
        <div class="blog-carousel owl-carousel owl-theme">
            <div class="item">
                <div class="blog-item bg-white rounded-bottom-3">
                    <div class="blog-item-top">
                        <img :src="`/images/slider/banner-1.jpg`" class="mb-3 blog-image img-fluid object-fit-cover"/>
                    </div>
                    <div class="my-3 text-theme fw-semibold fs-4">
                        Blog title
                    </div>
                    <div class="fw-semibold">
                        Mahi Bashar Akash
                    </div>
                    <small class="d-block mb-3 text-secondary text-opacity-50">
                        june 18, 2023
                    </small>
                    <div class="text-secondary fw-light mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor doloribus earum incidunt maiores, nam nemo numquam, pariatur porro sequi soluta totam velit voluptate voluptatum.
                    </div>
                    <div class="text-end">
                        <button type="button" class="btn btn-theme">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="blog-item bg-white rounded-bottom-3">
                    <div class="blog-item-top">
                        <img :src="`/images/slider/banner-2.jpg`" class="mb-3 blog-image img-fluid object-fit-cover"/>
                    </div>
                    <div class="my-3 text-theme fw-semibold fs-4">
                        Blog title
                    </div>
                    <div class="fw-semibold">
                        Mahi Bashar Akash
                    </div>
                    <small class="d-block mb-3 text-secondary text-opacity-50">
                        june 18, 2023
                    </small>
                    <div class="text-secondary fw-light mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor doloribus earum incidunt maiores, nam nemo numquam, pariatur porro sequi soluta totam velit voluptate voluptatum.
                    </div>
                    <div class="text-end">
                        <button type="button" class="btn btn-theme">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="blog-item bg-white rounded-bottom-3">
                    <div class="blog-item-top">
                        <img :src="`/images/slider/banner-3.jpg`" class="mb-3 blog-image img-fluid object-fit-cover"/>
                    </div>
                    <div class="my-3 text-theme fw-semibold fs-4">
                        Blog title
                    </div>
                    <div class="fw-semibold">
                        Mahi Bashar Akash
                    </div>
                    <small class="d-block mb-3 text-secondary text-opacity-50">
                        june 18, 2023
                    </small>
                    <div class="text-secondary fw-light mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor doloribus earum incidunt maiores, nam nemo numquam, pariatur porro sequi soluta totam velit voluptate voluptatum.
                    </div>
                    <div class="text-end">
                        <button type="button" class="btn btn-theme">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- brand area -->
    <section class="container-fluid w-100 border mt-3 bg-white">
        <div class="brand-carousel owl-carousel owl-theme">
            <div class="p-3" v-for="each in brands">
                <img :src="each.imageUrl" class="img-fluid" :alt="each.id">
            </div>
        </div>
    </section>

</template>

<script>

import store from "../../store/index.js";

export default {

    data(){

        return{

            Sliders: [
                { id: '1', file_path: '/images/slider/banner-1.jpg' },
                { id: '2', file_path: '/images/slider/banner-2.jpg' },
                { id: '3', file_path: '/images/slider/banner-3.jpg' },
            ],

            bestSellerProducts: [
                { id: '1', file_path: '/images/product/image-01.jpg', name: 'Product Name', price: '10', category: 'Category Name', review: '4' },
                { id: '2', file_path: '/images/product/image-02.jpg', name: 'Product Name', price: '15', category: 'Category Name', review: '5' },
                { id: '3', file_path: '/images/product/image-03.jpg', name: 'Product Name', price: '20', category: 'Category Name', review: '3' },
                { id: '4', file_path: '/images/product/image-04.jpg', name: 'Product Name', price: '25', category: 'Category Name', review: '4' },
                { id: '5', file_path: '/images/product/image-05.jpg', name: 'Product Name', price: '30', category: 'Category Name', review: '5' },
                { id: '6', file_path: '/images/product/image-06.jpg', name: 'Product Name', price: '35', category: 'Category Name', review: '3' },
                { id: '7', file_path: '/images/product/image-07.jpg', name: 'Product Name', price: '40', category: 'Category Name', review: '3' },
            ],

            dealOfTheDaysProduct: [
                { id: '8', file_path: '/images/product/image-08.jpg', name: 'Product Name', price: '45', category: 'Category Name', review: '1' },
                { id: '9', file_path: '/images/product/image-09.jpg', name: 'Product Name', price: '50', category: 'Category Name', review: '2' },
                { id: '10', file_path: '/images/product/image-10.jpg', name: 'Product Name', price: '55', category: 'Category Name', review: '3' },
                { id: '11', file_path: '/images/product/image-11.jpg', name: 'Product Name', price: '60', category: 'Category Name', review: '1' },
                { id: '12', file_path: '/images/product/image-12.jpg', name: 'Product Name', price: '65', category: 'Category Name', review: '4' },
                { id: '13', file_path: '/images/product/image-13.jpg', name: 'Product Name', price: '70', category: 'Category Name', review: '2' },
                { id: '14', file_path: '/images/product/image-14.jpg', name: 'Product Name', price: '75', category: 'Category Name', review: '1' },
            ],

            brands: [
                { id: '1', imageUrl: '/images/brand/brand-1.jpg'},
                { id: '2', imageUrl: '/images/brand/brand-2.jpg'},
                { id: '3', imageUrl: '/images/brand/brand-3.jpg'},
                { id: '4', imageUrl: '/images/brand/brand-4.jpg'},
                { id: '5', imageUrl: '/images/brand/brand-5.jpg'},
                { id: '6', imageUrl: '/images/brand/brand-6.jpg'},
            ],

            OperationImageUrl1: '/images/slider/content-1.jpg',
            OperationImageUrl2: '/images/slider/content-2.jpg',
            OperationImageUrl3: '/images/slider/content-3.jpg',
            OperationImageUrl4: '/images/slider/box-1.jpg',
            OperationImageUrl5: '/images/slider/box-2.jpg',
            OperationImageUrl6: '/images/slider/box-3.jpg',

            cart: [],

        }

    },

    mounted() {
        this.slider();
        this.product();
        this.blog();
        this.brand();
        this.coupon();
    },

    methods: {

        /* function to push product add to cart */
        addToCart(product) {
            store.dispatch('addToCart', product)
        },

        /* function to go route to shop */
        pushType(){
            this.$router.push( { name: 'shop' } )
        },

        /* function to go show product info */
        productInfo(){
            this.$router.push( { name: 'productDetails' } )
        },

        /* function to show slider owl carousel */
        slider(){
            $('.slider-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                autoplay: true,
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

        /* function to show product owl carousel */
        product(){
            $('.product-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                dots: false,
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    900:{
                        items:2
                    },
                    1400:{
                        items:4
                    }
                }
            })
        },

        /* function to show blog owl carousel */
        blog(){
            $('.blog-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                dots: false,
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    900:{
                        items:2
                    },
                    1400:{
                        items:3
                    }
                }
            })
        },

        /* function to show brand owl carousel */
        brand(){
            $('.brand-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: true,
                responsive:{
                    0:{
                        items:2
                    },
                    900:{
                        items:3
                    },
                    1400:{
                        items:5
                    }
                }
            })
        },

        /* function to show coupon owl carousel */
        coupon(){
            $('.coupon-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    900:{
                        items:2
                    },
                    1400:{
                        items:3
                    }
                }
            })
        },

    }

}

</script>
