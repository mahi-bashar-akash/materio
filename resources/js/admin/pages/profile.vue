<template>

    <div class="profile-wrapper">
        <div class="row">
            <div class="col-xl-4 p-3 h-100">
                <div class="bg-white p-3 shadow rounded-3 mb-3 cursor-content-menu h-100">
                    <div class="d-flex justify-content-center align-items-center flex-column mb-3">
                        <img :src="`/images/avatar.png`" class="rounded-circle overflow-hidden" style="width: 144px; height: 144px" alt="admin avatar">
                        <div class="badge bg-success-subtle text-secondary py-2 px-4 mt-3">
                            Frontend Developer (intern)
                        </div>
                    </div>
                    <div class="fw-bold mb-3"> Full name:</div>
                    <div class="text-secondary mb-3"> Mahi Bashar Akash </div>
                    <div class="fw-bold mb-3"> Contact number: </div>
                    <div class="text-secondary mb-3"> +880 01645820007 </div>
                    <div class="fw-bold mb-3"> Email: </div>
                    <div class="text-secondary"> mahibashar2023@gmail.com </div>
                </div>
            </div>
            <div class="col-xl-8 p-3">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="button p-3">
                                    <button type="button" class="btn w-100" :class="{ 'btn-light-theme': tab !== 1, 'btn-theme': tab === 1 }" @click="setTab(1)">
                                        OVERVIEW
                                    </button>
                                </th>
                                <th class="button p-3">
                                    <button type="button" class="btn w-100" :class="{ 'btn-light-theme': tab !== 2, 'btn-theme': tab === 2 }" @click="setTab(2)">
                                        SECURITY
                                    </button>
                                </th>
                                <th class="button p-3">
                                    <button type="button" class="btn w-100" :class="{ 'btn-light-theme': tab !== 3, 'btn-theme': tab === 3 }" @click="setTab(3)">
                                        BILLING & PLANS
                                    </button>
                                </th>
                                <th class="button p-3">
                                    <button type="button" class="btn w-100" :class="{ 'btn-light-theme': tab !== 4, 'btn-theme': tab === 4 }" @click="setTab(4)">
                                        Notifications
                                    </button>
                                </th>
                                <th class="button p-3">
                                    <button type="button" class="btn w-100" :class="{ 'btn-light-theme': tab !== 5, 'btn-theme': tab === 5 }" @click="setTab(5)">
                                        CONNECTIONS
                                    </button>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div class="mt-1">

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
                                        <div class="progress me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
                                            <div class="progress-bar bg-warning-subtle" style="width: 58%"></div>
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
                                        <div class="progress me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
                                            <div class="progress-bar bg-warning-subtle" style="width: 64%"></div>
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
                                        <div class="progress me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
                                            <div class="progress-bar bg-success-subtle" style="width: 84%"></div>
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
                                        <div class="progress me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
                                            <div class="progress-bar bg-warning-subtle" style="width: 62%"></div>
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
                                        <div class="progress me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
                                            <div class="progress-bar bg-danger-subtle" style="width: 40%"></div>
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

                    <div class="rounded-3 p-3 bg-white shadow" v-if="tab === 2">
                        <form>
                            <div class="h5 mb-3 pt-3 ps-3 fw-bold">Change Password</div>
                            <div class="p-3">
                                <div class="mb-3">
                                    <div class="form-group">
                                        <label for="current-password" class="form-label">Current Password</label>
                                        <input id="current-password" type="password" name="current-password" class="form-control" placeholder="Enter your current password" required autocomplete="new-current-password">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="form-group">
                                        <label for="password" class="form-label">Password</label>
                                        <div class="position-relative">
                                            <input id="password" :type="passwordFieldType" name="password" class="form-control" placeholder="Enter your password" required autocomplete="new-password">
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
                                            <input id="password_confirm" :type="passwordConfirmationFieldType" name="password_confirm" class="form-control" placeholder="Enter your confirm password" required autocomplete="new-confirm-password">
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

                    <div v-if="tab === 3">
                        <div class="rounded-3 p-3 bg-white shadow">
                            <div class="h5 mb-3 pt-3 ps-3 fw-bold">Billing & Plans</div>
                            <div class="p-3">
                                <small class="text-secondary text-opacity-75">
                                    <div class="mb-3">
                                        Your Current Plan is <span class="fw-semibold text-dark"> Basic </span> <br>
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
                                            $199 Per Month <span class="ms-3 badge bg-light-theme text-theme px-3 py-2"> popular </span>
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

                        <div class="mt-3">
                            <div class="rounded-3 shadow p-3 bg-white">
                                <div class="h5 mb-3 pt-3 ps-3 fw-bold">Billing Address</div>
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
                    <div class="rounded-3 border p-3 bg-white" v-if="tab === 4">
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
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary name">
                                            Account activity
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary name">
                                            A new browser used to sign in
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary name">
                                            A new device is linked
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                        <td class="text-secondary default-width text-center">
                                            <input type="checkbox" name="" class="form-check-input">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-start align-items-center">
                            <button type="submit" class="btn btn-theme px-4 shadow me-2">
                                SUBMIT
                            </button>
                            <button type="button" class="btn btn-light px-4 shadow">
                                CANCEL
                            </button>
                        </div>
                    </div>
                    <div class="rounded-3 border p-3 bg-white" v-if="tab === 5">

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
            tab: 1,
            password: '',
            passwordFieldType: 'password',
            passwordConfirmationFieldType: 'password',
        }

    },

    mounted() {



    },

    methods: {

        setTab(tab){
            this.tab = tab
        },

        passwordVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },

        passwordConfirmVisibility() {
            this.passwordConfirmationFieldType = this.passwordConfirmationFieldType === "password" ? "text" : "password";
        },

    }

}

</script>
