<template>

    <!-- admin authentication content -->
    <div class="user-authentication container-fluid">
        <div class="d-flex justify-content-center align-items-center">

            <!-- form-content -->
            <div class="form-content my-4">
                <div class="mb-3 h5 d-flex align-items-center justify-content-center">

                    <!-- logo image with name -->
                    <img :src="`/images/svg/logo.svg`" class="img-fluid me-3 wpx-35 hpx-35" alt="logo">
                    {{app_name}}

                </div>

                <router-view/>

            </div>

        </div>
    </div>

</template>

<script>

export default {

    data() {

        return{
            app_name: window.core.APP_NAME
        }

    },

    mounted() {



    },

    methods: {

    }

}

</script>
