<template>

    <!-- forget password content -->
    <div v-if="step === 'forget-password'">
        <div class="mb-3 h5">
            Forgot Password? 🔒
        </div>
        <div class="mb-3 text-secondary text-opacity-50">
            Enter your email and we'll send you instructions to reset your password
        </div>

        <!-- forget password form action -->
        <form>
            <div class="mb-3">
                <div class="form-group">
                    <label for="" class="form-label">Email</label>
                    <input type="text" name="" class="form-control" placeholder="Enter your email" required autocomplete="new-email">
                </div>
            </div>
            <div class="mb-3">
                <div class="form-group">
                    <button type="button" class="btn btn-theme w-100" @click="emailPush">
                        SEND RESET LINK
                    </button>
                </div>
            </div>
            <div class="text-center">
                <router-link :to="{name: 'login'}" class="text-decoration-none text-theme">
                    <i class="bi bi-chevron-left me-2"></i> Back to login
                </router-link>
            </div>
        </form>
    </div>

    <!-- reset password content -->
    <div v-if="step === 'reset-password'">
        <div class="mb-3 h5">
            Reset Password 🔒
        </div>
        <div class="mb-3 text-secondary text-opacity-50">
            Enter your email and we'll send you instructions to reset your password
        </div>

        <!-- reset password form action -->
        <form>
            <div class="mb-3">
                <div class="form-group">
                    <label for="" class="form-label">Email</label>
                    <input type="text" name="" class="form-control shadow-none border" placeholder="Enter your email" required autocomplete="new-email">
                </div>
            </div>
            <div class="mb-3">
                <div class="form-group">
                    <label for="" class="form-label">Code</label>
                    <input type="text" name="" class="form-control shadow-none border" placeholder="Enter your otp code" required autocomplete="new-otp-code">
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
            <div class="mb-3">
                <div class="form-group">
                    <button type="button" class="btn btn-theme w-100">
                        SET NEW PASSWORD
                    </button>
                </div>
            </div>
            <div class="text-center">
                <router-link :to="{name: 'login'}" class="text-decoration-none text-theme">
                    <i class="bi bi-chevron-left me-2"></i> Back to login
                </router-link>
            </div>
        </form>
    </div>

</template>

<script>

export default {

    data(){

        return{
            step: 'forget-password',
            password: '',
            passwordFieldType: 'password',
            passwordConfirmationFieldType: 'password',
        }

    },

    mounted() {



    },

    methods: {

        emailPush(){
            this.step = 'reset-password'
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
