<template>

    <div class="col-12 col-lg-8">
        <div class="px-3">

            <!-- customer profile update form -->
            <form class="bg-white rounded-3 shadow p-4">
                <div class="mb-3">
                    <div class="fs-5 fw-semibold">
                        Edit Profile
                    </div>
                </div>
                <div class="mb-3">
                    <label for="full-name" class="form-label">Full Name</label>
                    <input id="full-name" type="text" name="full-name" class="form-control" placeholder="Enter your full name" required autocomplete="new-full-name" v-model="profileEditData.fullName">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" type="email" name="email" class="form-control" placeholder="Enter your email" required autocomplete="new-email" v-model="profileEditData.email">
                </div>
                <div class="mb-3">
                    <label for="phone-number" class="form-label">Phone number</label>
                    <input id="phone-number" type="text" name="phone-number" class="form-control" placeholder="Enter your phone number" required autocomplete="new-phone-number" v-model="profileEditData.phoneNumber">
                </div>
                <div class="mb-3">
                    <label for="select-gender" class="form-label">Select Gender</label>
                    <select name="select-gender" id="select-gender" class="form-select" v-model="profileEditData.gender">
                        <option value="select-gender">Select Gender Option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="children">Children</option>
                        <option value="other">Others</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="select-country" class="form-label">Select Country</label>
                    <select name="select-country" id="select-country" class="form-select" v-model="profileEditData.country">
                        <option value="select-country">Select Country Option</option>
                        <option value="bangladesh">Bangladesh</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="select-language" class="form-label">Select Language</label>
                    <select name="select-language" id="select-language" class="form-select" v-model="profileEditData.language">
                        <option value="select-language">Select Language Option</option>
                        <option value="english">English</option>
                        <option value="bangla">Bangla</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-theme w-100">
                    Update Profile
                </button>
            </form>
        </div>

        <div class="p-3">

            <!-- customer password update form -->
            <form class="bg-white rounded-3 shadow p-4">
                <div class="mb-3">
                    <div class="fs-5 fw-semibold">
                        Edit Password
                    </div>
                </div>
                <div class="mb-3">
                    <label for="current-password" class="form-label">Current Password</label>
                    <input id="current-password" type="text" name="current_password" class="form-control" placeholder="Enter your current password" required autocomplete="current-password" v-model="passwordEditData.currentPassword">
                </div>
                <div class="mb-3">
                    <label for="new-password" class="form-label">Password</label>
                    <input id="new-password" type="text" name="new_password" class="form-control" placeholder="Enter your new password" required autocomplete="new-password" v-model="passwordEditData.newPassword">
                </div>
                <div class="mb-3">
                    <label for="confirm-password" class="form-label">Confirm Password</label>
                    <input id="confirm-password" type="text" name="confirm_password" class="form-control" placeholder="Enter your new confirm password" required autocomplete="new-confirm-password" v-model="passwordEditData.confirmPassword">
                </div>
                <button type="submit" class="btn btn-theme w-100">
                    Update Password
                </button>
            </form>

        </div>

    </div>

</template>

<script>

export default {

    data(){

        return{
            profileEditData: {
                fullName: 'Mahi Bashar Akash',
                email: 'mahibashar2023@gmail.com',
                phoneNumber: '01400125289',
                gender: 'male',
                country: 'bangladesh',
                language: 'english',
            },

            passwordEditData: {
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
            }
        }

    },

    mounted() {  },

    methods: {  }

}

</script>
