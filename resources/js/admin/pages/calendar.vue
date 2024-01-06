<template>

    <!-- calendar wrapper -->
    <div class="calendar-wrapper">

        <!-- calendar sidebar -->
        <div class="calendar-sidebar" :class="{'active' : calendarSidebarActive}">
            <div class="calendar-sidebar-header mb-3">
                <button type="button" class="btn btn-theme" @click="manageEventOpen">
                    Add Event
                </button>
                <button type="button" class="ms-2 btn btn-close" @click="remove"></button>
            </div>
            <div class="calendar-sidebar-body">
                <button type="button" class="btn-effect">
                    View all
                </button>
                <button type="button" class="btn-effect">
                    Personal
                </button>
                <button type="button" class="btn-effect">
                    Business
                </button>
                <button type="button" class="btn-effect">
                    Family
                </button>
                <button type="button" class="btn-effect">
                    Holiday
                </button>
            </div>
        </div>

        <!-- calendar content -->
        <div class="calendar-content">

            <!-- calendar content header -->
            <div class="calendar-content-header">
                <button type="button" class="btn btn-controller border-0" @click="calendarSidebarController">
                    <i class="bi bi-justify-left"></i>
                </button>
                <div class="col-md-6">
                    <div class="position-relative">
                        <input type="text" name="" class="form-control ps-5" required placeholder="Search here" autocomplete="new-keyword">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- calendar content body -->
            <div class="calendar-content-body">
                <div class="calendar-data" v-for="each in [1,2,3,4,5,6,7,8,9,10]">

                    <!-- calendar single data show date with day -->
                    <div class="row bg-secondary-subtle border-bottom cursor-content-menu">
                        <div class="col-md-6 py-2 px-3">
                            December 18, 2023
                        </div>
                        <div class="col-md-6 py-2 px-3 text-end">
                            Monday
                        </div>
                    </div>

                    <!-- calendar sub single data show event -->
                    <small class="row bg-white text-secondary border-bottom cursor-pointer" @click="manageEventOpen(each)">
                        <span class="col-md-6 py-2 px-3">
                            <span class="bi bi-circle-fill text-secondary me-2"></span>
                            Dart Game
                        </span>
                            <span class="col-md-6 py-2 px-3 text-end">
                            06:00 pm
                        </span>
                    </small>

                    <!-- calendar sub single data show event -->
                    <small class="row bg-white text-secondary border-bottom cursor-pointer" @click="manageEventOpen(each)">
                        <span class="col-md-6 py-2 px-3">
                            <span class="bi bi-circle-fill text-warning me-2"></span>
                            Dinner
                        </span>
                            <span class="col-md-6 py-2 px-3 text-end">
                            12:00 pm
                        </span>
                    </small>

                    <!-- calendar sub single data show event -->
                    <small class="row bg-white text-secondary border-bottom cursor-pointer" @click="manageEventOpen(each)">
                        <span class="col-md-6 py-2 px-3">
                            <span class="bi bi-circle-fill text-danger me-2"></span>
                            Meditation
                        </span>
                            <span class="col-md-6 py-2 px-3 text-end">
                            06:00 am
                        </span>
                    </small>

                    <!-- calendar sub single data show event -->
                    <small class="row bg-white text-secondary border-bottom cursor-pointer" @click="manageEventOpen(each)">
                        <span class="col-md-6 py-2 px-3">
                            <span class="bi bi-circle-fill text-theme me-2"></span>
                            Product reviews
                        </span>
                            <span class="col-md-6 py-2 px-3 text-end">
                            03:00 pm
                        </span>
                    </small>

                </div>
            </div>
        </div>
    </div>

    <!-- event manage modal of calendar -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Event</h1>
                    <button type="button" class="btn-close" @click="manageEventClose"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="" type="text" class="form-control" placeholder="Title" required autocomplete="new-title">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <select name="" id="" class="form-select">
                                <option value="">Select Category</option>
                                <option value="">Personal</option>
                                <option value="">Business</option>
                                <option value="">Family</option>
                                <option value="">Holiday</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="" type="text" class="form-control" placeholder="Start Date" required autocomplete="">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="" type="text" class="form-control" placeholder="End Date" required autocomplete="">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="" type="text" class="form-control" placeholder="Event Url" required autocomplete="">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="" type="text" class="form-control" placeholder="Guest" required autocomplete="">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="" type="text" class="form-control" placeholder="Location" required autocomplete="">
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea name="" class="form-textarea" cols="30" rows="5" placeholder="Description"></textarea>
                    </div>
                </div>
                <div class="modal-footer border-top-0">
                    <button type="button" class="btn btn-light px-4 border me-2" @click="manageEventClose">
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

    data() {

        return {
            calendarSidebarActive: false,
        }

    },

    mounted() {


    },

    methods: {

        manageEventOpen(){
            const myModal = new bootstrap.Modal("#manageModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        manageEventClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        calendarSidebarController(){
            this.calendarSidebarActive = true;
            this.calendarModalActive = false;
        },

        remove(){
            this.calendarModalActive = false;
            this.calendarSidebarActive = false;
        }

    }

}

</script>
