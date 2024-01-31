<template>

    <div class="my-3 d-flex justify-content-start align-items-center">
        <span class="fs-4 fw-semibold p-2">
            Cart Details
        </span>
        <span class="ms-3 d-flex justify-content-start align-items-center" v-if="cartDetails.length > 0 && selected.length > 0">
            <button type="button" class="btn-icon me-2">
                <i class="bi bi-trash2"></i>
            </button>
            <button type="button" class="btn-icon" v-if="selected.length === 1">
                <i class="bi bi-pencil-fill"></i>
            </button>
        </span>
    </div>

    <div class="bg-white shadow rounded-2 p-3 overflow-hidden cursor-content-menu">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th class="checkbox">
                            <input type="checkbox" name="" class="form-check-input" :checked="cartDetails.length > 0 && cartDetails.length === selected.length" @change="toggleCheckAll($event)">
                        </th>
                        <th class="name">
                            Name.
                        </th>
                        <th class="price text-center">
                            Price.
                        </th>
                        <th class="quantity text-center">
                            Quantity.
                        </th>
                        <th class="default-width text-center">
                            Subtotal
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="each in cartDetails">
                        <td class="checkbox">
                            <input type="checkbox" name="" class="form-check-input" :checked="CheckIfChecked(each.id)" @change="toggleCheck($event,each.id)">
                        </td>
                        <td class="name">
                            <div class="d-flex align-items-center justify-content-start">
                                <img :src="each.file_path" class="wpx-45 hpx-45 rounded-circle" alt="avatar">
                                <span class="ms-2">
                                    {{ each.name }}
                                </span>
                            </div>
                        </td>
                        <td class="price text-center">
                            ${{ each.price }}
                        </td>
                        <td class="quantity text-center">
                            {{ each.quantity }}
                        </td>
                        <td class="default-width text-center">
                            ${{ each.price * each.quantity }}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3"></th>
                        <th>
                            Amount of subtotal
                        </th>
                        <th class="text-center">
                            ${{totalAmount}}
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

    <div class="d-flex justify-content-end">
        <div class="bg-white shadow rounded-2 p-3 overflow-hidden cursor-content-menu col-lg-6 mt-3">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th class="default-width">
                            Description
                        </th>
                        <th class="default-width">
                            Amount
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="default-width">
                            Amount of subtotal
                        </td>
                        <td class="default-width">
                            ${{totalAmount}}
                        </td>
                    </tr>
                    <tr>
                        <td class="default-width">
                            shipping fees
                        </td>
                        <td class="default-width">
                            <select name="shipping-fees" class="form-select" v-model="selectedShippingFee">
                                <option value="50">Inside Country - $50</option>
                                <option value="120">Outside Country - $120</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="default-width">
                            total
                        </td>
                        <td class="default-width">
                            ${{ totalAmountWithShipping }}
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

    computed: {
        totalAmount() {
            return this.cartDetails.reduce((acc, curr) => acc + (parseInt(curr.price) * parseInt(curr.quantity)), 0);
        },
        totalAmountWithShipping() {
            return this.totalAmount + parseInt(this.selectedShippingFee);
        },
    },

    data() {

        return {
            cartDetails: [
                {id: '1', file_path: '/images/product/image-01.jpg', name: 'Product Name', price: '5', quantity: '1'},
                {id: '2', file_path: '/images/product/image-02.jpg', name: 'Product Name', price: '10', quantity: '2'},
            ],
            selectedShippingFee: 50,
            selected: [],
        }

    },

    mounted() {


    },

    methods: {

        toggleCheckAll(e) {
            if (e.target.checked) {
                this.cartDetails.forEach((v) => {
                    this.selected.push(v.id);
                });
            } else {
                this.selected = [];
            }
        },

        toggleCheck(e, id) {
            if (e.target.checked) {
                this.selected.push(id);
            } else {
                let index = this.selected.indexOf(id);
                this.selected.splice(index, 1);
            }
        },

        CheckIfChecked(id) {
            return this.selected.map(function (id) {
                return id
            }).indexOf(id) > -1;
        },

    }

}

</script>
