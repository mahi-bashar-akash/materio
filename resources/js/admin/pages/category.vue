<template>

    <div class="text-end p-3">
        <button class="btn btn-theme" @click="manageCategoryOpen">
            Create new Category
        </button>
    </div>

    <!-- category list -->
    <div class="accordion" id="categoryAccordion">
        <div v-for="category in categories" :key="category.id" class="accordion-item">
            <h2 class="accordion-header" :id="'heading' + category.id">
                <button class="accordion-button" type="button" :data-bs-toggle="'#collapse' + category.id" :aria-controls="'collapse' + category.id" :aria-expanded="categoryExpanded === category.id" @click="toggleCategory(category.id)" >
                    {{ category.name }}
                </button>
            </h2>
            <div :id="'collapse' + category.id" class="accordion-collapse collapse" :class="{ show: categoryExpanded === category.id }" :aria-labelledby="'heading' + category.id" data-bs-parent="#categoryAccordion" >
                <div class="accordion-body">
                    <div class="row" v-for="subCategory in category.subCategory" :key="subCategory.id">
                        <div class="col-12 col-md-6">
                            {{ subCategory.name }}
                        </div>
                        <div class="col-12 col-md-6 d-flex justify-content-end align-items-center">
                            <button type="button" class="btn-icon">
                                <i class="bi bi-pencil-fill"></i>
                            </button>
                            <button type="button" class="btn-icon">
                                <i class="bi bi-trash2-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- category manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Category</h1>
                    <button type="button" class="btn-close" @click="manageCategoryClose"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <div class="form-group">
                            <label for="category-name" class="form-label">Category Name</label>
                            <input id="category-name" type="text" name="category-name" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="parent-id" class="form-label">Parent Id</label>
                        <select name="parent-id" id="parent-id" class="form-select">
                            <option value="0">Zero</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer border-top-0">
                    <button type="button" class="btn btn-light px-4 border me-2" @click="manageCategoryClose">
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
                    <button type="button" class="btn-close" @click="deleteCategoryClose"></button>
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
                    <button type="button" class="btn btn-light px-4 border me-2 col-5" @click="deleteCategoryClose">
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

    created() {
        if (this.categories.length > 0) {
            this.categoryExpanded = this.categories[0].id;
        }
    },

    data(){

        return{

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
            categoryExpanded: null,

        }

    },

    mounted() {



    },

    methods: {

        manageCategoryOpen(){
            const myModal = new bootstrap.Modal("#manageModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        manageCategoryClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        deleteCategoryOpen(){
            const myModal = new bootstrap.Modal("#deleteModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        deleteCategoryClose(){
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        toggleCategory(categoryId) {
            this.categoryExpanded = this.categoryExpanded === categoryId ? null : categoryId;
        },

    }

}

</script>
