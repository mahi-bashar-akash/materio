<template>

    <!-- registration content -->
    <div class="mb-3 h5">
        Adventure starts here 🚀
    </div>
    <div class="mb-3 text-secondary text-opacity-50">
        Make your app management easy and fun!
    </div>

    <!-- registration form action -->
    <form autocomplete="off">
        <div class="mb-3">
            <div class="form-group">
                <label for="full_name" class="form-label">Full name</label>
                <input id="full_name" type="text" name="full_name" v-model="registerParam.fullName" class="form-control" placeholder="Enter your full name" required autocomplete="new-full-name">
            </div>
        </div>
        <div class="mb-3">
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input id="email" type="email" name="email" class="form-control" v-model="registerParam.email" placeholder="Enter your email" required autocomplete="new-email">
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
                <button type="button" class="btn btn-theme w-100" :disabled="!agreeChecked">
                    SIGN UP
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

export default {

    data(){

        return{
            password: '',
            passwordFieldType: 'password',
            passwordConfirmationFieldType: 'password',
            agreeChecked: false,
            registerParam: {
                fullName: '',
                email: '',
                password: '',
                passwordConfirm: '',
            }
        }

    },

    mounted() {



    },

    methods: {

        passwordVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },

        passwordConfirmVisibility() {
            this.passwordConfirmationFieldType = this.passwordConfirmationFieldType === "password" ? "text" : "password";
        },

        checkController() {
            this.isCheckedPrivacy = !this.isCheckedPrivacy
        }

    }

}

</script>
