<template>

    <form class="w-100 h-100 container-fluid cursor-content-menu">
        <div class="row">
            <div class="col-12 col-lg-5 p-0">
                <img :src="insertedImage" class="img-fluid border w-100 object-fit-cover" alt="product 1">
                <div class="row">
                    <div class="col-4 mt-3 mb-3">
                        <img :src="`/images/product/image-01.jpg`" class="img-fluid border cursor-pointer" alt="product 2" @click="insertImage($event)">
                    </div>
                    <div class="col-4 mt-3 mb-3">
                        <img :src="`/images/product/image-02.jpg`" class="img-fluid border cursor-pointer" alt="product 3" @click="insertImage($event)">
                    </div>
                    <div class="col-4 mt-3 mb-3">
                        <img :src="`/images/product/image-03.jpg`" class="img-fluid border cursor-pointer" alt="product 4" @click="insertImage($event)">
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-7 h-100">
                <div class="bg-white p-3 border">
                    <div class="p-2">
                        Fresh broccoli
                    </div>
                    <div class="p-2">
                        Food : Vegetables
                    </div>
                    <div class="p-2">
                        <div class="mb-2">Description</div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid consequuntur dolorem
                        dolores ex exercitationem fugiat id illum labore, laborum magni maiores minima nisi numquam
                        odit pariatur placeat provident quaerat quibusdam, quidem, reiciendis sit tenetur ut
                        veritatis vero. Ab corporis expedita id nobis non veniam.
                    </div>
                    <div class="p-2">
                        Currently Available
                    </div>
                    <div class="p-2">
                        Weight: 1 kg
                    </div>
                    <div class="p-2">
                        Price: $10
                    </div>
                    <div class="p-2">
                        <button type="submit" class="btn btn-theme me-2 mb-3">
                            <i class="bi bi-cart me-2"></i>
                            Add to cart
                        </button>
                        <button type="submit" class="btn btn-outline-theme mb-3">
                            <i class="bi bi-bag-fill me-2"></i>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <!-- recommended product area -->
    <section class="w-100 container-fluid mt-4">
        <div class="fw-bold text-center fs-3">
            Recommended for sale
        </div>
        <div class="product-carousel owl-carousel owl-theme">
            <div class="item" v-for="each in dealOfTheDaysProduct">
                <div class="product-item bg-white">
                    <img :src="each.file_path" class="product-image img-fluid" :alt="each.name">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        {{each.category}}
                    </div>
                    <div class="mt-2 fw-semibold text-center">{{each.name}}</div>
                    <div class="text-theme text-center mt-2">${{each.price}}</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1">
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

import router from "../router/router.js";

export default {

    data(){

        return{
            insertedImage: '/images/product/image-01.jpg',

            dealOfTheDaysProduct: [
                { id: '8', file_path: '/images/product/image-08.jpg', name: 'Product Name', price: '45', category: 'Category Name' },
                { id: '9', file_path: '/images/product/image-09.jpg', name: 'Product Name', price: '50', category: 'Category Name' },
                { id: '10', file_path: '/images/product/image-10.jpg', name: 'Product Name', price: '55', category: 'Category Name' },
                { id: '11', file_path: '/images/product/image-11.jpg', name: 'Product Name', price: '60', category: 'Category Name' },
                { id: '12', file_path: '/images/product/image-12.jpg', name: 'Product Name', price: '65', category: 'Category Name' },
                { id: '13', file_path: '/images/product/image-13.jpg', name: 'Product Name', price: '70', category: 'Category Name' },
                { id: '14', file_path: '/images/product/image-14.jpg', name: 'Product Name', price: '75', category: 'Category Name' },
            ],

        }

    },

    mounted() {

        this.product();

    },

    methods: {

        insertImage(e){
            this.insertedImage = e.target.src;
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

        productInfo(){
            router.push( { name: 'productDetails' } )
        },

    }

}

</script>
