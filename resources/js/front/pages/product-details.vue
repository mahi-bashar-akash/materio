<template>

    <!-- product details -->
    <form class="w-100 h-100 container cursor-content-menu">
        <div class="row justify-content-center">

            <!-- single image -->
            <div class="col-12 col-sm-8 col-md-4 p-0">
                <figure class="zoom shadow" @mousemove="zoom" :style="{ background: 'url(' + insertedImage + ')' }">
                    <img :src="insertedImage" />
                </figure>

                <!-- image array -->
                <div class="row">
                    <div class="col-4 mt-3 mb-3">
                        <img :src="`/images/product/image-01.jpg`" class="img-fluid shadow cursor-pointer" alt="product 2" @click="insertImage($event)">
                    </div>
                    <div class="col-4 mt-3 mb-3">
                        <img :src="`/images/product/image-02.jpg`" class="img-fluid shadow cursor-pointer" alt="product 3" @click="insertImage($event)">
                    </div>
                    <div class="col-4 mt-3 mb-3">
                        <img :src="`/images/product/image-03.jpg`" class="img-fluid shadow cursor-pointer" alt="product 4" @click="insertImage($event)">
                    </div>
                </div>
            </div>

            <div class="col-md-8 h-100">
                <div class="bg-white p-3">

                    <!-- name -->
                    <div class="p-2 fs-4">
                        Fresh organic fruit
                    </div>
                    <hr class="border">

                    <!-- review star -->
                    <div class="p-2">
                        <i class="bi bi-star-fill text-warning me-2"></i>
                        <i class="bi bi-star-fill text-warning me-2"></i>
                        <i class="bi bi-star-fill text-warning me-2"></i>
                        <i class="bi bi-star-fill text-warning me-2"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                    </div>

                    <!-- availability -->
                    <div class="p-2">
                        Availability: <span class="text-success"> 11 in stock </span>
                    </div>

                    <!-- price -->
                    <div class="p-2">
                        Price: $10
                    </div>

                    <!-- description -->
                    <div class="p-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s.
                    </div>

                    <!-- weight -->
                    <div class="p-2">
                        Size: {{kgText}}
                        <div class="mt-2 d-flex justify-content-start align-items-center flex-wrap">
                            <button class="btn btn-light me-2" type="button" @click="insertKg($event)" :class="{ 'border-success': kgText === '1 kg' }">
                                1 kg
                            </button>
                            <button class="btn btn-light me-2" type="button" @click="insertKg($event)" :class="{ 'border-success': kgText === '2 kg' }">
                                2 kg
                            </button>
                            <button class="btn btn-light me-2" type="button" @click="insertKg($event)" :class="{ 'border-success': kgText === '3 kg' }">
                                3 kg
                            </button>
                            <button class="btn btn-light me-2" type="button" @click="insertKg($event)" :class="{ 'border-success': kgText === '4 kg' }">
                                4 kg
                            </button>
                            <button class="btn btn-light" type="button" @click="insertKg($event)" :class="{ 'border-success': kgText === '5 kg' }">
                                5 kg
                            </button>
                        </div>
                    </div>

                    <div class="p-2">
                        <div class="d-flex align-items-center border rounded-3 wpx-170">

                            <!-- decrease -->
                            <button class="btn border-0" type="button" @click="decreaseQuantity">
                                <i class="bi bi-dash"></i>
                            </button>

                            <!-- number of value -->
                            <input type="text" disabled class="form-control cursor-content-menu text-center border-0 bg-transparent mx-2" v-model="quantity" min="1" max="5" />

                            <!-- increase -->
                            <button class="btn border-0" type="button" @click="increaseQuantity">
                                <i class="bi bi-plus"></i>
                            </button>

                        </div>
                    </div>
                    <div class="p-2">

                        <!-- add to cart -->
                        <button type="submit" class="btn btn-theme me-2 mb-3">
                            <i class="bi bi-cart me-2"></i>
                            Add to cart
                        </button>

                        <!-- Buy now -->
                        <button type="submit" class="btn btn-outline-theme mb-3">
                            <i class="bi bi-bag-fill me-2"></i>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <!-- customer review -->
    <div class="w-100 h-100 container cursor-content-menu mt-4 bg-white p-3">

        <div class="fw-bold text-center fs-3">
            Reviews
        </div>

        <!-- review list -->
        <div class="fw-semibold mb-3">
            Customer reviews
        </div>

        <!-- review star -->
        <div class="d-flex justify-content-start align-items-center mb-3">
            <i class="bi bi-star-fill text-warning me-2"></i>
            <i class="bi bi-star-fill text-warning me-2"></i>
            <i class="bi bi-star-fill text-warning me-2"></i>
            <i class="bi bi-star-fill text-warning me-2"></i>
            <i class="bi bi-star-fill text-warning"></i>
        </div>

        <!-- count of review -->
        <div class="fw-semibold mb-3">
            based on 1 review
        </div>

        <!-- comment -->
        <div class="mb-3">
            this is good and fresh fruit organic product see like look
        </div>

        <!-- review date -->
        <div class="fw-semibold mb-3">
            kelin patel on Jul 31, 2020
        </div>

        <!-- comment area button to show review form for feedback -->
        <button type="button" class="btn btn-theme" @click="reviewController">
            Write a review
        </button>

        <div class="px-4 py-3 border rounded-3 mt-3" v-if="review === true">
            <div class="fw-semibold mb-3">Write a review</div>
            <form autocomplete="off" class="row">
                <div class="mb-3 col-12 col-md-6">
                    <div class="form-group">
                        <label for="name" class="form-label">Name</label>
                        <input id="name" type="text" name="name" class="form-control" required autocomplete="new-name" v-model="productReviewParam.name" placeholder="Enter your name">
                    </div>
                </div>
                <div class="mb-3 col-12 col-md-6">
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" type="email" name="email" class="form-control" required autocomplete="new-email" v-model="productReviewParam.email" placeholder="Enter your email">
                    </div>
                </div>
                <div class="mb-3 col-12 col-md-6">
                    <div class="form-group">
                        <label class="form-label"> Rating </label>
                        <div class="d-flex justify-content-start align-items-center">
                            <input type="checkbox" id="star1" class="form-checkbox d-none" v-model="productReviewParam.rating" value="1" @click="updateRating(1)" />
                            <label for="star1" class="me-2 cursor-pointer text-warning" :class="{ 'bi bi-star-fill': productReviewParam.rating.includes('1'), 'bi bi-star': !productReviewParam.rating.includes('1') }"></label>
                            <input type="checkbox" id="star2" class="form-checkbox d-none" v-model="productReviewParam.rating" value="2" @click="updateRating(2)" />
                            <label for="star2" class="me-2 cursor-pointer text-warning" :class="{ 'bi bi-star-fill': productReviewParam.rating.includes('2'), 'bi bi-star': !productReviewParam.rating.includes('2') }"></label>
                            <input type="checkbox" id="star3" class="form-checkbox d-none" v-model="productReviewParam.rating" value="3" @click="updateRating(3)" />
                            <label for="star3" class="me-2 cursor-pointer text-warning" :class="{ 'bi bi-star-fill': productReviewParam.rating.includes('3'), 'bi bi-star': !productReviewParam.rating.includes('3') }"></label>
                            <input type="checkbox" id="star4" class="form-checkbox d-none" v-model="productReviewParam.rating" value="4" @click="updateRating(4)" />
                            <label for="star4" class="me-2 cursor-pointer text-warning" :class="{ 'bi bi-star-fill': productReviewParam.rating.includes('4'), 'bi bi-star': !productReviewParam.rating.includes('4') }"></label>
                            <input type="checkbox" id="star5" class="form-checkbox d-none" v-model="productReviewParam.rating" value="5" @click="updateRating(5)" />
                            <label for="star5" class="me-2 cursor-pointer text-warning" :class="{ 'bi bi-star-fill': productReviewParam.rating.includes('5'), 'bi bi-star': !productReviewParam.rating.includes('5') }"></label>
                        </div>
                    </div>
                </div>
                <div class="mb-3 col-12 col-md-6">
                    <div class="form-group">
                        <label for="review-title" class="form-label">Review Title</label>
                        <input id="review-title" type="text" name="review-title" class="form-control" required autocomplete="new-review-title" v-model="productReviewParam.title" placeholder="Enter a review title">
                    </div>
                </div>
                <div class="mb-3 col-12">
                    <div class="form-group">
                        <label for="review-description" class="form-label">Review Description</label>
                        <textarea name="review-description" id="review-description" cols="30" rows="5" class="form-textarea" required autocomplete="new-review-description" v-model="productReviewParam.description" placeholder="Write your comment here"></textarea>
                    </div>
                </div>
                <div>
                    <button type="submit" class="btn btn-theme">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- related product area -->
    <section class="w-100 container mt-4">
        <div class="fw-bold text-center fs-3">
            Related Products
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
                        <button type="button" class="btn btn-theme" @click="productInfo">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

import store from "../../store/index.js";

export default {

    data(){

        return{
            /* Data properties for the component */
            insertedImage: '/images/product/image-01.jpg',
            dealOfTheDaysProduct: [
                { id: '8', file_path: '/images/product/image-08.jpg', name: 'Product Name', price: '45', category: 'Category Name', review: '1' },
                { id: '9', file_path: '/images/product/image-09.jpg', name: 'Product Name', price: '50', category: 'Category Name', review: '2' },
                { id: '10', file_path: '/images/product/image-10.jpg', name: 'Product Name', price: '55', category: 'Category Name', review: '3' },
                { id: '11', file_path: '/images/product/image-11.jpg', name: 'Product Name', price: '60', category: 'Category Name', review: '4' },
                { id: '12', file_path: '/images/product/image-12.jpg', name: 'Product Name', price: '65', category: 'Category Name', review: '5' },
                { id: '13', file_path: '/images/product/image-13.jpg', name: 'Product Name', price: '70', category: 'Category Name', review: '3' },
                { id: '14', file_path: '/images/product/image-14.jpg', name: 'Product Name', price: '75', category: 'Category Name', review: '2' },
            ],
            kgText: '1 kg',
            quantity: 1,
            review: false,
            isZoomed: false,
            productReviewParam: {
                name: '',
                email: '',
                rating: [],
                title: '',
                description: '',
            },

        }

    },

    mounted() {

        this.product();

    },

    methods: {

        /* Function of update rating of product review */
        updateRating(selectedRating) {
            this.productReviewParam.rating = [];
            for (let i = 1; i <= selectedRating; i++) {
                this.productReviewParam.rating.push(i.toString());
            }
        },

        /* Function to show or hide of review form */
        reviewController(){
            this.review = !this.review;
            this.productReviewParam = { name: '', email: '', rating: [], title: '', description: '' };
        },

        /* Function of increase quantity */
        increaseQuantity() {
            if (this.quantity < 5) {
                this.quantity++;
            }
        },

        /* Function of decrease quantity */
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },

        /* Function of insert kg as single */
        insertKg(e){
            this.kgText = e.target.innerText;
        },

        /* Function of insert image as single from array */
        insertImage(e){
            this.insertedImage = e.target.src;
        },

        /* Function of product as carousel */
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

        /* Function of route to push product details */
        productInfo(){
            this.$router.push( { name: 'productDetails' } )
        },

        /* Function of route to push product details */
        addToCart(product) {
            store.dispatch('addToCart', product)
        },

        /* Function of zoom effect */
        zoom(event) {
            let zoomer = event.currentTarget;
            let offsetX = event.offsetX ? event.offsetX : event.touches[0].pageX;
            let offsetY = event.offsetY ? event.offsetY : event.touches[0].pageY;
            let x = offsetX / zoomer.offsetWidth * 100;
            let y = offsetY / zoomer.offsetHeight * 100;
            zoomer.style.backgroundPosition = x + '% ' + y + '%';
        },


    }

}

</script>
