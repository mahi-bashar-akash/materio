<template>

    <div class="container-fluid">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-between">
            <div class="p-3">
                <select name="category" class="form-select">
                    <option value="">Select Category</option>
                    <option value="">Fruits</option>
                    <option value="">Vegetables</option>
                    <option value="">Meats</option>
                    <option value="">Fishes</option>
                </select>
            </div>
            <div class="p-3">
                <select name="filter" class="form-select">
                    <option value="">Select Filter</option>
                    <option value="">alphabet, a - z</option>
                    <option value="">price, lower to higher</option>
                </select>
            </div>
            <div class="p-3">
                <input type="text" name="search" class="form-control" placeholder="Search here" autocomplete="new-search">
            </div>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">

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

</template>

<script>

export default {

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
                {id: '16', file_path: '/images/product/image-01.jpg', name: 'Product Name', price: '85', category: 'Category Name'},
            ]

        }

    },

    mounted() {


    },

    methods: {



    }

}

</script>
