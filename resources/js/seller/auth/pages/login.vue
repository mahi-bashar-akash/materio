<template>

    <!-- login content -->
    <div class="mb-3 h5">
        Welcome to {{app_name}}! 👋🏻
    </div>
    <div class="mb-3 text-secondary text-opacity-50">
        Please sign-in to your account and start the adventure
    </div>

    <!-- login form action -->
    <form autocomplete="off">
        <div class="mb-3">
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input id="email" type="email" name="email" class="form-control" placeholder="Enter your email" required autocomplete="new-email" v-model="loginParam.email">
            </div>
        </div>
        <div class="mb-3">
            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <div class="position-relative">
                    <input id="password" :type="passwordFieldType" name="password" class="form-control" placeholder="Enter your password" required autocomplete="new-password" v-model="loginParam.password">
                    <div class="me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer" @click="passwordVisibility">
                        <i class="bi bi-eye" v-if="passwordFieldType === 'text'"></i>
                        <i class="bi bi-eye-slash" v-if="passwordFieldType === 'password'"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <label for="remember" class="form-label">
                    <input id="remember" type="checkbox" class="form-checkbox" v-model="loginParam.rememberMe">
                    Remember me
                </label>
            </div>
            <div class="col-12 col-md-6 text-md-end mb-3">
                <router-link :to="{name: 'forget'}" class="text-decoration-none text-theme">
                    Forget password?
                </router-link>
            </div>
        </div>
        <div class="mb-3">
            <div class="form-group">
                <button type="button" class="btn btn-theme w-100">
                    LOGIN
                </button>
            </div>
        </div>
        <div class="text-secondary text-opacity-50 text-center">
            New on our platform?
            <router-link :to="{name: 'register'}" class="text-decoration-none text-theme">
                Create an account
            </router-link>
        </div>
    </form>

</template>

<script>

export default {

    data(){

        return{
            /* Data properties for the component */
            app_name: window.core.APP_NAME,
            password: '',
            passwordFieldType: 'password',
            loginParam: {
                email: '',
                password: '',
                rememberMe: '',
            }
        }

    },

    mounted() {



    },

    methods: {

        /* Function to password visibility */
        passwordVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },

    }

}

</script>
