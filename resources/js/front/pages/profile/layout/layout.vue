<template>

    <div class="customer-wrapper cursor-content-menu">
        <div class="customer-sidebar">
            <div class="d-flex justify-content-center">
                <label for="avatar" class="form-label customer-avatar" v-if="!url">
                    <input id="avatar" type="file" name="avatar" class="d-none" @change="onFileChange">
                    <i class="bi bi-camera fs-1 text-theme"></i>
                </label>
                <div class="customer-avatar" v-if="url">
                    <img :src="url" alt="avatar">
                    <div class="delete-icon" @click="url = null">
                        <i class="bi bi-trash2-fill text-danger"></i>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4 fs-4">
                <a href="javascript:void(0)" class="text-theme text-decoration-none">Edit Profile</a>
            </div>
            <div class="pt-4">
                <div class="mb-3 fw-semibold">
                    Full Name:
                </div>
                <div class="mb-3 text-secondary">
                    Mahi Bashar Akash
                </div>
                <div class="mb-3 fw-semibold">
                    Email:
                </div>
                <div class="mb-3 text-secondary">
                    mahibashar2023@gmail.com
                </div>
                <div class="mb-3 fw-semibold">
                    Phone Number:
                </div>
                <div class="mb-3 text-secondary">
                    +880 01645820007
                </div>
                <div class="mb-3 fw-semibold">
                    Gender
                </div>
                <div class="text-secondary">
                    Male
                </div>
            </div>
        </div>
        <div class="customer-content">
            <router-view/>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{
            url: null,
        }

    },

    mounted() {



    },

    methods: {

        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        }

    }

}

</script>
