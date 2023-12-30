<template>

    <div class="admin-authentication container-fluid" style="background: url('/images/dots.png')">
        <div class="d-flex justify-content-center align-items-center vh-100">
            <div class="form-content">
                <div class="mb-3 h5 d-flex align-items-center justify-content-center">
                    <img :src="`/images/svg/logo.svg`" class="img-fluid me-3" style="width: 35px; height: 35px;" alt="logo">
                    MahiBro
                </div>
                <router-view/>
            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{}

    },

    mounted() {



    },

    methods: {



    }

}

</script>
