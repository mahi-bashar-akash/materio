<template>

    <!-- invoice manage form action -->
    <form class="invoice-wrapper">
        <div class="row justify-content-center">

            <!-- invoice manage content -->
            <div class="invoice-manage-content bg-white shadow p-3 p-md-5 rounded-3">
                <div class="row">
                    <div class="col-md-7 p-3">

                        <!-- admin company details -->
                        <div class="company-details">
                            <div class="d-flex justify-content-start align-items-center fs-4">
                                <img :src="`/images/svg/logo.svg`" class="img-fluid me-3 wpx-45 hpx-45" alt="logo">
                                {{app_name}}
                            </div>
                            <div class="col-12 col-sm-10 col-md-8 col-lg-5 mt-3 text-secondary">
                                Office 149, 450 South Brand Brooklyn
                                San Diego County, CA 91905, USA
                                +1 (123) 456 7891, +44 (876) 543 2198
                            </div>
                        </div>

                    </div>

                    <!-- invoice id with date input -->
                    <div class="col-md-5 p-3">
                        <div class="input-group input-group-sm mb-2 row">
                            <span class="input-group-text col-6 col-xl-4" id="inputGroup-sizing-sm">Invoice</span>
                            <input type="text" name="invoiceNo" v-model="invoiceParam.invoiceNo" class="form-control col-6 col-xl-8 text-secondary text-opacity-75" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-2 row">
                            <span class="input-group-text col-6 col-xl-4" id="inputGroup-sizing-sm">Date Issued</span>
                            <input type="text" name="dateIssue" v-model="invoiceParam.dateIssue" class="form-control col-6 col-xl-8" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-2 row">
                            <span class="input-group-text col-6 col-xl-4" id="inputGroup-sizing-sm">Due Date</span>
                            <input type="text" name="dueDate" v-model="invoiceParam.dueDate" class="form-control col-6 col-xl-8" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </div>
                </div>
                <hr class="border">
                <div class="row">
                    <div class="col-md-6 p-3">

                        <!-- select client -->
                        <div class="form-group">
                            <select name="client" class="form-select" autocomplete="new-client" v-model="invoiceParam.client">
                                <option value="select-client">Select Client</option>
                                <option value="">Dana Carey</option>
                                <option value="">Tammy Sanchez</option>
                                <option value="">Lori Wells</option>
                                <option value="">Richard Payne</option>
                                <option value="">Jennifer Summers</option>
                                <option value="">Justin Richardson</option>
                                <option value="">Nicholas Tanner</option>
                                <option value="">Crystal Mays</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 p-3">

                        <!-- bill to selected client -->
                        <div class="h6 fw-semibold">Bill to:</div>
                        <div class="row">
                            <div class="col-6 p-2">
                                Total Due:
                            </div>
                            <div class="col-6 p-2">
                                $12,110.55
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 p-2">
                                Bank Name:
                            </div>
                            <div class="col-6 p-2">
                                American Bank
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 p-2">
                                Country:
                            </div>
                            <div class="col-6 p-2">
                                United States
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 p-2">
                                IBAN:
                            </div>
                            <div class="col-6 p-2">
                                ETD95476213874685
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 p-2">
                                SWIFT Code:
                            </div>
                            <div class="col-6 p-2">
                                BR91905
                            </div>
                        </div>

                    </div>
                </div>
                <hr class="border">

                <!-- multiple service list -->
                <div class="row" v-for="(each, index) in multipleParam.services" :class="{ 'border-bottom' : this.multipleParam.services.length > 1}">
                    <div class="col-12 col-sm-6 col-md-6 col-xl-4 p-3">
                        <div class="mb-3">
                            <div class="form-group">
                                <select name="serviceCategory" class="form-select" v-model="each.serviceCategory" autocomplete="new-category" required>
                                    <option value="">App Design</option>
                                    <option value="">App Development</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea name="serviceDescription" class="form-textarea" v-model="each.serviceDescription" placeholder="Description" cols="30" rows="5" required autocomplete="new-description"></textarea>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-xl-4 p-3">
                        <div class="mb-3">
                            <div class="form-group">
                                <input type="text" name="serviceCost" class="form-control" v-model="each.serviceCost" placeholder="Amount of cost" required>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <input type="text" name="serviceHour" class="form-control" v-model="each.serviceHour" placeholder="Amount of hour" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-xl-4 p-3">
                        <div class="mb-3">
                            <div class="form-group">
                                <input type="text" name="serviceTotal" v-model="each.serviceTotal" class="form-control" placeholder="Amount of total" required>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <select name="serviceDiscount" class="form-select" v-model="each.serviceDiscount" required>
                                    <option value="">Select Discount</option>
                                    <option value="">0%</option>
                                    <option value="">5%</option>
                                    <option value="">10%</option>
                                    <option value="">15%</option>
                                    <option value="">20%</option>
                                    <option value="">25%</option>
                                </select>
                            </div>
                        </div>

                        <!-- list remove action -->
                        <a href="javascript:void(0)" class="btn btn-danger h-auto" @click="removeService(index)" v-if="this.multipleParam.services.length > 1">
                            Remove
                        </a>
                    </div>
                </div>

                <!-- new list add action -->
                <button type="button" class="btn btn-theme px-4" :class="{ 'mt-3' : this.multipleParam.services.length > 1}" @click="addService">
                    Add new line
                </button>
                <hr class="border">

                <!-- count of data subtotal discount tax as total from service list -->
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Subtotal:</td>
                            <td class="text-end">$1800</td>
                        </tr>
                        <tr>
                            <td>Discount:</td>
                            <td class="text-end">$28</td>
                        </tr>
                        <tr>
                            <td>Tax:</td>
                            <td class="text-end">21%</td>
                        </tr>
                    </tbody>
                    <tfoot class="border-top">
                        <tr>
                            <th>Total:</th>
                            <th class="text-end">$1690</th>
                        </tr>
                    </tfoot>
                </table>

                <hr class="border">

                <!-- optional notes for client -->
                <div class="mb-3">
                    <div class="form-group">
                        <label class="form-label">Notes:</label>
                        <textarea v-model="invoiceParam.notes" name="" class="form-textarea" cols="30" rows="4" required placeholder="[ Optional ] Add some notes" autocomplete="new-notes"></textarea>
                    </div>
                </div>

                <!-- invoice manage btn action -->
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-flex justify-content-start align-items-center">
                        <button type="submit" class="btn btn-theme px-4 me-2">
                            SUBMIT
                        </button>
                        <router-link :to="{name: 'invoice'}" type="button" class="btn btn-light d-flex justify-content-center border align-items-center px-4">
                            CANCEL
                        </router-link>
                    </span>
                </div>

            </div>
        </div>
    </form>

</template>

<script>

export default {

    data(){

        return{
            /* Data properties for the component */
            app_name: window.core.APP_NAME,
            multipleParam: {
                services: [
                    {
                        serviceCategory: '',
                        serviceDescription: '',
                        serviceCost: '',
                        serviceHour: '',
                        serviceDiscount: '',
                        serviceTotal: '',
                    }
                ],
            },
            invoiceParam: {
                invoiceNo: '#5304',
                dateIssue: '',
                dueDate: '',
                client: 'select-client',
                notes: '',
            }
        }

    },

    mounted() {  },

    methods: {

        /* Function to add service */
        addService() {
            this.multipleParam.services.push(
                {
                    serviceCategory: '',
                    serviceDescription: '',
                    serviceCost: '',
                    serviceHour: '',
                    serviceDiscount: '',
                    serviceTotal: '',
                }
            )
        },

        /* Function to remove service */
        removeService(index) {
            this.multipleParam.services.splice(index, 1)
        },

    }

}

</script>
