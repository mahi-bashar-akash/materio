<template>

    <!-- registration content -->
    <div class="mb-3 h5">
        Adventure starts here 🚀
    </div>
    <div class="mb-3 text-secondary text-opacity-50">
        Make your app management easy and fun!
    </div>

    <!-- registration form action -->
    <form @submit.prevent="register" autocomplete="off">
        <div class="mb-3">
            <div class="form-group">
                <label for="name" class="form-label">Full name</label>
                <input id="name" type="text" name="name" v-model="registerParam.name" class="form-control" placeholder="Enter your full name" required autocomplete="new-full-name">
                <div class="error-report"></div>
            </div>
        </div>
        <div class="mb-3">
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input id="email" type="email" name="email" class="form-control" v-model="registerParam.email" placeholder="Enter your email" required autocomplete="new-email">
                <div class="error-report"></div>
            </div>
        </div>
        <div class="mb-3">
            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <div class="position-relative">
                    <input id="password" :type="passwordFieldType" name="password" class="form-control" v-model="registerParam.password" placeholder="Enter your password" required autocomplete="new-password">
                    <div class="me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer" @click="passwordVisibility">
                        <i class="bi bi-eye" v-if="passwordFieldType === 'text'"></i>
                        <i class="bi bi-eye-slash" v-if="passwordFieldType === 'password'"></i>
                    </div>
                </div>
                <div class="error-report"></div>
            </div>
        </div>
        <div class="mb-3">
            <div class="mb-3 form-group">
                <label for="password_confirm" class="form-label">Confirm password</label>
                <div class="position-relative">
                    <input id="password_confirm" :type="passwordConfirmationFieldType" name="password_confirm" v-model="registerParam.passwordConfirm" class="form-control" placeholder="Enter your confirm password" required autocomplete="new-confirm-password">
                    <div class="me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer" @click="passwordConfirmVisibility">
                        <i class="bi bi-eye" v-if="passwordConfirmationFieldType === 'text'"></i>
                        <i class="bi bi-eye-slash" v-if="passwordConfirmationFieldType === 'password'"></i>
                    </div>
                </div>
                <div class="error-report"></div>
            </div>
        </div>
        <div class="mb-3">
            <label for="agree">
                <input id="agree" type="checkbox" class="form-check-input" v-model="agreeChecked">
                I agree to
                <a href="javascript:void(0)" class="text-decoration-none text-theme">
                    privacy policy & terms
                </a>
            </label>
        </div>
        <div class="mb-3">
            <div class="form-group">
                <button type="submit" class="btn btn-theme w-100" :disabled="!agreeChecked" v-if="!loading">
                    SIGN UP
                </button>
                <button type="button" class="btn btn-theme w-100" v-if="loading">
                    Loading ...
                </button>
            </div>
        </div>
        <div class="text-secondary text-opacity-50 text-center">
            Already have an account?
            <router-link :to="{name: 'login'}" class="text-decoration-none text-theme">
                Sign in instead
            </router-link>
        </div>
    </form>

</template>

<script>
import apiServices from "../../services/apiServices";
import apiRoutes from "../../services/apiRoutes.js";
import {createToaster} from "@meforma/vue-toaster";
import axios from "axios";

const toaster = createToaster({ position: 'top-left' } );

export default {

    data(){

        return{
            /* Data properties for the component */
            password: '',
            passwordFieldType: 'password',
            passwordConfirmationFieldType: 'password',
            agreeChecked: false,
            registerParam: {
                name: '',
                email: '',
                password: '',
                passwordConfirm: '',
                role: '',
            },
            loading: false,
        }

    },

    mounted() {



    },

    methods: {

        /* Function to password visibility --- */
        passwordVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },

        /* Function to password confirm visibility --- */
        passwordConfirmVisibility() {
            this.passwordConfirmationFieldType = this.passwordConfirmationFieldType === "password" ? "text" : "password";
        },

        /* Function to switch condition work for domain */
        emailDomainSwitch(){
            const emailDomain = this.registerParam.email.split('@')[1];
            switch (emailDomain) {
                case 'admin.com':
                    this.registerParam.role = 'admin';
                    break;
                case 'seller.com':
                    this.registerParam.role = 'seller';
                    break;
                case 'delivery.com':
                    this.registerParam.role = 'delivery';
                    break;
                default:
                    this.registerParam.role = 'customer';
                    break;
            }
        },

        /* Function to call authentication of registration */
        register() {
            this.emailDomainSwitch()
            apiServices.ClearErrorHandler()
            this.loading = true;
            axios.post(apiRoutes.registration, this.registerParam, {headers: apiServices.headerContent}).then((response) => {
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                let res = err.response;
                if (res?.data?.errors !== undefined) {
                    apiServices.ErrorHandler(res?.data?.errors);
                } else {
                    toaster.error('Server error!')
                }
            })
        },

    }

}

</script>
