<template>

    <div class="position-fixed start-0 front-chat-wrapper z-2" :class="{ 'active' : chatContentActive }">
        <div class="wpx-350 hpx-450 border-0 overflow-hidden bg-white shadow card">

            <!-- head -->
            <div class="w-100 hpx-50 d-flex justify-content-between align-items-center border-bottom">
                <span class="fw-semibold ps-3"> Chat </span>
                <span>
                    <button type="button" class="btn btn-icon rounded-0 hpx-50 wpx-50 border-0" @click="chatToggle">
                        <i class="bi bi-dash-lg"></i>
                    </button>
                </span>
            </div>

            <!-- body -->
            <div class="w-100 hpx-350 border-bottom">

                <!-- customer care -->
                <div class="d-flex align-items-center justify-content-start p-3">
                    <img :src="`/images/clients/face-1.png`" class="wpx-35 hpx-35 rounded-circle" alt="face">
                    <div class="ms-1 bg-theme text-white py-2 px-3 rounded-4">
                        How can i help you? sir or madam.
                    </div>
                </div>

                <!-- customer -->
                <div class="d-flex align-items-center justify-content-end p-3">
                    <div class="me-1 bg-theme text-white py-2 px-3 rounded-4">
                        I need more food as quantity
                    </div>
                    <img :src="`/images/clients/face-2.png`" class="wpx-35 hpx-35 rounded-circle" alt="face">
                </div>

            </div>

            <div class="hpx-50 d-flex justify-content-between align-items-center">
                <input type="text" name="message" class="form-control shadow-none border-0 rounded-0 hpx-50" placeholder="Type here" autocomplete="new-message">
                <button type="button" class="btn btn-theme rounded-0 hpx-50">Send</button>
            </div>

        </div>
    </div>

</template>

<script>

export default {

    data() {
        return {
            chatContentActive: false,
        }
    },
    mounted() {
    },
    methods: {
        chatToggle() {
            this.chatContentActive = !this.chatContentActive;
        }
    },

}

</script>
