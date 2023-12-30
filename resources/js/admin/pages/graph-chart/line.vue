<template>
    <div class="card bg-white shadow rounded-3 mb-3 cursor-content-menu border-0">
        <div class="card-header border-bottom-0 bg-white py-3">
            <strong class="h5 mb-3 fw-bold">Growth Chart</strong>
        </div>
        <div class="card-body" style="height: 307px">
            <Bar :data="data" :options="options"/>
        </div>
    </div>
</template>


<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import {Bar} from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default {
    components: {
        Bar
    },
    data() {
        return {
            core: window.core,
            data: {
                labels: [
                    '2020', '2021', '2022', '2023', '2024'
                ],
                datasets: [
                    {
                        label: 'Food',
                        backgroundColor: 'rgba(255, 205, 86)',
                        data: [65, 150, 80, 125, 50]
                    },
                    {
                        label: 'Dress',
                        backgroundColor: 'rgba(75, 192, 192)',
                        data: [45, 120, 130, 95, 95]
                    },
                    {
                        label: 'Shelter',
                        backgroundColor: 'rgba(54, 162, 235)',
                        data: [85, 65, 90, 65, 120]
                    },
                    {
                        label: 'Education',
                        backgroundColor: 'rgba(153, 102, 255)',
                        data: [15, 180, 50, 110, 145]
                    },
                    {
                        label: 'Treatment',
                        backgroundColor: 'rgba(201, 203, 207)',
                        data: [35, 90, 80, 130, 230]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        };
    },
    methods: {},
    created() {

    },
    mounted() {
    }
};
</script>
