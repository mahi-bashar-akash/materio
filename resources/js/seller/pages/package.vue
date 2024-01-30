<template>

    <!-- search and create btn -->
    <div class="p-3">
        <div class="row">
            <div class="col-md-6 mb-3">
                <div class="position-relative">
                    <input type="text" name="keyword" class="form-control ps-5" placeholder="Search Here" required autocomplete="new-search">
                    <div class="position-absolute top-50 start-0 ps-1 translate-middle-y">
                        <i class="ps-3 bi bi-search"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-3 text-end">
                <button class="btn btn-theme" @click="managePackageOpen">
                    Create new Package
                </button>
            </div>
        </div>
    </div>

    <!-- package list -->
    <div class="package-card-body bg-white border rounded-2 p-3">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th class="id">Id.</th>
                        <th class="default-width">Name.</th>
                        <th class="default-width">Price.</th>
                        <th class="default-width">Description.</th>
                        <th class="default-width text-end">Action.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="each in packageTableList">
                        <td class="id">{{each.id}}</td>
                        <td class="default-width">{{each.name}}</td>
                        <td class="price">{{each.price}}</td>
                        <td class="default-width">
                            <div class="text-truncate wpx-200">
                                {{each.description}}
                            </div>
                        </td>
                        <td class="action">
                            <div class="d-flex justify-content-end align-items-center">
                                <button type="button" class="btn-icon">
                                    <i class="bi bi-pencil-fill"></i>
                                </button>
                                <button type="button" class="btn-icon">
                                    <i class="bi bi-trash2"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- package manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Package</h1>
                    <button type="button" class="btn-close" @click="managePackageClose"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <div class="form-group">
                            <label for="package-name" class="form-label">Package Name</label>
                            <input id="package-name" type="text" name="package-name" class="form-control" required autocomplete="new-package-name" v-model="packageParam.name" placeholder="Enter your name">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <label for="package-name" class="form-label">Package Price</label>
                            <input id="package-name" type="text" name="package-name" class="form-control" required autocomplete="new-package-price" v-model="packageParam.price" placeholder="Enter your price">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="package-description" class="form-label">Package Description</label>
                        <textarea name="package-description" class="form-textarea" id="package-description" cols="30" rows="5" required autocomplete="new-package-description" v-model="packageParam.description" placeholder="Enter your description"></textarea>
                    </div>
                </div>
                <div class="modal-footer border-top-0">
                    <button type="button" class="btn btn-light px-4 border me-2" @click="managePackageClose">
                        CANCEL
                    </button>
                    <button type="button" class="btn btn-theme px-4">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- package delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Package</h1>
                    <button type="button" class="btn-close" @click="deletePackageClose"></button>
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
                    <button type="button" class="btn btn-light px-4 border me-2 col-5" @click="deletePackageClose">
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
            packageTableList: [
                {
                    id: '1',
                    name: 'Food Package',
                    price: '$49.99',
                    description: 'Get a curated selection of nutritious meals delivered to your doorstep.'
                },
                {
                    id: '2',
                    name: 'Dress Package',
                    price: '$29.99',
                    description: 'Receive a monthly subscription of trendy and stylish clothing items.'
                },
                {
                    id: '3',
                    name: 'Shelter Package',
                    price: 'Contact for Pricing',
                    description: 'Find your ideal home with our real estate experts and get exclusive deals.'
                },
                {
                    id: '4',
                    name: 'Education Package',
                    price: '$19.99/month',
                    description: 'Access online courses and educational resources for continuous learning.'
                },
                {
                    id: '5',
                    name: 'Treatment Package',
                    price: 'Varies',
                    description: 'Receive personalized healthcare solutions and expert medical advice.'
                },
            ],
            packageParam: {
                name: '',
                price: '',
                description: '',
            }
        }

    },

    mounted() {



    },

    methods: {

        managePackageOpen(){
            const myModal = new bootstrap.Modal("#manageModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        managePackageClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        deletePackageOpen(){
            const myModal = new bootstrap.Modal("#deleteModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        deletePackageClose(){
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
