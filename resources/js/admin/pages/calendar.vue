<template>

    <!-- calendar wrapper -->
    <div class="calendar-wrapper">

        <!-- calendar sidebar -->
        <div class="calendar-sidebar" :class="{'active' : calendarSidebarActive}">
            <div class="calendar-sidebar-header mb-3">
                <button type="button" class="btn btn-theme" @click="manageEventOpen">
                    Create New Event
                </button>
                <button type="button" class="ms-2 btn-close" @click="remove"></button>
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
                        <input type="text" name="keyword" class="form-control ps-5" required placeholder="Search here" autocomplete="new-keyword" v-model="formData.keyword">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- calendar content body -->
            <div class="calendar-content-body">
                <div class="calendar-data" v-for="each in calendarTableData">

                    <!-- calendar single data show date with day -->
                    <div class="row bg-secondary-subtle border-bottom cursor-pointer" @click="deleteEventOpen(each.id)">
                        <div class="col-md-6 py-2 px-3">
                            {{each.date}}
                        </div>
                        <div class="col-md-6 py-2 px-3 text-end">
                            {{each.day}}
                        </div>
                    </div>

                    <!-- calendar sub single data show event -->
                    <div v-for="insideEach in each.dayActivity">
                        <small class="row bg-white text-secondary border-bottom cursor-pointer" @click="manageEventOpen(each.id)">
                            <span class="col-md-6 py-2 px-3">
                                {{insideEach.activity}}
                            </span>
                            <span class="col-md-6 py-2 px-3 text-end">
                                {{insideEach.time}}
                            </span>
                        </small>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- event manage modal of calendar -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content" autocomplete="off">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Event</h1>
                    <button type="button" class="btn-close" @click="manageEventClose"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="new-title" type="text" name="title" v-model="eventParam.title" class="form-control" placeholder="Title" required autocomplete="new-title">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <select name="category" id="category" v-model="eventParam.category" class="form-select" required autocomplete="new-category">
                                <option value="select-category">Select Category</option>
                                <option value="personal">Personal</option>
                                <option value="business">Business</option>
                                <option value="family">Family</option>
                                <option value="holiday">Holiday</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="startDate" type="text" name="startDate" v-model="eventParam.startDate" class="form-control" placeholder="Start Date" required autocomplete="new-start-date">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="endDate" type="text" name="endDate" v-model="eventParam.endDate" class="form-control" placeholder="End Date" required autocomplete="new-end-date">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="websiteUrl" type="url" name="websiteUrl" v-model="eventParam.websiteUrl" class="form-control" placeholder="Event Url" required autocomplete="new-event-url">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="guest" type="text" name="guest" v-model="eventParam.guest" class="form-control" placeholder="Guest" required autocomplete="new-guest">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <input id="location" type="text" name="location" v-model="eventParam.location" class="form-control" placeholder="Location" required autocomplete="new-location">
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea id="description" name="description" v-model="eventParam.description" class="form-textarea" cols="30" rows="5" placeholder="Description" required autocomplete="new-description"></textarea>
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
            </form>
        </div>
    </div>

    <!-- calendar delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Calendar</h1>
                    <button type="button" class="btn-close" @click="deleteEventClose"></button>
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
                    <button type="button" class="btn btn-light px-4 border me-2 col-5" @click="deleteEventClose">
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

    data() {

        return {
            /* Data properties for the component */
            calendarSidebarActive: false,
            calendarTableData: [
                { id: '1', date: 'December 18, 2023', day: 'Monday',
                    dayActivity: [
                        { id: '1', activity: 'Dart Game', time: '06:00 pm' },
                        { id: '2', activity: 'Dinner', time: '12:00 pm' },
                        { id: '3', activity: 'Meditation', time: '06:00 am' },
                        { id: '4', activity: 'Product reviews', time: '03:00 pm' }
                    ]
                },
                { id: '2', date: 'December 21, 2023', day: 'Thursday',
                    dayActivity: [
                        { id: '1', activity: 'Board Meeting', time: '10:00 am' },
                        { id: '2', activity: 'Break time', time: '12:00 pm' },
                        { id: '3', activity: 'Meditation', time: '03:00 pm' },
                        { id: '4', activity: 'conversation competition', time: '06:00 pm' }
                    ]
                },
            ],
            formData: {
                keyword: '',
            },
            eventParam: {
                title: '',
                category: 'select-category',
                startDate: '',
                websiteUrl: '',
                guest: '',
                location: '',
                description: '',
            },
        }

    },

    mounted() {


    },

    methods: {

        /* Function to delete event modal open */
        deleteEventOpen(){
            const myModal = new bootstrap.Modal("#deleteModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        /* Function to delete event modal close */
        deleteEventClose(){
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* Function to manage event modal open */
        manageEventOpen(){
            const myModal = new bootstrap.Modal("#manageModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        /* Function to manage event modal close */
        manageEventClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* Function to calendar sidebar controller */
        calendarSidebarController(){
            this.calendarSidebarActive = true;
        },

        /* Function to remove sidebar active  */
        remove(){
            this.calendarSidebarActive = false;
        }

    }

}

</script>
