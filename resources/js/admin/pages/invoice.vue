<template>

    <!-- invoice wrapper -->
    <div class="invoice-wrapper">

        <!-- invoice header -->
        <div class="invoice-header rounded-3">
            <div class="row">
                <div class="col-md-6 p-2">
                    <div class="position-relative">
                        <input type="text" name="keyword" class="form-control ps-5" required autocomplete="new-search" placeholder="Search Here" v-model="formData.keyword">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex justify-content-end align-items-center p-2">
                    <router-link :to="{name: 'manageInvoice'}" class="btn btn-theme d-flex justify-content-center align-items-center px-4">
                        Create New Invoice
                    </router-link>
                </div>
            </div>
        </div>

        <!-- invoice body -->
        <div class="invoice-body border rounded-3 mt-4 p-3 bg-white cursor-content-menu">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="checkbox">
                                <input type="checkbox" name="checkbox" class="form-checkbox">
                            </th>
                            <th class="id">Invoice no.</th>
                            <th class="name">Client.</th>
                            <th class="date">Date.</th>
                            <th class="payment">Due.</th>
                            <th class="action text-end">Action.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="each in invoiceTableData">
                            <td class="checkbox">
                                <input type="checkbox" name="checkbox" class="form-checkbox">
                            </td>
                            <td class="id">{{each.invoiceNo}}</td>
                            <td class="name">
                                <div class="d-flex align-items-center justify-content-start">
                                    <img :src="each.clientImage" class="img-fluid rounded-circle wpx-45 hpx-45" alt="client-avatar">
                                    <div class="ms-2">
                                        <div class="fw-bold">{{each.clientName}}</div>
                                        <small class="text-secondary">{{each.clientEmail}}</small>
                                    </div>
                                </div>
                            </td>
                            <td class="date">
                                {{each.date}}
                            </td>
                            <td class="payment">
                                {{each.due}}
                            </td>
                            <td class="action">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Preview
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{
            /* Data properties for the component */
            invoiceTableData: [
                { invoiceNo: '#5031', clientImage: '/images/clients/face-1.png', clientName: 'Andrew Burns', clientEmail: 'andrew_burns@gmail.com',  date: 'December, 13, 2023', due: '$3171' },
                { invoiceNo: '#5032', clientImage: '/images/clients/face-2.png', clientName: 'Dana Carey', clientEmail: 'dana_carey@gmail.com', date: 'December, 15, 2023', due: '$4263' },
                { invoiceNo: '#5033', clientImage: '/images/clients/face-3.png', clientName: 'Tammy Sanchez', clientEmail: 'tammy_sanchez@gmail.com', date: 'December, 17, 2023', due: '$4836' },
                { invoiceNo: '#5034', clientImage: '/images/clients/face-4.png', clientName: 'Lori Wells', clientEmail: 'lari_wells@gmail.com', date: 'December, 19, 2023', due: '$2769' },
                { invoiceNo: '#5035', clientImage: '/images/clients/face-5.png', clientName: 'Richard Payne', clientEmail: 'richard_payne@gmail.com', date: 'December, 21, 2023', due: '$5181' },
                { invoiceNo: '#5036', clientImage: '/images/clients/face-6.png', clientName: 'Jennifer Summers', clientEmail: 'jennifer_summers@gmail.com', date: 'December, 23, 2023', due: '$5565' },
            ],
            formData: {
                keyword: '',
            }
        }

    },

    mounted() {  },

    methods: {  }

}

</script>
