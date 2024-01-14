<template>

    <div class="text-end p-3">
        <button class="btn btn-theme" @click="manageSliderOpen">
            Create new slider
        </button>
    </div>

    <!-- slider -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 col-xl-4" v-for="each in sliders">
                <div class="slider border overflow-hidden">
                    <img :src="each.file_path" class="each-slider img-fluid w-100 h-100" alt="slider image">
                </div>
                <div class="fw-semibold">{{each.title}}</div>
            </div>
        </div>
    </div>

    <!-- user manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Slider</h1>
                    <button type="button" class="btn-close" @click="manageSliderClose"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="slider" class="form-label w-100 bg-light-theme py-4 text-center rounded-3 cursor-pointer">
                            <input id="slider" type="file" name="slider" class="d-none" required autocomplete="new-slider">
                            <i class="bi bi-camera text-theme" style="font-size: 70px"></i>
                        </label>
                    </div>
                </div>
                <div class="modal-footer border-top-0">
                    <button type="button" class="btn btn-light px-4 border me-2" @click="manageSliderClose">
                        CANCEL
                    </button>
                    <button type="button" class="btn btn-theme px-4">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{
            sliders: [
                { id: '1', file_path: '/images/slider/banner-1.jpg', title: '', },
                { id: '2', file_path: '/images/slider/banner-2.jpg', title: '', },
                { id: '3', file_path: '/images/slider/banner-3.jpg', title: '', },
            ]
        }

    },

    mounted() {



    },

    methods: {

        manageSliderOpen(){
            const myModal = new bootstrap.Modal("#manageModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        manageSliderClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
