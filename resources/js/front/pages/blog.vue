<template>

    <!-- blog list -->
    <div class="container-fluid cursor-pointer-menu mb-4 blogs" v-if="singleData === null">
        <div class="row">
            <div class="col-md-6 col-lg-4 p-3 mb-3" v-for="each in blogList">
                <div class="bg-white blog-content rounded-3 p-3 cursor-pointer" @click="showInfo(each)">
                    <div class="mb-3 overflow-hidden">
                        <img :src="each.file_path" class="img-fluid w-100 object-fit-cover image-effect" alt="blog-1">
                    </div>
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

    <div class="container-fluid cursor-content-menu mb-4" v-if="singleData !== null">
        <!-- blog single data -->
        <div class="mb-3">
            <button type="button" class="btn btn-outline-theme" @click="singleData = null">
                <i class="bi bi-chevron-left"></i>
            </button>
        </div>
        <img :src="singleData.file_path" class="img-fluid object-fit-cover w-100" style="height: 450px;" :alt="singleData.title">
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

</template>

<script>

export default {

    data(){

        return{
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
