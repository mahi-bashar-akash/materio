<template>

    <!-- search -->
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
        </div>
    </div>

    <!-- customer list -->
    <div class="customer-card-body bg-white border rounded-2 p-3 cursor-content-menu">
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
                        <th class="default-width">
                            Customer Name.
                        </th>
                        <th class="default-width">
                            Customer Email.
                        </th>
                        <th class="default-width">
                            Phone Number
                        </th>
                        <th class="default-width">
                            status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="each in customerTable">
                        <td class="checkbox">
                            <input type="checkbox" name="checkbox" class="form-check-input">
                        </td>
                        <td class="id">
                            {{each.id}}
                        </td>
                        <td class="name">
                            <div class="d-flex align-items-center justify-content-start">
                                <img :src="each.avatar" class="img-fluid me-2 face" alt="avatar">
                                {{each.name}}
                            </div>
                        </td>
                        <td class="default-width">
                            {{each.email}}
                        </td>
                        <td class="default-width">
                            {{each.phoneNumber}}
                        </td>
                        <td class="default-width">
                            <span class="badge bg-success px-3 py-2 rounded-pill" v-if="each.status === '1'">
                                Online
                            </span>
                            <span class="badge bg-warning text-dark px-3 py-2 rounded-pill" v-if="each.status === '2'">
                                Offline
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{

            customerTable: [
                { id: '1', avatar: '/images/clients/face-1.png', name: 'Andrew Burns', email: 'andrew@gmail.com', phoneNumber: '01230 456789', status: '1' },
                { id: '2', avatar: '/images/clients/face-2.png', name: 'Dana Carey', email: 'dana@gmail.com', phoneNumber: '01011 121314', status: '1' },
                { id: '3', avatar: '/images/clients/face-3.png', name: 'Tammy Sanchez', email: 'tammy@gmail.com', phoneNumber: '01516 171819', status: '2' },
                { id: '4', avatar: '/images/clients/face-4.png', name: 'Lori Wells', email: 'lori@gmail.com', phoneNumber: '02021 222324', status: '1' },
                { id: '5', avatar: '/images/clients/face-5.png', name: 'Richard Payne', email: 'richard@gmail.com', phoneNumber: '02526 272829', status: '2' },
                { id: '6', avatar: '/images/clients/face-6.png', name: 'Jennifer Summers', email: 'jennifer@gmail.com', phoneNumber: '03031 323300', status: '2' },
                { id: '7', avatar: '/images/clients/face-4.png', name: 'Justin Richardson', email: 'justin@gmail.com', phoneNumber: '03435 363700', status: '1' },
                { id: '8', avatar: '/images/clients/face-2.png', name: 'Hossain Doe', email: 'hossain@gmail.com', phoneNumber: '03839 404142', status: '2' },
            ],

        }

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
