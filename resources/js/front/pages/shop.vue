<template>

    <div class="shop-wrapper">
        <div class="shop-sidebar h-100" :class="{'active' : shopSidebarActive}">
            <div class="shop-sidebar-header">
                <span class="fw-semibold">
                    Filter
                </span>
                <button type="button" class="btn-icon" @click="shopSidebarController">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="shop-sidebar-body">

                <div class="p-3 shop-sidebar-content border bg-white">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <div class="form-group">
                                <label for="price-range" class="form-label">Price</label>
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

                <div class="fw-semibold mb-3 d-block">Category List</div>
                <div class="shop-sidebar-content border p-3 bg-white">
                    <div v-for="category in categories" :key="category.id">
                        <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                            {{category.name}}
                        </a>
                    </div>
                </div>

                <div class="fw-semibold mb-3 d-block">SubCategory List</div>
                <div class="shop-sidebar-content border p-3 bg-white">
                    <div v-for="category in categories" :key="category.id">
                        <div v-for="subCategory in category.subCategory" :key="subCategory.id">
                            <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                                {{subCategory.name}}
                            </a>
                        </div>
                    </div>
                </div>

                <div class="fw-semibold mb-3 d-block">Discount List</div>
                <div class="shop-sidebar-content border p-3 bg-white">
                    <div v-for="discount in discounts" :key="discount.id">
                        <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                            {{discount.discountRate}}
                        </a>
                    </div>
                </div>

                <div class="fw-semibold mb-3 d-block">Customer review</div>
                <div class="shop-sidebar-content border p-3 bg-white">
                    <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star ms-2 text-warning"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                        <i class="bi bi-star-fill ms-2 text-warning"></i>
                    </a>
                </div>

                <div class="fw-semibold mb-3 d-block">Availability</div>
                <div class="shop-sidebar-content border p-3 bg-white">
                    <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                        In Stock
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                        Out of Stock
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-secondary d-block hover-effect-link">
                        Coming Soon
                    </a>
                </div>

            </div>
        </div>
        <div class="shop-content">
            <div class="shop-content-header">
                <button type="button" class="btn-icon" @click="shopSidebarController">
                    <i class="bi bi-justify"></i>
                </button>

                <div class="col-8 col-md-6">
                    <div class="position-relative">
                        <input type="text" name="" class="form-control ps-5" autocomplete="new-search" placeholder="Search here">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>

            </div>
            <div class="shop-content-body">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3">

                    <div v-for="each in productItem">
                        <div class="product-single overflow-hidden">
                            <div class="item">
                                <div class="product-item bg-white">
                                    <img :src="each.file_path" class="product-image img-fluid">
                                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                                        {{ each.category }}
                                    </div>
                                    <div class="mt-2 fw-semibold text-center">{{ each.name }}</div>
                                    <div class="text-theme text-center mt-2">${{ each.price }} per Kg</div>
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
                        </div>
                    </div>

                </div>

            </div>
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
                {id: '1', discountRate: '5% - 10%' },
                {id: '2', discountRate: '10% - 15%' },
                {id: '3', discountRate: '15% - 20%' },
                {id: '4', discountRate: '20% - 25%' },
                {id: '5', discountRate: '25% - 30%' },
                {id: '6', discountRate: '30% - 35%' },
                {id: '7', discountRate: '35% - 40%' },
                {id: '8', discountRate: '40% - 45%' },
                {id: '9', discountRate: '45% - 50%' },
                {id: '10', discountRate: '50% - 55%' },
                {id: '11', discountRate: '55% - 60%' },
                {id: '12', discountRate: '60% - 65%' },
                {id: '13', discountRate: '65% - 70%' },
                {id: '14', discountRate: '70% - 75%' },
                {id: '15', discountRate: '75% - above' },
            ],

            priceRange: 0,
            minPrice: 0,
            maxPrice: 100000,
            shopSidebarActive: false,

        }

    },

    mounted() {


    },

    methods: {

        shopSidebarController(){
            this.shopSidebarActive = !this.shopSidebarActive
        }

    }

}

</script>
