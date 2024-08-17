<template>

    <!-- search -->
    <div class="p-3">
        <div class="row">
            <div class="col-md-6 mb-3">
                <div class="position-relative">
                    <input type="text" name="keyword" class="form-control ps-5" placeholder="Search Here" required
                           autoComplete="new-search">
                    <div class="position-absolute top-50 start-0 ps-1 translate-middle-y">
                        <i class="ps-3 bi bi-search"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- order list -->
    <div class="customer-card-body bg-white border rounded-2 p-3 cursor-content-menu">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th class="checkbox">
                            <input type="checkbox" name="checkbox" class="form-checkbox">
                        </th>
                        <th class="id">
                            <button type="button" class="border-0 bg-transparent p-0 fw-bold">
                                <i class="bi bi-caret-down-fill me-1"></i>
                                Id.
                            </button>
                        </th>
                        <th class="name">
                            <button type="button" class="border-0 bg-transparent p-0 fw-bold">
                                <i class="bi bi-caret-down-fill me-1"></i>
                                Customer Name.
                            </button>
                        </th>
                        <th class="default-width">
                            <button type="button" class="border-0 bg-transparent p-0 fw-bold">
                                <i class="bi bi-caret-down-fill me-1"></i>
                                Order Name.
                            </button>
                        </th>
                        <th class="default-width">
                            <button type="button" class="border-0 bg-transparent p-0 fw-bold">
                                <i class="bi bi-caret-down-fill me-1"></i>
                                Price * Quantity
                            </button>
                        </th>
                        <th class="default-width">
                            <button type="button" class="border-0 bg-transparent p-0 fw-bold">
                                <i class="bi bi-caret-down-fill me-1"></i>
                                SubTotal
                            </button>
                        </th>
                        <th class="status">
                            <button type="button" class="border-0 bg-transparent p-0 fw-bold">
                                <i class="bi bi-caret-down-fill me-1"></i>
                                Status
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="each in customerOrderTable">
                        <td class="checkbox">
                            <input type="checkbox" name="checkbox" class="form-checkbox">
                        </td>
                        <td class="id">
                            {{ each.id }}
                        </td>
                        <td class="name">
                            <div class="d-flex align-items-center justify-content-start">
                                <img :src="each.avatar" class="img-fluid me-2 face" alt="avatar">
                                {{ each.name }}
                            </div>
                        </td>
                        <td class="default-width">
                            {{each.orderItem}}
                        </td>
                        <td class="default-width">
                            ${{each.price}} * {{each.quantity}}
                        </td>
                        <td class="default-width">
                            ${{each.price * each.quantity}}
                        </td>
                        <td class="default-width">
                            <select name="orderStatus" class="form-select" v-model="each.orderStatus">
                                <option value="1">Pending</option>
                                <option value="2">Processing</option>
                                <option value="3">Shipped</option>
                                <option value="4">Delivered</option>
                                <option value="5">Undelivered</option>
                                <option value="6">Returned</option>
                                <option value="7">Cancelled</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>

export default {

    data() {

        return {
            /* Data properties for the component */
            customerOrderTable: [
                { id: '1', avatar: '/images/clients/face-1.png', name: 'Andrew Burns', orderItem: 'product name', price: '5', quantity: '1', orderStatus: '1' },
                { id: '2', avatar: '/images/clients/face-2.png', name: 'Dana Carey', orderItem: 'product name', price: '10', quantity: '2', orderStatus: '1' },
                { id: '3', avatar: '/images/clients/face-3.png', name: 'Tammy Sanchez', orderItem: 'product name', price: '15', quantity: '3', orderStatus: '1' },
                { id: '4', avatar: '/images/clients/face-4.png', name: 'Lori Wells', orderItem: 'product name', price: '20', quantity: '4', orderStatus: '1' },
                { id: '5', avatar: '/images/clients/face-5.png', name: 'Richard Payne', orderItem: 'product name', price: '25', quantity: '5', orderStatus: '1' },
                { id: '6', avatar: '/images/clients/face-6.png', name: 'Jennifer Summers', orderItem: 'product name', price: '30', quantity: '4', orderStatus: '1' },
                { id: '7', avatar: '/images/clients/face-4.png', name: 'Justin Richardson', orderItem: 'product name', price: '35', quantity: '3', orderStatus: '1' },
                { id: '8', avatar: '/images/clients/face-2.png', name: 'Hossain Doe', orderItem: 'product name', price: '40', quantity: '2', orderStatus: '1' },
            ],
        }

    },

    mounted() {  },

    methods: {  }

}

</script>
