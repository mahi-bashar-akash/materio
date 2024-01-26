<template>

    <div class="col-12 col-lg-8 px-3 mt-4 mt-lg-0">

        <div class="bg-white px-4 py-3 shadow rounded-3">

            <div class="fs-5 fw-semibold mb-3">
                Product review
            </div>

            <div class="mb-3 border p-3 rounded-3 position-relative" v-for="each in productReviewList">
                <div class="position-absolute top-0 end-0 p-2">
                    <div class="dropdown">
                        <button type="button" class="btn-icon" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end p-0 overflow-hidden shadow border-0">
                            <li>
                                <a href="javascript:void(0)" class="dropdown-item px-3 py-2">
                                    Edit
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dropdown-item px-3 py-2">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 col-md-3 p-3">
                        <img :src="each.file_path" class="img-fluid object-fit-cover" alt="product">
                    </div>
                    <div class="col-md-9 p-3">
                        <div class="mb-2 fw-semibold">
                            {{each.name}}
                        </div>
                        <div class="mb-2 text-theme">
                            {{each.price}}
                        </div>
                        <div class="text-secondary">
                            {{each.reviewMessage}}
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <nav aria-label="Page navigation example">
                    <div class="pagination justify-content-center d-flex align-items-center">
                        <div class="page-item">
                            <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                                <i class="bi bi-chevron-bar-left"></i>
                            </a>
                        </div>
                        <div class="page-item">
                            <a class="page-link" href="javascript:void(0)">
                                1
                            </a>
                        </div>
                        <div class="page-item active">
                            <a class="page-link" href="javascript:void(0)">
                                2
                            </a>
                        </div>
                        <div class="page-item">
                            <a class="page-link" href="javascript:void(0)">
                                3
                            </a>
                        </div>
                        <div class="page-item">
                            <a class="page-link" href="javascript:void(0)" aria-label="Next">
                                <i class="bi bi-chevron-bar-right"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

        </div>

    </div>

</template>

<script>

export default {

    data(){

        return{

            productReviewList: [
                { id: '1', file_path: '/images/product/image-01.jpg', name: 'Product Name', price: '$5', reviewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis, ipsum quam quod ratione voluptatem.' },
                { id: '2', file_path: '/images/product/image-02.jpg', name: 'Product Name', price: '$10', reviewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis, ipsum quam quod ratione voluptatem.' },
                { id: '3', file_path: '/images/product/image-03.jpg', name: 'Product Name', price: '$15', reviewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis, ipsum quam quod ratione voluptatem.' },
                { id: '4', file_path: '/images/product/image-04.jpg', name: 'Product Name', price: '$20', reviewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis, ipsum quam quod ratione voluptatem.' },
                { id: '5', file_path: '/images/product/image-05.jpg', name: 'Product Name', price: '$25', reviewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis, ipsum quam quod ratione voluptatem.' },
                { id: '6', file_path: '/images/product/image-06.jpg', name: 'Product Name', price: '$30', reviewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis, ipsum quam quod ratione voluptatem.' },
                { id: '7', file_path: '/images/product/image-07.jpg', name: 'Product Name', price: '$35', reviewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis, ipsum quam quod ratione voluptatem.' },
                { id: '8', file_path: '/images/product/image-08.jpg', name: 'Product Name', price: '$40', reviewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis, ipsum quam quod ratione voluptatem.' },
                { id: '9', file_path: '/images/product/image-09.jpg', name: 'Product Name', price: '$45', reviewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis, ipsum quam quod ratione voluptatem.' },
                { id: '10', file_path: '/images/product/image-10.jpg', name: 'Product Name', price: '$50', reviewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis, ipsum quam quod ratione voluptatem.' },
            ],

            singleData: null,

        }

    },

    mounted() {  },

    methods: {  }

}

</script>
