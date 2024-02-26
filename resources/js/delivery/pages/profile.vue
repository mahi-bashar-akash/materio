<template>

    <div class="row justify-content-center">
        <div class="col-lg-3 p-3">
            <div class="p-3 bg-white shadow rounded-4">

                <!-- avatar control -->
                <div class="p-4 d-flex justify-content-center align-items-center flex-column">
                    <label for="avatar" class="form-label wpx-175 hpx-175 d-flex justify-content-center align-items-center shadow rounded-circle cursor-pointer" v-if="!url">
                        <input id="avatar" type="file" name="upload-image" class="d-none" accept="image/png, image/gif, image/jpeg" @change="onFileChange">
                        <i class="bi bi-person-fill font-50 text-theme"></i>
                    </label>
                    <div class="wpx-175 hpx-175 position-relative" v-if="url">
                        <img :src="url" class="img-fluid object-fit-cover wpx-175 hpx-175 rounded-circle" alt="avatar">
                        <div class="position-absolute bottom-0 end-0 translate-middle-y cursor-pointer bg-light shadow wpx-35 hpx-35 d-flex justify-content-center align-items-center rounded-circle" @click="url = null">
                            <i class="bi bi-trash2-fill text-danger"></i>
                        </div>
                    </div>
                </div>

                <div class="font-14 py-3">

                    <!-- full name -->
                    <div class="mt-3">
                        <div class="mb-2 fw-semibold">Full Name</div>
                        <div class="text-secondary">Mahi Bashar Akash</div>
                    </div>

                    <!-- contact -->
                    <div class="mt-3">
                        <div class="mb-2 fw-semibold">Contact</div>
                        <div class="text-secondary">+880 01645820007</div>
                    </div>

                    <!-- email -->
                    <div class="mt-3">
                        <div class="mb-2 fw-semibold">Email</div>
                        <div class="text-secondary">mahibashar2023@gmail.com</div>
                    </div>

                    <!-- country -->
                    <div class="mt-3">
                        <div class="mb-2 fw-semibold">Selected Country</div>
                        <div class="text-secondary">Bangladesh</div>
                    </div>

                    <!-- language -->
                    <div class="mt-3">
                        <div class="mb-2 fw-semibold">Selected Language</div>
                        <div class="text-secondary">English</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 p-3 font-14">

            <!-- group button -->
            <div class="d-flex justify-content-start align-items-center flex-wrap">
                <button type="button" class="btn mb-3 me-2" :class="{ 'btn-light-theme': tab !== 1, 'btn-theme': tab === 1 }" @click="setTab(1)">
                    Edit Profile
                </button>
                <button type="button" class="btn mb-3 me-2" :class="{ 'btn-light-theme': tab !== 2, 'btn-theme': tab === 2 }" @click="setTab(2)">
                    Edit Password
                </button>
                <button type="button" class="btn mb-3" :class="{ 'btn-light-theme': tab !== 3, 'btn-theme': tab === 3 }" @click="setTab(3)">
                    Edit Necessary Info
                </button>
            </div>

            <form class="p-4 bg-white shadow rounded-4" v-if="tab === 1">

                <!-- Edit Profile -->

                <div class="form-group mb-3">
                    <label for="full-name" class="form-label">Full Name</label>
                    <input type="text" name="full-name" class="form-control" required autocomplete="new-full-name" v-model="profileEditParam.fullName">
                </div>
                <div class="form-group mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" name="email" class="form-control" required autocomplete="new-email" v-model="profileEditParam.email">
                </div>
                <div class="form-group mb-3">
                    <label for="contact" class="form-label">Contact</label>
                    <input type="text" name="contact" class="form-control" required autocomplete="new-contact" v-model="profileEditParam.contact">
                </div>
                <div class="form-group mb-3">
                    <label for="country" class="form-label">Select Country</label>
                    <select name="country" class="form-select" id="country" required autocomplete="new-country" v-model="profileEditParam.country">
                        <option value="bangladesh">Bangladesh</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label for="language" class="form-label">Select Language</label>
                    <select name="language" class="form-select" id="language" required autocomplete="new-language" v-model="profileEditParam.language">
                        <option value="english">English</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-theme">
                    Update Profile
                </button>
            </form>

            <form class="p-4 bg-white shadow rounded-4" v-if="tab === 2">

                <!-- Edit Password -->

                <div class="form-group mb-3">
                    <label for="current-password" class="form-label">Current Password</label>
                    <div class="position-relative">
                        <input id="current-password" :type="currentPasswordFieldType" name="password" class="form-control" v-model="passwordParam.currentPassword" placeholder="Enter your current password" required autocomplete="new-current-password">
                        <div class="me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer" @click="currentPasswordVisibility">
                            <i class="bi bi-eye" v-if="currentPasswordFieldType === 'text'"></i>
                            <i class="bi bi-eye-slash" v-if="currentPasswordFieldType === 'password'"></i>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="password" class="form-label">Password</label>
                    <div class="position-relative">
                        <input id="password" :type="passwordFieldType" name="password" class="form-control" v-model="passwordParam.password" placeholder="Enter your password" required autocomplete="new-password">
                        <div class="me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer" @click="passwordVisibility">
                            <i class="bi bi-eye" v-if="passwordFieldType === 'text'"></i>
                            <i class="bi bi-eye-slash" v-if="passwordFieldType === 'password'"></i>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="password-confirm" class="form-label">Password confirm</label>
                    <div class="position-relative">
                        <input id="password-confirm" :type="passwordConfirmationFieldType" name="password0confirm" v-model="passwordParam.passwordConfirm" class="form-control" placeholder="Enter your confirm password" required autocomplete="new-confirm-password">
                        <div class="me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer" @click="passwordConfirmVisibility">
                            <i class="bi bi-eye" v-if="passwordConfirmationFieldType === 'text'"></i>
                            <i class="bi bi-eye-slash" v-if="passwordConfirmationFieldType === 'password'"></i>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-theme">
                    Update Password
                </button>
            </form>

            <form class="p-4 bg-white shadow rounded-4" v-if="tab === 3">

                <!-- Edit Necessary -->

                <div class="form-group mb-3">
                    <label for="vehicles-type" class="form-label">Select vehicles</label>
                    <select name="vehicles-type" class="form-select" id="vehicles-type" v-model="necessaryParam.vehiclesType" required autocomplete="new-select-vehicles">
                        <option value="1">Bicycle</option>
                        <option value="2">Bike</option>
                        <option value="3">Small Truck</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label for="area-location" class="form-label">Area location</label>
                    <select name="area-location" id="area-location" class="form-select" v-model="necessaryParam.areaLocation" required autocomplete="new-area-location">
                        <option value="chittagong">Chittagong</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="rajshahi">Rajshahi</option>
                        <option value="sylhet">Sylhet</option>
                        <option value="mymensingh">Mymensingh</option>
                        <option value="barisal">Barisal</option>
                        <option value="rangpur">Rangpur</option>
                        <option value="khulna">Khulna</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label for="vehicle-license" class="form-label">Vehicle license</label>
                    <input id="vehicle-license" type="text" class="form-control" v-model="necessaryParam.vehicleLicense" placeholder="Enter your vehicle license" required autocomplete="new-Vehicle-license">
                </div>
                <div class="form-group mb-3">
                    <label for="organization-license" class="form-label">Organization license prove</label>
                    <label for="license-avatar" id="organization-license" class="w-100 bg-white border hpx-175 d-flex justify-content-center align-items-center flex-column rounded-3 cursor-pointer text-theme" v-if="!necessaryParam.licenseUrl">
                        <input id="license-avatar" type="file" name="organization-avatar" class="d-none" @change="onFileChangeLicenseUrl($event)">
                        <i class="bi bi-clouds-fill font-50"></i>
                        Upload picture
                    </label>
                    <div class="position-relative" v-if="necessaryParam.licenseUrl">
                        <img :src="necessaryParam.licenseUrl" class="w-100 bg-white border hpx-175 rounded-3"/>
                        <div class="position-absolute top-50 start-50 translate-middle">
                            <button type="button" class="btn bg-white d-flex justify-content-center border-0 align-items-center shadow wpx-45 hpx-45" @click="necessaryParam.licenseUrl = null">
                                <i class="bi bi-trash2 text-danger"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-theme">
                    Update Necessary Info
                </button>
            </form>

        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{
            /* Data properties for the component */
            url: null,
            profileEditParam: {
                fullName: 'Mahi Bashar Akash',
                email: 'mahibasbar2023@gmail.com',
                contact: '+880 01645820007',
                country: 'bangladesh',
                language: 'english',
            },
            passwordParam: {
                currentPassword: '',
                password: '',
                passwordConfirm: '',
            },
            necessaryParam: {
                vehiclesType: '1',
                areaLocation: 'dhaka',
                vehicleLicense: '',
                licenseUrl: null,
            },
            tab: 1,
            password: '',
            passwordFieldType: 'password',
            passwordConfirmationFieldType: 'password',
            currentPasswordFieldType: 'password',
        }

    },

    mounted() {  },

    methods: {

        /* Function to on file change for user avatar */
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },

        /* Function to on file change for lisense */
        onFileChangeLicenseUrl(e) {
            const licenseUrlFile = e.target.files[0];
            this.necessaryParam.licenseUrl = URL.createObjectURL(licenseUrlFile);
        },

        /* Function to set tab to change */
        setTab(tab){
            this.tab = tab
        },

        /* Function to current password visibility */
        currentPasswordVisibility() {
            this.currentPasswordFieldType = this.currentPasswordFieldType === "password" ? "text" : "password";
        },

        /* Function to password visibility */
        passwordVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },

        /* Function to password confirm visibility */
        passwordConfirmVisibility() {
            this.passwordConfirmationFieldType = this.passwordConfirmationFieldType === "password" ? "text" : "password";
        },

    }

}

</script>
