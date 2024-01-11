<template>

    <div class="container-fluid shop-wrapper">
        <div class="shop-sidebar" :class="{'active' : shopSidebarActive}">
            <div class="inside-shadow">
                <div class="sidebar-close">
                    <button type="button" class="btn btn-close shadow-none" @click="sidebarController"></button>
                </div>

                <div class="fs-5 fw-semibold mt-3">
                    Category
                </div>

                <div class="py-3">
                    <a href="javascript:void(0)" class="nav-link p-2">
                        Fruits
                    </a>
                    <a href="javascript:void(0)" class="nav-link p-2">
                        Vegetables
                    </a>
                    <a href="javascript:void(0)" class="nav-link p-2">
                        Meats
                    </a>
                    <a href="javascript:void(0)" class="nav-link p-2">
                        Fishes
                    </a>
                </div>

                <div class="fs-5 fw-semibold">
                    Price
                </div>

                <div class="row py-3">
                    <div class="col-6 mb-3 px-1">
                        <div class="form-group">
                            <input type="text" name="" class="form-control" placeholder="Min:">
                        </div>
                    </div>
                    <div class="col-6 mb-3 px-1">
                        <div class="form-group">
                            <input type="text" name="" class="form-control" placeholder="Max:">
                        </div>
                    </div>
                </div>

                <div class="fs-5 fw-semibold">
                    Availability
                </div>

                <div class="py-3">
                    <a href="javascript:void(0)" class="nav-link p-2">
                        In Stock
                    </a>
                    <a href="javascript:void(0)" class="nav-link p-2">
                        Out of Stock
                    </a>
                    <a href="javascript:void(0)" class="nav-link p-2">
                        Comming Soon
                    </a>
                </div>
            </div>
        </div>
        <div class="shop-content">

            <div class="d-flex justify-content-between align-items-center p-3">
                <button type="button" class="btn btn-controller" @click="sidebarController">
                    <i class="bi bi-justify-left"></i>
                </button>

                <div class="col-6 col-md-4">
                    <select name="" class="form-select">
                        <option value="">Default Sorting</option>
                        <option value="">Best Selling</option>
                        <option value="">Alphabetic ( A - Z )</option>
                        <option value="">Alphabetic ( Z - A )</option>
                        <option value="">Date new to old</option>
                        <option value="">Date old to new</option>
                        <option value="">Price low to high</option>
                        <option value="">Price high to low</option>
                    </select>
                </div>
            </div>

            <div class="container-fluid shop-product-content inside-shadow">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div class="product-single overflow-hidden">
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
                    </div>
                    <div class="product-single overflow-hidden">
                        <div class="item">
                            <div class="product-item">
                                <img :src="`/images/product/image-02.jpg`" class="product-image img-fluid">
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
                    </div>
                    <div class="product-single overflow-hidden">
                        <div class="item">
                            <div class="product-item">
                                <img :src="`/images/product/image-03.jpg`" class="product-image img-fluid">
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
                    </div>
                    <div class="product-single overflow-hidden">
                        <div class="item">
                            <div class="product-item">
                                <img :src="`/images/product/image-04.jpg`" class="product-image img-fluid">
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
                    </div>
                    <div class="product-single overflow-hidden">
                        <div class="item">
                            <div class="product-item">
                                <img :src="`/images/product/image-05.jpg`" class="product-image img-fluid">
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
                    </div>

                    <div class="product-single overflow-hidden">
                        <div class="item">
                            <div class="product-item">
                                <img :src="`/images/product/image-06.jpg`" class="product-image img-fluid">
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
                    </div>

                    <div class="product-single overflow-hidden">
                        <div class="item">
                            <div class="product-item">
                                <img :src="`/images/product/image-07.jpg`" class="product-image img-fluid">
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
                    </div>

                    <div class="product-single overflow-hidden">
                        <div class="item">
                            <div class="product-item">
                                <img :src="`/images/product/image-08.jpg`" class="product-image img-fluid">
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
                    </div>

                    <div class="product-single overflow-hidden">
                        <div class="item">
                            <div class="product-item">
                                <img :src="`/images/product/image-09.jpg`" class="product-image img-fluid">
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
                    </div>

                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center pt-3">
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

</template>

<script>

export default {

    data(){

        return{
            shopSidebarActive: false,
        }

    },

    mounted() {



    },

    methods: {

        sidebarController(){
            this.shopSidebarActive = !this.shopSidebarActive
        }

    }

}

</script>
