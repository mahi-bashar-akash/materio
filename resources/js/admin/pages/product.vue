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
                <button class="btn btn-theme" @click="manageProductOpen">
                    Create new Product
                </button>
            </div>
        </div>
    </div>

    <!-- product list -->
    <div class="product-card-body bg-white border rounded-2 p-3">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th class="checkbox">
                            <input type="checkbox" name="checkbox" class="form-check-input">
                        </th>
                        <th class="id">
                            Id.
                        </th>
                        <th class="name">
                            Name.
                        </th>
                        <th class="price">
                            Price.
                        </th>
                        <th class="category">
                            Category.
                        </th>
                        <th class="quantity">
                            Quantity.
                        </th>
                        <th class="action text-end">
                            Action.
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="each in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]">
                        <td class="checkbox">
                            <input type="checkbox" name="checkbox" class="form-check-input">
                        </td>
                        <td class="id">
                            1
                        </td>
                        <td class="name">
                            <div class="d-flex align-items-center justify-content-start">
                                <img :src="`/images/product/image-01.jpg`" class="item me-2" alt="product">
                                Product Name
                            </div>
                        </td>
                        <td class="price">
                            $100
                        </td>
                        <td class="category">
                            Fruits
                        </td>
                        <td class="quantity">
                            1
                        </td>
                        <td class="action">
                            <div class="d-flex justify-content-end align-items-center">
                                <a href="javascript:void(0)" class="btn-icon">
                                    <i class="bi bi-pencil-fill"></i>
                                </a>
                                <a href="javascript:void(0)" class="btn-icon">
                                    <i class="bi bi-trash2"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- product manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Product</h1>
                    <button type="button" class="btn-close" @click="manageProductClose"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <div class="form-group">
                            <label for="product-name" class="form-label">Product Name</label>
                            <input id="product-name" type="text" name="product-name" class="form-control" required autocomplete="new-product-name">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <label for="product-price" class="form-label">Product Price</label>
                            <input id="product-price" type="text" name="product-price" class="form-control" required autocomplete="new-product-price">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <label for="product-quantity" class="form-label">Product Category</label>
                            <select name="" id="" class="form-select" required autocomplete="new-product-category">
                                <option value="">food</option>
                                <option value="">fruits</option>
                                <option value="">vegetables</option>
                                <option value="">meats</option>
                                <option value="">dress</option>
                                <option value="">male collection</option>
                                <option value="">female collection</option>
                                <option value="">accessories collection</option>
                                <option value="">shelter</option>
                                <option value="">temporary shelter</option>
                                <option value="">parmanent shelter</option>
                                <option value="">Education</option>
                                <option value="">Primary Education</option>
                                <option value="">Secondary Education</option>
                                <option value="">Higher Education</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <label for="product-quantity" class="form-label">Product Quantity</label>
                            <select name="product-quantity" id="product-quantity" class="form-select" required autocomplete="new-product-quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="product-description" class="form-label">Product Description</label>
                        <textarea id="product-description" name="product-description" class="form-textarea" cols="30" rows="5" required autocomplete="new-product-description"></textarea>
                    </div>
                </div>
                <div class="modal-footer border-top-0">
                    <button type="button" class="btn btn-light px-4 border me-2" @click="manageProductClose">
                        CANCEL
                    </button>
                    <button type="button" class="btn btn-theme px-4">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- product delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Slider</h1>
                    <button type="button" class="btn-close" @click="deleteProductClose"></button>
                </div>
                <div class="modal-body">
                    <div class="d-block text-center">
                        <i class="text-danger bi bi-trash2" style="font-size: 70px"></i>
                    </div>
                    <div class="text-center fs-5 fw-semibold mb-4">
                        Are you sure?
                    </div>
                </div>
                <div class="modal-footer border-top-0 d-flex justify-content-between">
                    <button type="button" class="btn btn-light px-4 border me-2 col-5" @click="deleteProductClose">
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

        return{}

    },

    mounted() {



    },

    methods: {

        manageProductOpen(){
            const myModal = new bootstrap.Modal("#manageModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        manageProductClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        deleteProductOpen(){
            const myModal = new bootstrap.Modal("#deleteModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        deleteProductClose(){
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
