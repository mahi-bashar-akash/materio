<template>

    <!-- profile wrapper -->
    <div class="profile-wrapper">
        <div class="row">
            <div class="col-lg-5 col-xl-3 p-3 h-100">
                <div class="bg-white p-3 shadow rounded-3 mb-3 cursor-content-menu h-100">

                    <!-- admin -->
                    <div class="d-flex justify-content-center align-items-center flex-column mb-3">
                        <label for="avatar" class="form-label wpx-150 hpx-150 rounded-circle d-flex justify-content-center align-items-center cursor-pointer border" v-if="!url">
                            <input id="avatar" type="file" name="avatar" class="d-none" @change="onFileChange" accept="image/png, image/gif, image/jpeg">
                            <i class="bi bi-camera fs-1 text-theme"></i>
                        </label>
                        <div class="position-relative" v-if="url">
                            <img :src="url" class="img-fluid object-fit-cover wpx-150 hpx-150 rounded-circle overflow-hidden" alt="avatar">
                            <div class="position-absolute bottom-0 end-0 wpx-45 hpx-45 rounded-circle bg-white shadow d-flex justify-content-center align-items-center cursor-pointer" @click="url = null">
                                <i class="bi bi-trash2-fill text-danger"></i>
                            </div>
                        </div>
                        <div class="badge bg-success-subtle text-secondary py-2 px-4 mt-3">
                            Frontend Developer (intern)
                        </div>
                    </div>
                    <div class="font-14">
                        <div class="fw-bold mb-3"> Full name:</div>
                        <div class="text-secondary mb-3"> Mr. Mahi Bashar Akash </div>
                        <div class="fw-bold mb-3"> Contact number: </div>
                        <div class="text-secondary mb-3"> +880 01400125289 </div>
                        <div class="fw-bold mb-3"> Email: </div>
                        <div class="text-secondary mb-3"> mahibashar2023@gmail.com </div>
                        <div class="fw-bold mb-3"> Selected Country: </div>
                        <div class="text-secondary mb-3"> Bangladesh </div>
                        <div class="fw-bold mb-3"> Selected Language: </div>
                        <div class="text-secondary"> English </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-xl-9 p-3">

                <!-- button group -->
                <div class="d-flex justify-content-start align-items-center flex-wrap">
                    <button type="button" class="btn btn-light rounded-pill fw-semibold mx-1 my-2" :class="{ 'btn-light-theme': tab !== 1, 'btn-theme': tab === 1 }" @click="setTab(1)">
                        Overview
                    </button>
                    <button type="button" class="btn btn-light rounded-pill fw-semibold mx-1 my-2" :class="{ 'btn-light-theme': tab !== 2, 'btn-theme': tab === 2 }" @click="setTab(2)">
                        Security
                    </button>
                    <button type="button" class="btn btn-light rounded-pill fw-semibold mx-1 my-2" :class="{ 'btn-light-theme': tab !== 3, 'btn-theme': tab === 3 }" @click="setTab(3)">
                        Billing & Planning
                    </button>
                    <button type="button" class="btn btn-light rounded-pill fw-semibold mx-1 my-2" :class="{ 'btn-light-theme': tab !== 4, 'btn-theme': tab === 4 }" @click="setTab(4)">
                        Notifications
                    </button>
                    <button type="button" class="btn btn-light rounded-pill fw-semibold mx-1 my-2" :class="{ 'btn-light-theme': tab !== 5, 'btn-theme': tab === 5 }" @click="setTab(5)">
                        Connections
                    </button>
                </div>

                <div class="mt-1">

                    <!-- project list data show -->
                    <div class="rounded-3 p-3 bg-white shadow" v-if="tab === 1">
                        <div class="h5 mb-3 pt-3 ps-3 fw-bold">Project list</div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th class="fw-semibold default-width">Project name</th>
                                    <th class="fw-semibold default-width">Total Task</th>
                                    <th class="fw-semibold default-width">Progress</th>
                                    <th class="fw-semibold default-width">Hours</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="default-width">Food</td>
                                    <td class="default-width">290/500</td>
                                    <td class="default-width">
                                        58%
                                        <div class="progress hpx-5 me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-warning-subtle wPercentage-58"></div>
                                        </div>
                                    </td>
                                    <td class="default-width">
                                        40 hours
                                    </td>
                                </tr>
                                <tr>
                                    <td class="default-width">Dress</td>
                                    <td class="default-width">320/500</td>
                                    <td class="default-width">
                                        64%
                                        <div class="progress hpx-5 me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-warning-subtle wPercentage-64"></div>
                                        </div>
                                    </td>
                                    <td class="default-width">
                                        192 hours
                                    </td>
                                </tr>
                                <tr>
                                    <td class="default-width">Shelter</td>
                                    <td class="default-width">420/500</td>
                                    <td class="default-width">
                                        84%
                                        <div class="progress hpx-5 me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
                                            <div class="progress-bar bg-success-subtle wPercentage-84"></div>
                                        </div>
                                    </td>
                                    <td class="default-width">
                                        576 hours
                                    </td>
                                </tr>
                                <tr>
                                    <td class="default-width">Education</td>
                                    <td class="default-width">310/500</td>
                                    <td class="default-width">
                                        62%
                                        <div class="progress hpx-5 me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-warning-subtle wPercentage-62"></div>
                                        </div>
                                    </td>
                                    <td class="default-width">
                                        180 hours
                                    </td>
                                </tr>
                                <tr>
                                    <td class="default-width">Treatment</td>
                                    <td class="default-width">200/500</td>
                                    <td class="default-width">
                                        40%
                                        <div class="progress hpx-5 me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
                                            <div class="progress-bar bg-danger-subtle wPercentage-40"></div>
                                        </div>
                                    </td>
                                    <td class="default-width">
                                        80 hours
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- change password form action -->
                    <div class="rounded-3 p-3 bg-white shadow" v-if="tab === 2">
                        <form autocomplete="off">
                            <div class="h5 mb-3 pt-3 ps-3 fw-bold">Change Password</div>
                            <div class="p-3">
                                <div class="mb-3">
                                    <div class="form-group">
                                        <label for="current-password" class="form-label">Current Password</label>
                                        <input id="current-password" type="password" name="current-password" v-model="passwordParam.currentPassword" class="form-control" placeholder="Enter your current password" required autocomplete="new-current-password">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="form-group">
                                        <label for="password" class="form-label">Password</label>
                                        <div class="position-relative">
                                            <input id="password" :type="passwordFieldType" name="password" class="form-control" v-model="passwordParam.password" placeholder="Enter your password" required autocomplete="new-password">
                                            <div class="me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer" @click="passwordVisibility">
                                                <i class="bi bi-eye" v-if="passwordFieldType === 'text'"></i>
                                                <i class="bi bi-eye-slash" v-if="passwordFieldType === 'password'"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="mb-3 form-group">
                                        <label for="password_confirm" class="form-label">Confirm password</label>
                                        <div class="position-relative">
                                            <input id="password_confirm" :type="passwordConfirmationFieldType" name="password_confirm" v-model="passwordParam.passwordConfirm" class="form-control" placeholder="Enter your confirm password" required autocomplete="new-confirm-password">
                                            <div class="me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer" @click="passwordConfirmVisibility">
                                                <i class="bi bi-eye" v-if="passwordConfirmationFieldType === 'text'"></i>
                                                <i class="bi bi-eye-slash" v-if="passwordConfirmationFieldType === 'password'"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-theme px-4">
                                    CHANGE PASSWORD
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- billing & plans summary -->
                    <div v-if="tab === 3">
                        <div class="rounded-3 p-3 bg-white shadow">
                            <div class="h5 mb-3 pt-3 ps-3 fw-bold">Billing & Plans</div>
                            <div class="p-3">
                                <small class="text-secondary text-opacity-75">
                                    <div class="mb-3">
                                        Your Current Plan is
                                        <span class="fw-semibold text-dark"> Basic </span>
                                        <br>
                                        A simple start for everyone
                                    </div>

                                    <div class="mb-3">
                                        <div class="mb-1 text-dark fw-semibold">
                                            Active until Dec 09, 2021
                                        </div>
                                        We will send you a notification upon Subscription expiration
                                    </div>

                                    <div class="mb-3">
                                        <div class="d-flex justify-content-start align-items-center fw-semibold text-dark">
                                            $199 Per Month
                                            <span class="ms-3 badge bg-light-theme text-theme px-3 py-2"> popular </span>
                                        </div>
                                    </div>
                                    Standard plan for small to medium businesses
                                </small>
                                <div class="d-block d-sm-flex justify-content-start align-items-center flex-wrap mt-2">
                                    <router-link :to="{name: 'pricing'}" class="me-2 btn btn-theme d-flex justify-content-center align-items-center px-4 mb-2">
                                        UPGRADE PLAN
                                    </router-link>
                                    <button type="button" class="me-2 btn btn-light-danger mb-2 px-4">
                                        CANCEL SUBSCRIPTION
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- billing address action -->
                        <div class="mt-3">
                            <div class="rounded-3 shadow p-3 bg-white">
                                <div class="h5 mb-3 pt-3 ps-3 fw-bold">
                                    Billing Address
                                </div>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="default-width fw-semibold">Company Name:</td>
                                                <td class="name">ThemeSelection</td>
                                            </tr>
                                            <tr>
                                                <td class="default-width fw-semibold">Billing Email:</td>
                                                <td class="name">gertrude@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td class="default-width fw-semibold">Tax ID:</td>
                                                <td class="name">TAX-875623</td>
                                            </tr>
                                            <tr>
                                                <td class="default-width fw-semibold">VAT Number:</td>
                                                <td class="name">SDF754K77</td>
                                            </tr>
                                            <tr>
                                                <td class="default-width fw-semibold">Billing Address:</td>
                                                <td class="name">100 Water Plant Avenue, Building 1303 Wake Island</td>
                                            </tr>
                                            <tr>
                                                <td class="default-width fw-semibold">Contact</td>
                                                <td class="name">+1(609) 933-44-22</td>
                                            </tr>
                                            <tr>
                                                <td class="default-width fw-semibold">Country:</td>
                                                <td class="name">USA</td>
                                            </tr>
                                            <tr>
                                                <td class="default-width fw-semibold">State:</td>
                                                <td class="name">kingland</td>
                                            </tr>
                                            <tr>
                                                <td class="default-width fw-semibold">Zip Code:</td>
                                                <td class="name">403114</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- notification content -->
                    <div class="rounded-3 border p-3 bg-white shadow" v-if="tab === 4">
                        <div class="h5 mb-3 pt-3 ps-3 fw-bold">Notification</div>
                        <hr class="border">
                        <div class="ps-3">
                            You will receive notification for the below selected items.
                        </div>
                        <hr class="border">

                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="name fw-semibold">
                                            TYPE
                                        </th>
                                        <th class="default-width text-center">
                                            EMAIL
                                        </th>
                                        <th class="default-width text-center">
                                            BROWSER
                                        </th>
                                        <th class="default-width text-center">
                                            APP
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-secondary name">
                                            New for you
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="type" class="form-checkbox" checked>
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary name">
                                            Account activity
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox" checked>
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary name">
                                            A new browser used to sign in
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox" checked>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary name">
                                            A new device is linked
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox" checked>
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-checkbox">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-start align-items-center">
                            <button type="submit" class="btn btn-theme px-4 me-2">
                                SUBMIT
                            </button>
                            <button type="button" class="btn btn-light px-4 border">
                                CANCEL
                            </button>
                        </div>
                    </div>

                    <!-- connection with media content -->
                    <div class="rounded-3 border p-3 bg-white shadow" v-if="tab === 5">

                        <div class="table-responsive">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td class="default-width">
                                            <div class="d-flex justify-content-start align-items-center">
                                                <div class="media-avatar me-3">
                                                    <img :src="`/images/media/facebook.png`" class="img-fluid" alt="media">
                                                </div>
                                                Facebook
                                            </div>
                                        </td>
                                        <td class="default-width">
                                            <div class="d-flex justify-content-end align-items-center">
                                                <button type="button" class="btn btn-theme px-4">
                                                    No Connection
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="default-width">
                                            <div class="d-flex justify-content-start align-items-center">
                                                <div class="media-avatar me-3">
                                                    <img :src="`/images/media/twitter.png`" class="img-fluid" alt="media">
                                                </div>
                                                Twitter
                                            </div>
                                        </td>
                                        <td class="default-width">
                                            <div class="d-flex justify-content-end align-items-center">
                                                <button type="button" class="btn btn-theme px-4">
                                                    No Connection
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="default-width">
                                            <div class="d-flex justify-content-start align-items-center">
                                                <div class="media-avatar me-3">
                                                    <img :src="`/images/media/linkedin.png`" class="img-fluid" alt="media">
                                                </div>
                                                Linkedin
                                            </div>
                                        </td>
                                        <td class="default-width">
                                            <div class="d-flex justify-content-end align-items-center">
                                                <button type="button" class="btn btn-theme px-4">
                                                    No Connection
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="default-width">
                                            <div class="d-flex justify-content-start align-items-center">
                                                <div class="media-avatar me-3">
                                                    <img :src="`/images/media/slack.png`" class="img-fluid" alt="media">
                                                </div>
                                                Slack
                                            </div>
                                        </td>
                                        <td class="default-width">
                                            <div class="d-flex justify-content-end align-items-center">
                                                <button type="button" class="btn btn-theme px-4">
                                                    No Connection
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="default-width">
                                            <div class="d-flex justify-content-start align-items-center">
                                                <div class="media-avatar me-3">
                                                    <img :src="`/images/media/google.png`" class="img-fluid" alt="media">
                                                </div>
                                                Google
                                            </div>
                                        </td>
                                        <td class="default-width">
                                            <div class="d-flex justify-content-end align-items-center">
                                                <button type="button" class="btn btn-theme px-4">
                                                    No Connection
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{
            /* Data properties for the component */
            tab: 1,
            password: '',
            passwordFieldType: 'password',
            passwordConfirmationFieldType: 'password',
            passwordParam: {
                currentPassword: '',
                password: '',
                passwordConfirm: '',
            },
            url: null,
        }

    },

    mounted() {  },

    methods: {

        /* Function to set tab */
        setTab(tab){
            this.tab = tab
        },

        /* Function to password visibility */
        passwordVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },

        /* Function to password confirm visibility */
        passwordConfirmVisibility() {
            this.passwordConfirmationFieldType = this.passwordConfirmationFieldType === "password" ? "text" : "password";
        },

        /* Function to on file change */
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        }

    }

}

</script>
