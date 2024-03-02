<template>

    <!-- shop wrapper -->
    <div class="shop-wrapper">

        <!-- shop sidebar -->
        <div class="shop-sidebar bg-white" :class="{'active' : shopSidebarActive}">
            <div class="shop-sidebar-header">
                <span class="fw-semibold">
                    Filter
                </span>
                <button type="button" class="btn-icon" @click="shopSidebarController">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="shop-sidebar-body">

                <hr class="col-12 border">

                <div class="fw-semibold d-block">
                    Price
                </div>

                <hr class="col-5 border">

                <div class="shop-sidebar-content bg-white">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <div class="form-group">
                                <input v-model="priceRange" type="range" name="price-range" class="form-range" autocomplete="new-price" :min="0" :max="maxPrice">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <input v-model="minPrice" type="text" name="min-price" class="form-control" autocomplete="new-min-price" :min="0" :max="maxPrice" placeholder="Min Price">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <input v-model="maxPrice" type="text" name="max-price" class="form-control" autocomplete="new-max-price" :max="maxPrice" placeholder="Max Price">
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="col-12 border">

                <div class="fw-semibold d-block">
                    Availability
                </div>

                <hr class="col-5 border">

                <div class="shop-sidebar-content bg-white">
                    <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                        In Stock
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                        Out of Stock
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                        Coming Soon
                    </a>
                </div>

                <hr class="col-12 border">

                <div class="fw-semibold d-block">
                    Category List
                </div>

                <hr class="col-5 border">

                <div class="shop-sidebar-content bg-white">
                    <div v-for="category in categories" :key="category.id">
                        <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                            {{category.name}}
                        </a>
                    </div>
                </div>

                <hr class="col-12 border">

                <div class="fw-semibold d-block">
                    SubCategory List
                </div>

                <hr class="col-5 border">

                <div class="shop-sidebar-content bg-white">
                    <div v-for="category in categories" :key="category.id">
                        <div v-for="subCategory in category.subCategory" :key="subCategory.id">
                            <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                                {{subCategory.name}}
                            </a>
                        </div>
                    </div>
                </div>

                <hr class="col-12 border">

                <div class="fw-semibold d-block">
                    Discount List
                </div>

                <hr class="col-5 border">

                <div class="shop-sidebar-content bg-white">
                    <div v-for="discount in discounts" :key="discount.id">
                        <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                            {{discount.discountRate}}
                        </a>
                    </div>
                </div>

                <hr class="col-12 border">

                <div class="fw-semibold d-block">
                    Customer review
                </div>

                <hr class="col-5 border">

                <div class="shop-sidebar-content bg-white">
                    <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none d-block hover-effect-link">
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                    </a>
                </div>

            </div>
        </div>

        <!-- shop content -->
        <div class="shop-content">
            <div class="shop-content-header">

                <!-- shop sidebar controller -->
                <button type="button" class="btn-icon" @click="shopSidebarController">
                    <i class="bi bi-justify"></i>
                </button>

                <!-- shop search product -->
                <div class="col-10 col-md-6">
                    <div class="position-relative">
                        <input type="text" name="" class="form-control ps-5" autocomplete="new-search" placeholder="Search here">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>

            </div>
            <div class="shop-content-body">

                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-3">

                    <!-- shop show product list -->
                    <div v-for="each in productItem">
                        <div class="product-single overflow-hidden">
                            <div class="item">
                                <div class="product-item bg-white">
                                    <img :src="each.file_path" class="product-image img-fluid">
                                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                                        {{ each.category }}
                                    </div>
                                    <div class="mt-2 fw-semibold text-center">{{ each.name }}</div>
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
                                    <div class="text-theme text-center mt-2">${{ each.price }} per Kg</div>
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
                    </div>

                </div>

            </div>

            <!-- shop pagination for product -->
            <div class="shop-content-footer">

                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0)">
                                <i class="bi bi-chevron-left"></i>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                <i class="bi bi-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    </div>

</template>

<script>

import store from "../../store/index.js";

export default {

    watch: {
        priceRange() {
            this.minPrice = this.priceRange;
            if (this.minPrice > this.maxPrice) {
                this.minPrice = this.maxPrice;
            }
        }
    },

    data() {

        return {

            productItem: [
                {id: '1', file_path: '/images/product/image-01.jpg', name: 'Product Name', price: '10', category: 'Category Name', review: '1'},
                {id: '2', file_path: '/images/product/image-02.jpg', name: 'Product Name', price: '15', category: 'Category Name', review: '2'},
                {id: '3', file_path: '/images/product/image-03.jpg', name: 'Product Name', price: '20', category: 'Category Name', review: '3'},
                {id: '4', file_path: '/images/product/image-04.jpg', name: 'Product Name', price: '25', category: 'Category Name', review: '4'},
                {id: '5', file_path: '/images/product/image-05.jpg', name: 'Product Name', price: '30', category: 'Category Name', review: '5'},
                {id: '6', file_path: '/images/product/image-06.jpg', name: 'Product Name', price: '35', category: 'Category Name', review: '2'},
                {id: '7', file_path: '/images/product/image-07.jpg', name: 'Product Name', price: '40', category: 'Category Name', review: '1'},
                {id: '8', file_path: '/images/product/image-08.jpg', name: 'Product Name', price: '45', category: 'Category Name', review: '3'},
                {id: '9', file_path: '/images/product/image-09.jpg', name: 'Product Name', price: '50', category: 'Category Name', review: '4'},
                {id: '10', file_path: '/images/product/image-10.jpg', name: 'Product Name', price: '55', category: 'Category Name', review: '2'},
                {id: '11', file_path: '/images/product/image-11.jpg', name: 'Product Name', price: '60', category: 'Category Name', review: '5'},
                {id: '12', file_path: '/images/product/image-12.jpg', name: 'Product Name', price: '65', category: 'Category Name', review: '1'},
                {id: '13', file_path: '/images/product/image-13.jpg', name: 'Product Name', price: '70', category: 'Category Name', review: '2'},
                {id: '14', file_path: '/images/product/image-14.jpg', name: 'Product Name', price: '75', category: 'Category Name', review: '4'},
                {id: '15', file_path: '/images/product/image-15.jpg', name: 'Product Name', price: '80', category: 'Category Name', review: '3'},
            ],

            categories: [
                { id: '1', name: 'Food',
                    subCategory: [
                        { id: '1', name: 'Fruits' },
                        { id: '2', name: 'Vegetables' },
                        { id: '3', name: 'Meats' },
                        { id: '4', name: 'Fishes' },
                    ],
                },
                { id: '2', name: 'Dress',
                    subCategory: [
                        { id: '1', name: 'Male Collection' },
                        { id: '2', name: 'Female Collection' },
                        { id: '3', name: 'Accessories Collection' },
                    ],
                },
                { id: '3', name: 'Shelter',
                    subCategory: [
                        { id: '1', name: 'Temporary Shelter' },
                        { id: '2', name: 'Permanent Shelter' },
                    ],
                },
                { id: '4', name: 'Education',
                    subCategory: [
                        { id: '1', name: 'Primary Education' },
                        { id: '2', name: 'Secondary Education' },
                        { id: '3', name: 'Higher Education' },
                    ],
                },
                { id: '5', name: 'Treatment',
                    subCategory: [
                        { id: '1', name: 'Medical Treatment' },
                        { id: '2', name: 'Therapeutic Treatment' },
                    ],
                }
            ],

            discounts: [
                {id: '1', discountRate: '10% - 20%' },
                {id: '2', discountRate: '30% - 40%' },
                {id: '3', discountRate: '40% - 50%' },
            ],

            priceRange: 0,
            minPrice: 0,
            maxPrice: 100000,
            shopSidebarActive: false,

            cart: [],

        }

    },

    mounted() {


    },

    methods: {

        /* function of shop sidebar controller */
        shopSidebarController(){
            this.shopSidebarActive = !this.shopSidebarActive
        },

        /* function of product information */
        productInfo(){
            this.$router.push( { name: 'productDetails' } )
        },

        /* function of add to cart */
        addToCart(product) {
            store.dispatch('addToCart', product)
        },

    }

}

</script>
