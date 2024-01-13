<template>

    <div class="col-12 col-lg-8">
        <div class="p-3">
            <form class="bg-white rounded-3 shadow p-4">
                <div class="mb-3">
                    <label for="full-name" class="form-label">Full Name</label>
                    <input id="full-name" type="text" name="full-name" class="form-control" required autocomplete="new-full-name">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" type="email" name="email" class="form-control" required autocomplete="new-email">
                </div>
                <div class="mb-3">
                    <label for="phone-number" class="form-label">Phone number</label>
                    <input id="phone-number" type="text" name="phone-number" class="form-control" required autocomplete="new-phone-number">
                </div>
                <div class="mb-3">
                    <label for="select-gender" class="form-label">Select Gender [ Default ]</label>
                    <select name="select-gender" id="select-gender" class="form-select">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="children">Children</option>
                        <option value="other">Others</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="select-country" class="form-label">Select Country [ Default ]</label>
                    <select name="select-country" id="select-country" class="form-select">
                        <option value="bangladesh">Bangladesh</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="select-language" class="form-label">Select Language [ Default ]</label>
                    <select name="select-language" id="select-language" class="form-select">
                        <option value="english">English</option>
                        <option value="bangla">Bangla</option>
                    </select>
                </div>
                <button type="submit" name="" class="btn btn-theme w-100">
                    SUBMIT
                </button>
            </form>
        </div>

        <div class="p-3">
            <form class="bg-white rounded-3 shadow p-4">
                <div class="mb-3">
                    <label for="current-password" class="form-label">Current Password</label>
                    <input id="current-password" type="text" name="current_password" class="form-control" required autocomplete="current-password">
                </div>
                <div class="mb-3">
                    <label for="new-password" class="form-label">Password</label>
                    <input id="new-password" type="text" name="new_password" class="form-control" required autocomplete="new-password">
                </div>
                <div class="mb-3">
                    <label for="confirm-password" class="form-label">Confirm Password</label>
                    <input id="confirm-password" type="text" name="confirm_password" class="form-control" required autocomplete="new-confirm-password">
                </div>
                <button type="submit" class="btn btn-theme w-100">
                    SUBMIT
                </button>
            </form>
        </div>

    </div>

</template>

<script>

export default {

    data(){

        return{  }

    },

    mounted() {  },

    methods: {  }

}

</script>
