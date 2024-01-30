<template>

    <section class="w-100">
        <div class="container-fluid">

            <div class="shadow rounded-3 overflow-hidden">

                <div class="bg-light-theme p-0 p-sm-4 d-flex justify-content-between">
                    <div class="d-flex flex-wrap align-items-center justify-content-start">
                        <div class="p-3">
                            <img :src="`/images/seller/seller.png`" class="img-fluid bg-white rounded-3 me-3 shadow" style="width: 150px; height: 150px;" alt="seller">
                        </div>
                        <div class="d-inline-block p-3">
                            <div class="fw-semibold fs-3 text-dark">
                                Noodles Co.
                            </div>
                            <div class="fw-semibold mb-3">
                                3891 Ranchview Dr. Richardson, California 62639
                            </div>
                            <button type="button" class="btn bg-white border-0 shadow me-2">
                                <i class="bi bi-broadcast"></i>
                            </button>
                            <button type="button" class="btn bg-white border-0 shadow" @click="statusController">
                                <i class="bi bi-lightbulb-fill" style="color: #34c38f;" v-if="status === false"></i>
                                <i class="bi bi-lightbulb-off-fill" style="color: #f46a6a;" v-if="status === true"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bg-white w-100 p-0 p-sm-4">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="p-3 border rounded-3">
                                <div class="fw-semibold text-secondary mb-2">Total sales:</div>
                                <div class="text-theme mb-2">238</div>
                                <div class="fw-semibold text-secondary mb-2">Revenue:</div>
                                <div class="text-theme mb-2">$2380</div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="p-3">
                                        <div class="fw-semibold mb-2">Contacts</div>
                                        <div class="text-secondary">Manager: Jerome Bell</div>
                                        <div class="text-secondary">info@example.com</div>
                                        <div class="text-secondary">(229) 555-0109, (808) 555-0111</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="p-3">
                                        <div class="fw-semibold mb-2">Address</div>
                                        <div class="text-secondary">Country: California</div>
                                        <div class="text-secondary">Address: Ranchview Dr. Richardson</div>
                                        <div class="text-secondary">Postal code: 62639</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="mt-4">
                <div class="bg-white shadow rounded-3 p-4 cursor-content-menu">
                    <div class="d-md-flex justify-content-between align-items-center">
                        <div class="mb-3 w-100">
                            <div class="position-relative">
                                <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                                    <i class="bi bi-search"></i>
                                </div>
                                <input type="text" name="keyword" class="form-control ps-5" required autocomplete="new-search" placeholder="Search Here">
                            </div>
                        </div>
                        <router-link :to="{name: 'order'}" class="fs-6 w-100 d-block fw-semibold mb-3 text-end text-theme text-decoration-none">
                            Latest Order
                        </router-link>
                    </div>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="checkbox">
                                        <input type="checkbox" class="form-check-input">
                                    </th>
                                    <th class="id">
                                        Order Id.
                                    </th>
                                    <th class="default-width">
                                        Customer Name.
                                    </th>
                                    <th class="default-width">
                                        Date.
                                    </th>
                                    <th class="default-width">
                                        Total.
                                    </th>
                                    <th class="default-width">
                                        Payment Status.
                                    </th>
                                    <th class="default-width">
                                        Payment Method.
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="each in orderTable">
                                    <td class="checkbox">
                                        <input type="checkbox" class="form-check-input">
                                    </td>
                                    <td class="id">
                                        {{each.id}}
                                    </td>
                                    <td class="default-width">
                                        {{each.name}}
                                    </td>
                                    <td class="default-width">
                                        {{each.date}}
                                    </td>
                                    <td class="default-width">
                                        {{each.total}}
                                    </td>
                                    <td class="default-width">
                                        <span class="badge px-3 py-2" :style="`background-color: `+each.backgroundColor +`; color:` +each.color">
                                            {{each.status}}
                                        </span>
                                    </td>
                                    <td class="default-width">
                                        {{each.payment_method}}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

<script>

export default {

    data(){

        return{
            status: false,
            orderTable: [
                { id: '#SK2540', name: 'Neal Matthews', date: '07 Oct, 2021', total: '$400', status: 'Paid', backgroundColor: '#34C38F2D', color: '#34c38f', payment_method: 'Mastercard' },
                { id: '#SK2541', name: 'Jamal Burnett', date: '07 Oct, 2021', total: '$380', status: 'Chargeback', backgroundColor: '#F46A6A2D', color: '#f46a6a', payment_method: 'Visa' },
                { id: '#SK2542', name: 'Juan Mitchell', date: '06 Oct, 2021', total: '$384', status: 'Paid', backgroundColor: '#34C38F2D', color: '#34c38f', payment_method: 'Paypal' },
                { id: '#SK2543', name: 'Barry Dick', date: '05 Oct, 2021', total: '$412', status: 'Paid', backgroundColor: '#34C38F2D', color: '#34c38f', payment_method: 'Mastercard' },
                { id: '#SK2544', name: 'Ronald Taylor', date: '04 Oct, 2021', total: '$404', status: 'Refund', backgroundColor: '#F1B44C2D', color:'#f1b44c', payment_method: 'Visa' },
                { id: '#SK2545', name: 'Jacob Hunter', date: '04 Oct, 2021', total: '$392', status: 'Paid', backgroundColor: '#34C38F2D', color: '#34c38f', payment_method: 'Paypal' },
            ],
        }

    },

    mounted() {
        this.tooltips();
    },

    methods: {

        statusController() {
            this.status = !this.status
        },

        tooltips() {
            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
            const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        }

    }

}

</script>
