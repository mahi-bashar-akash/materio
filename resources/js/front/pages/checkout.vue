<template>

    <div class="container py-5">
        <form class="row" autocomplete="off">
            <div class="col-lg-6">
                <div class="bg-white p-4 shadow rounded-3">
                    <div class="mb-3 fs-4 fw-semibold">
                        Customer information
                    </div>
                    <div class="row">
                        <div class="form-group mb-3 col-md-6">
                            <label for="name" class="form-label">Name</label>
                            <input id="name" type="text" name="name" class="form-control" required autocomplete="new-name" placeholder="Enter your name">
                        </div>
                        <div class="form-group mb-3 col-md-6">
                            <label for="email" class="form-label">Email</label>
                            <input id="email" type="email" name="email" class="form-control" required autocomplete="new-email" placeholder="Enter your email">
                        </div>
                        <div class="form-group mb-3 col-md-6">
                            <label for="address" class="form-label">Address</label>
                            <input id="address" type="text" name="address" class="form-control" required autocomplete="new-address" placeholder="Enter your address">
                        </div>
                        <div class="form-group mb-3 col-md-6">
                            <label for="mobile" class="form-label">Phone number</label>
                            <input id="mobile" @keypress="checkNumber($event)" type="text" name="mobile" class="form-control" required autocomplete="new-phone-number" placeholder="Enter your phone number">
                        </div>
                        <div class="form-group mb-3 col-md-6">
                            <label for="city" class="form-label">City</label>
                            <input id="city" type="text" name="city" class="form-control" required autocomplete="new-city" placeholder="Enter your city">
                        </div>
                        <div class="form-group mb-3 col-md-6">
                            <label for="zone" class="form-label">Zone</label>
                            <input id="zone" type="text" name="zone" class="form-control" required autocomplete="new-zone" placeholder="Enter your zone">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="comment" class="form-label">Comment</label>
                            <textarea name="comment" id="comment" class="form-textarea" cols="30" rows="5" required autocomplete="new-comment" placeholder="Enter your comment"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="bg-white rounded-3 p-3 shadow mb-3">
                    <div class="mb-3 fw-semibold fs-4">
                        Payment Method
                    </div>
                    <div class="mb-3">
                        Select a payment method
                    </div>
                    <label for="cash-on-delivery" class="form-label d-flex align-items-center mb-3 cursor-pointer">
                        <input id="cash-on-delivery" type="radio" name="payment-method" class="form-radio me-2">
                        Cash on delivery
                    </label>
                    <label for="online-payment" class="form-label d-flex align-items-center mb-3 cursor-pointer">
                        <input id="online-payment" type="radio" name="payment-method" class="form-radio me-2">
                        Online payment
                    </label>
                    <label for="pos-on-delivery" class="form-label d-flex align-items-center mb-3 cursor-pointer">
                        <input id="pos-on-delivery" type="radio" name="payment-method" class="form-radio me-2">
                        POS on Delivery
                    </label>
                </div>

                <div class="bg-white rounded-3 p-3 shadow mb-3">
                    <div class="mb-3 fw-semibold fs-4">
                        Delivery Method
                    </div>
                    <div class="mb-3">
                        Select a delivery method
                    </div>
                    <label for="home-delivery" class="form-label d-flex align-items-center mb-3 cursor-pointer">
                        <input id="home-delivery" type="radio" name="delivery-system" class="form-radio me-2">
                        Home Delivery - 60৳
                    </label>
                    <label for="stock-pic-delivery" class="form-label d-flex align-items-center mb-3 cursor-pointer">
                        <input id="stock-pic-delivery" type="radio" name="delivery-system" class="form-radio me-2">
                        Store Pickup - 0৳
                    </label>
                    <label for="request-express-charge-applicable" class="form-label d-flex align-items-center mb-3 cursor-pointer">
                        <input id="request-express-charge-applicable" type="radio" name="delivery-system" class="form-radio me-2">
                        Request Express - Charge Applicable
                    </label>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="bg-white rounded-3 p-3 shadow mb-3">
                            <div class="form-group">
                                <input type="text" name="apply-voucher" class="form-control mb-3" placeholder="Enter gift voucher">
                                <button type="button" class="btn btn-outline-theme w-100">
                                    Apply Voucher
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="bg-white rounded-3 p-3 shadow mb-3">
                            <div class="form-group">
                                <input type="text" name="promo-code" class="form-control mb-3" placeholder="Enter promo/coupon code">
                                <button type="button" class="btn btn-outline-theme w-100">
                                    Apply Coupon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-theme">
                    Confirm Order
                </button>
            </div>
        </form>
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

        /* Function to check number */
        checkNumber(e) {
            let theEvent = e || window.event;
            let key;
            if (theEvent.type === 'paste') {
                key = event.clipboardData.getData('text/plain');
            } else {
                key = theEvent.keyCode || theEvent.which;
                key = String.fromCharCode(key);
            }
            const regex = /^\d*$/;
            if (!regex.test(key)) {
                theEvent.returnValue = false;
                if (theEvent.preventDefault) theEvent.preventDefault();
            }
        },

    }

}

</script>
