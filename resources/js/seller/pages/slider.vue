<template>

    <div class="text-end p-3">
        <button class="btn btn-theme" @click="manageSliderOpen">
            Create new slider
        </button>
    </div>

    <!-- slider list -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 col-xl-4 mb-3" v-for="each in sliders">
                <div class="slider border overflow-hidden position-relative">
                    <img :src="each.file_path" class="each-slider img-fluid w-100 h-100" alt="slider image">
                    <div class="fw-semibold position-absolute top-50 start-0 translate-middle-y ps-5 text-white cursor-content-menu">
                        <span class="d-block fs-3">
                            {{each.topTitle}}
                        </span>
                        <span class="d-block fs-1">
                            {{each.midTitle}}
                        </span>
                        <span class="d-block fs-3 text-end">
                            Sales
                        </span>
                    </div>
                    <div class="fw-semibold position-absolute top-0 end-0 p-2">
                        <div class="py-2 px-4 bg-white bg-opacity-75 rounded-start-5">
                            {{each.discount}}
                        </div>
                    </div>
                    <div class="position-absolute bottom-0 end-0 translate-middle-y pe-2">
                        <div class="d-flex justify-content-center align-items-center">
                            <a href="javascript:void(0)" class="btn btn-light d-flex justify-content-center align-items-center" @click="manageSliderOpen(each.id)">
                                Edit
                            </a>
                            <a href="javascript:void(0)" class="btn btn-light d-flex justify-content-center align-items-center ms-3" @click="deleteSliderOpen(each.id)">
                                Delete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- slider manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Slider</h1>
                    <button type="button" class="btn-close" @click="manageSliderClose"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <div class="form-group">
                            <label for="slider" class="form-label w-100 bg-light-theme text-center rounded-3 cursor-pointer">
                                <input id="slider" type="file" name="slider" class="d-none" required autocomplete="new-slider" @click="manageAvatar($event)">
                                <span class="d-block py-4">
                                    <i class="bi bi-clouds-fill text-theme font-30"></i>
                                    <span class="text-center d-block text-dark fw-semibold fs-6">
                                        Upload Slider
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="discount" class="form-label">Discount Offer</label>
                        <input type="text" name="discount" class="form-control" required autocomplete="new-discount" placeholder="Enter your discount" v-model="sliderParam.discount">
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

    <!-- slider delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Slider</h1>
                    <button type="button" class="btn-close" @click="deleteSliderClose"></button>
                </div>
                <div class="modal-body">
                    <div class="d-block text-center">
                        <i class="text-danger bi bi-trash2 delete-font-size"></i>
                    </div>
                    <div class="text-center fs-5 fw-semibold mb-4">
                        Are you sure?
                    </div>
                </div>
                <div class="modal-footer border-top-0 d-flex justify-content-between">
                    <button type="button" class="btn btn-light px-4 border me-2 col-5" @click="deleteSliderClose">
                        CANCEL
                    </button>
                    <button type="button" class="btn btn-danger px-4 col-5">
                        CONFIRM
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
                { id: '1', file_path: '/images/slider/banner-1.jpg', topTitle: 'Super', midTitle: 'Grocery', discount: '10%' },
                { id: '2', file_path: '/images/slider/banner-2.jpg', topTitle: 'Super', midTitle: 'Grocery', discount: '15%' },
                { id: '3', file_path: '/images/slider/banner-3.jpg', topTitle: 'Super', midTitle: 'Grocery', discount: '20%' },
            ],
            sliderParam: {
                avatar: null,
                discount: '',
            }
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

        deleteSliderOpen(){
            const myModal = new bootstrap.Modal("#deleteModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        deleteSliderClose(){
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        manageAvatar(e){
            this.sliderParam.avatar = e.target.src
        },

    }

}

</script>
