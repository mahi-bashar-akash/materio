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
    <section class="w-100 container-fluid mt-4">
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
            <div class="item">
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="w-100 coupon-box bg-white shadow" @click="pushType">
                    <div class="d-flex justify-content-between align-items-center h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold text-secondary mb-2"> Best Selling </div>
                            <div class="fw-bold fs-4 mb-2 text-theme"> 100% Naturals </div>
                            <div class="text-secondary"> Up to 70% off </div>
                        </div>
                        <img :src="`/images/product/p-01.jpg`" style="width: 100px; height: 100px;" class="img-fluid rounded-circle" alt="product-for-coupon-frame">
                    </div>
                </div>
            </div>
            <div class="p-3">
                <div class="w-100 coupon-box bg-white shadow" @click="pushType">
                    <div class="d-flex justify-content-between align-items-center h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold text-secondary mb-2"> New Arrivals </div>
                            <div class="fw-bold fs-4 mb-2 text-theme"> Vegetables </div>
                            <div class="text-secondary"> Save $29.00 </div>
                        </div>
                        <img :src="`/images/product/p-02.jpg`" style="width: 100px; height: 100px;" class="img-fluid rounded-circle" alt="product-for-coupon-frame">
                    </div>
                </div>
            </div>
            <div class="p-3">
                <div class="w-100 coupon-box bg-white shadow" @click="pushType">
                    <div class="d-flex justify-content-between align-items-center h-100 px-3">
                        <div class="h-100 d-flex justify-content-center align-items-start flex-column ps-3">
                            <div class="fw-semibold text-secondary mb-2"> Trending </div>
                            <div class="fw-bold fs-4 mb-2 text-theme"> Farm Foods </div>
                            <div class="text-secondary"> Only $18.00 </div>
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                <div class="product-item bg-white">
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
                    <div class="text-secondary text-opacity-50 fw-light mb-3">
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
                    <div class="text-secondary text-opacity-50 fw-light mb-3">
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
                    <div class="text-secondary text-opacity-50 fw-light mb-3">
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

import router from "./../router/router";

export default {

    data(){

        return{

            Sliders: [
                { id: '1', file_path: '/images/slider/banner-1.jpg' },
                { id: '2', file_path: '/images/slider/banner-2.jpg' },
                { id: '3', file_path: '/images/slider/banner-3.jpg' },
            ],

            productItem: [
                {id: '1', file_path: '/images/product/image-01.jpg', name: 'Product Name', price: '10', category: 'Category Name'},
                {id: '2', file_path: '/images/product/image-02.jpg', name: 'Product Name', price: '15', category: 'Category Name'},
                {id: '3', file_path: '/images/product/image-03.jpg', name: 'Product Name', price: '20', category: 'Category Name'},
                {id: '4', file_path: '/images/product/image-04.jpg', name: 'Product Name', price: '25', category: 'Category Name'},
                {id: '5', file_path: '/images/product/image-05.jpg', name: 'Product Name', price: '30', category: 'Category Name'},
                {id: '6', file_path: '/images/product/image-06.jpg', name: 'Product Name', price: '35', category: 'Category Name'},
                {id: '7', file_path: '/images/product/image-07.jpg', name: 'Product Name', price: '40', category: 'Category Name'},
                {id: '8', file_path: '/images/product/image-08.jpg', name: 'Product Name', price: '45', category: 'Category Name'},
                {id: '9', file_path: '/images/product/image-09.jpg', name: 'Product Name', price: '50', category: 'Category Name'},
                {id: '10', file_path: '/images/product/image-10.jpg', name: 'Product Name', price: '55', category: 'Category Name'},
                {id: '11', file_path: '/images/product/image-11.jpg', name: 'Product Name', price: '60', category: 'Category Name'},
                {id: '12', file_path: '/images/product/image-12.jpg', name: 'Product Name', price: '65', category: 'Category Name'},
                {id: '13', file_path: '/images/product/image-13.jpg', name: 'Product Name', price: '70', category: 'Category Name'},
                {id: '14', file_path: '/images/product/image-14.jpg', name: 'Product Name', price: '75', category: 'Category Name'},
                {id: '15', file_path: '/images/product/image-15.jpg', name: 'Product Name', price: '80', category: 'Category Name'},
            ],

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
        this.slider();
        this.product();
        this.blog();
        this.brand();
    },

    methods: {

        pushType(){
            router.push({ name: 'shop' })
        },

        slider(){
            $('.slider-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
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
        },

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
