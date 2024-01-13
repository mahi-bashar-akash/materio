<template>

    <div class="col-12 col-lg-8">
        <div class="p-3">
            <div class="row">
                <div class="col-12 col-xl-6 mb-3">
                    <div class="p-3 bg-white shadow rounded-3 text-success d-flex justify-content-between align-items-center">

                        <div class="d-flex justify-content-start align-items-center">
                            <i class="bi bi-check-all rounded-circle me-2 d-flex justify-content-center align-items-center" style="width: 40px; height: 40px; box-shadow: 0 0 8px 0 var(--bs-border-color)"></i>
                            Complete
                        </div>

                        <span class="badge bg-success">1,00,000</span>

                    </div>
                </div>
                <div class="col-12 col-xl-6 mb-3">
                    <div class="p-3 bg-white shadow rounded-3 text-warning d-flex justify-content-between align-items-center">

                        <div class="d-flex justify-content-start align-items-center">
                            <i class="bi bi-hourglass-split rounded-circle me-2 d-flex justify-content-center align-items-center" style="width: 40px; height: 40px; box-shadow: 0 0 8px 0 var(--bs-border-color)"></i>
                            Pending
                        </div>

                        <span class="badge bg-warning">1,00,000</span>

                    </div>
                </div>
                <div class="col-12 col-xl-6 mb-3">
                    <div class="p-3 bg-white shadow rounded-3 text-danger d-flex justify-content-between align-items-center">

                        <div class="d-flex justify-content-start align-items-center">
                            <i class="bi bi-trash2 rounded-circle me-2 d-flex justify-content-center align-items-center" style="width: 40px; height: 40px; box-shadow: 0 0 8px 0 var(--bs-border-color)"></i>
                            Cancellation
                        </div>

                        <span class="badge bg-danger">000</span>

                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{  }

    },

    mounted() {  },

    methods: {  }

}

</script>
