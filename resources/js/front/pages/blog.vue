<template>

    <!-- blog list -->
    <div class="container-fluid cursor-pointer-menu mb-4 blogs">
        <div class="row">
            <div class="col-lg-4 p-3 order-0 order-lg-1">

                <!-- blog categories -->

                <div class="mb-3 ps-1 fs-4 fw-bold">
                    Blogs category
                </div>

                <button type="button" class="border-0 p-2 w-100 d-flex justify-content-start align-items-center link-hover-effect mb-2" v-for="each in blogCategoryList">
                    <span class="col-8 text-truncate text-start">
                        <i class="bi bi-folder-fill me-1"></i>
                        {{each.name}}
                    </span>
                    <span class="col-4 text-end">
                        ( {{each.count}} )
                    </span>
                </button>

                <!-- blog tags -->

                <div class="my-3 ps-1 fs-4 fw-bold">
                    Blogs Tags
                </div>

                <button type="button" class="btn btn-outline-theme m-1" v-for="each in tagCategoryList">
                    {{each.name}}
                </button>

            </div>
            <div class="col-lg-8 p-3 order-1 order-lg-0">

                <div class="w-100" v-if="singleData === null">

                    <!-- blog list -->
                    <div class="row row-cols-1 row-cols-md-2">
                        <div v-for="each in blogList">
                            <div class="bg-white blog-content cursor-pointer border mb-4" @click="showInfo(each)">
                                <div class="mb-3 overflow-hidden hpx-180">
                                    <img :src="each.file_path" class="img-fluid w-100 object-fit-cover image-effect" alt="blog-1">
                                </div>
                                <div class="px-3 pb-3">
                                    <div class="fs-4 fw-semibold mb-3 text-theme">
                                        {{each.title}}
                                    </div>
                                    <div class="mb-3">
                                        {{each.description}}
                                    </div>
                                    <hr class="border">
                                    <div class="text-secondary">
                                        {{each.date}} | <span class="text-theme"> By {{each.author}} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- blog pagination -->
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

                <div class="cursor-content-menu mb-4" v-if="singleData !== null">
                    <!-- blog single data -->
                    <div class="mb-3">
                        <button type="button" class="btn btn-outline-theme px-2" @click="singleData = null">
                            <i class="bi bi-chevron-left"></i>
                        </button>
                    </div>
                    <img :src="singleData.file_path" class="img-fluid object-fit-cover w-100 hpx-350" :alt="singleData.title">
                    <div class="my-3 text-theme fw-semibold fs-4">
                        {{singleData.title}}
                    </div>

                    <div class="text-secondary mb-3">
                        {{singleData.date}} | <span class="text-theme"> By {{singleData.author}} </span>
                    </div>

                    <div class="text-secondary text-opacity-50 fw-light mb-3">
                        {{singleData.description}}
                    </div>
                    <div class="d-flex justify-content-start align-items-center mt-4">
                        <button type="button" class="btn btn-light me-2">
                            <i class="bi bi-hand-thumbs-up me-2"></i>
                            <span class="badge bg-theme text-white">0</span>
                        </button>
                        <button type="button" class="btn btn-light me-2">
                            <i class="bi bi-chat me-2"></i>
                            <span class="badge bg-theme text-white">0</span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <i class="bi bi-share me-2"></i>
                            <span class="badge bg-theme text-white">0</span>
                        </button>
                    </div>

                    <!-- blog feedback from customer -->
                    <form class="mt-4" autocomplete="off">
                        <div class="d-flex justify-content-start align-items-start mb-3">
                            <img :src="`/images/clients/face-1.png`" style="width: 45px; height: 45px" class="overflow-hidden rounded-circle" alt="avatar">
                            <div class="ms-3">
                                <div class="fw-semibold">John Smith</div>
                                <div class="text-secondary">johnsmith@gmail.com</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <textarea name="" class="form-textarea" cols="30" rows="3" required autocomplete="off" placeholder="Typing Something..."></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-theme">Send</button>
                    </form>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{
            blogCategoryList: [
                { id: '1', name: 'Food Recipes and Cooking Tips', count: '2' },
                { id: '2', name: 'Fashion and Style Guides', count: '4' },
                { id: '3', name: 'Home Decor and Interior Design', count: '6' },
                { id: '4', name: 'Educational Resources and Learning Strategies', count: '8' },
                { id: '5', name: 'Health and Wellness Tips and Treatments', count: '10' },
                { id: '6', name: 'Restaurant Reviews and Dining Experiences', count: '12' },
                { id: '7', name: 'Beauty and Skincare Tips', count: '14' },
                { id: '8', name: 'Real Estate and Property Insights', count: '16' },
                { id: '9', name: 'Academic and Career Development', count: '18' },
                { id: '10', name: 'Mental Health and Therapy Techniques', count: '20' },
            ],
            tagCategoryList: [
                { id: '1', name: 'Food' },
                { id: '2', name: 'Recipes' },
                { id: '3', name: 'Cooking' },
                { id: '4', name: 'Tips' },
                { id: '5', name: 'Fashion' },
                { id: '6', name: 'Guides' },
                { id: '7', name: 'Interior Design' },
                { id: '8', name: 'Resources' },
                { id: '9', name: 'Skincare' },
                { id: '10', name: 'Development' },
            ],
            blogList: [
                { id: '1', file_path: '/images/blog/blog-6.jpg', title: 'All time fresh every time healthy', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...', date: 'May 13, 2023', author: 'Spacing Tech' },
                { id: '2', file_path: '/images/blog/blog-5.jpg', title: 'All time fresh every time healthy', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...', date: 'May 13, 2023', author: 'Spacing Tech' },
                { id: '3', file_path: '/images/blog/blog-4.jpg', title: 'All time fresh every time healthy', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...', date: 'May 13, 2023', author: 'Spacing Tech' },
                { id: '4', file_path: '/images/blog/blog-3.jpg', title: 'All time fresh every time healthy', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...', date: 'May 13, 2023', author: 'Spacing Tech' },
                { id: '5', file_path: '/images/blog/blog-2.jpg', title: 'All time fresh every time healthy', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...', date: 'May 13, 2023', author: 'Spacing Tech' },
            ],

            singleData: null,
        }

    },

    mounted() {



    },

    methods: {

        showInfo(data){
            this.singleData = data
        }

    }

}

</script>
