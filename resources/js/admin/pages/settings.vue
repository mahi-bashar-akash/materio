<template>

    <div class="bg-white rounded-3 p-3 p-md-5 shadow mb-4 cursor-content-menu">
        <form>
            <div class="fs-5 fw-semibold mb-4">Edit Profile</div>
            <div class="row">
                <div class="mb-3 col-lg-6">
                    <div class="form-group">
                        <label for="full-name" class="form-label">Full name</label>
                        <input id="full-name" type="text" name="full-name" value="Mahi Bashar Akash" class="form-control" required autocomplete="new-full-name">
                    </div>
                </div>
                <div class="mb-3 col-lg-6">
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" type="email" name="email" value="mahibashar2023@gmail.com" class="form-control" required autocomplete="new-email">
                    </div>
                </div>
                <div class="mb-3 col-lg-6">
                    <div class="form-group">
                        <label for="organization-name" class="form-label">Organization name</label>
                        <input id="organization-name" type="text" name="organization-name" value="Materio" class="form-control" required autocomplete="new-organization-name">
                    </div>
                </div>
                <div class="mb-3 col-lg-6">
                    <div class="form-group">
                        <label for="phone-number" class="form-label">Phone number</label>
                        <input id="phone-number" type="text" name="phone-number" value="+880 01645820007" class="form-control" required autocomplete="new-phone-number">
                    </div>
                </div>
                <div class="mb-3 col-lg-6">
                    <div class="form-group">
                        <label for="language" class="form-label">Language</label>
                        <select name="language" id="language" class="form-select">
                            <option value="">English</option>
                            <option value="">Spanish</option>
                            <option value="">Arabic</option>
                            <option value="">Hindi</option>
                            <option value="">Japanese</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3 col-lg-6">
                    <div class="form-group">
                        <label for="currency" class="form-label">Currency</label>
                        <select name="currency" id="currency" class="form-select">
                            <option value="">USD</option>
                            <option value="">EUR</option>
                            <option value="">GBP</option>
                            <option value="">AUD</option>
                            <option value="">BRL</option>
                            <option value="">CAD</option>
                            <option value="">CNY</option>
                            <option value="">CZK</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3 col-lg-6">
                    <div class="form-group">
                        <label for="tax" class="form-label">Tax</label>
                        <select name="tax" id="tax" class="form-select">
                            <option value="">0%</option>
                            <option value="">1%</option>
                            <option value="">2%</option>
                            <option value="">3%</option>
                            <option value="">4%</option>
                            <option value="">5%</option>
                            <option value="">6%</option>
                            <option value="">7%</option>
                            <option value="">8%</option>
                            <option value="">9%</option>
                            <option value="">10%</option>
                            <option value="">11%</option>
                            <option value="">12%</option>
                            <option value="">13%</option>
                            <option value="">14%</option>
                            <option value="">15%</option>
                            <option value="">16%</option>
                            <option value="">17%</option>
                            <option value="">18%</option>
                            <option value="">19%</option>
                            <option value="">20%</option>
                            <option value="">21%</option>
                            <option value="">22%</option>
                            <option value="">23%</option>
                            <option value="">24%</option>
                            <option value="">25%</option>
                            <option value="">26%</option>
                            <option value="">27%</option>
                            <option value="">28%</option>
                            <option value="">29%</option>
                            <option value="">30%</option>
                            <option value="">31%</option>
                            <option value="">32%</option>
                            <option value="">33%</option>
                            <option value="">34%</option>
                            <option value="">35%</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3 d-flex justify-content-start align-items-center flex-wrap">
                    <button type="submit" class="btn btn-theme px-4 me-2">
                        SUBMIT
                    </button>
                    <button type="button" class="btn btn-light border px-4">
                        RESET
                    </button>
                </div>
            </div>
        </form>
    </div>

    <div class="bg-white rounded-3 p-3 p-md-5 shadow mb-4 cursor-content-menu">
        <form>
            <div class="fs-5 fw-semibold mb-4">Delete Account</div>
            <label for="delete-account" class="form-label mb-3 d-block">
                <input id="delete-account" type="checkbox" name="delete-account" class="form-check-input" v-model="isConfirmed" required>
                I confirm my account deactivation
            </label>
            <button type="submit" class="btn btn-danger px-4" :disabled="!isConfirmed">
                DEACTIVATE ACCOUNT
            </button>
        </form>
    </div>

</template>

<script>

export default {

    data(){

        return{
            isConfirmed: false,
        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>
