<template>

    <!-- dashboard content -->
    <div class="row">

        <!-- admin info -->
        <div class="col-lg-6 col-xl-5">
            <div class="bg-white p-3 shadow rounded-3 mb-3 cursor-content-menu">
                <div class="d-flex justify-content-center align-items-center flex-column mb-3">
                    <img :src="`/images/avatar.png`" class="rounded-circle overflow-hidden" style="width: 144px; height: 144px" alt="admin avatar">
                    <div class="badge bg-success-subtle text-secondary py-2 px-4 mt-3">
                        Frontend Developer (intern)
                    </div>
                </div>
                <div class="fw-bold mb-3"> Full name:</div>
                <div class="text-secondary mb-3"> Mahi Bashar Akash </div>
                <div class="fw-bold mb-3"> Contact number: </div>
                <div class="text-secondary mb-3"> +880 01645820007 </div>
                <div class="fw-bold mb-3"> Email: </div>
                <div class="text-secondary"> mahibashar2023@gmail.com </div>
            </div>
        </div>

        <!-- project maximum list 5 -->
        <div class="col-lg-6 col-xl-7">
            <div class="bg-white p-3 shadow rounded-3 mb-3 cursor-content-menu">
                <div class="h5 mb-3 pt-3 ps-3 fw-bold">Project list</div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="fw-semibold default-width">Project name</th>
                                <th class="fw-semibold default-width">Total Task</th>
                                <th class="fw-semibold default-width">Progress</th>
                                <th class="fw-semibold default-width">Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="default-width">Food</td>
                                <td class="default-width">290/500</td>
                                <td class="default-width">
                                    58%
                                    <div class="progress hpx-5 me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-warning-subtle wPercentage-58"></div>
                                    </div>
                                </td>
                                <td class="default-width">
                                    40 hours
                                </td>
                            </tr>
                            <tr>
                                <td class="default-width">Dress</td>
                                <td class="default-width">320/500</td>
                                <td class="default-width">
                                    64%
                                    <div class="progress hpx-5 me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-warning-subtle wPercentage-64"></div>
                                    </div>
                                </td>
                                <td class="default-width">
                                    192 hours
                                </td>
                            </tr>
                            <tr>
                                <td class="default-width">Shelter</td>
                                <td class="default-width">420/500</td>
                                <td class="default-width">
                                    84%
                                    <div class="progress hpx-5 me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-success-subtle wPercentage-84"></div>
                                    </div>
                                </td>
                                <td class="default-width">
                                    576 hours
                                </td>
                            </tr>
                            <tr>
                                <td class="default-width">Education</td>
                                <td class="default-width">310/500</td>
                                <td class="default-width">
                                    62%
                                    <div class="progress hpx-5 me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-warning-subtle wPercentage-62"></div>
                                    </div>
                                </td>
                                <td class="default-width">
                                    180 hours
                                </td>
                            </tr>
                            <tr>
                                <td class="default-width">Treatment</td>
                                <td class="default-width">200/500</td>
                                <td class="default-width">
                                    40%
                                    <div class="progress hpx-5 me-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-danger-subtle wPercentage-40"></div>
                                    </div>
                                </td>
                                <td class="default-width">
                                    80 hours
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="col-lg-6 col-xl-5">
            <div class="row">

                <!-- revenue increase -->
                <div class="col-12 col-sm-6">
                    <div class="bg-white p-3 shadow rounded-3 mb-3">
                        <div class="bg-danger border-0 text-white rounded-circle fs-4 cursor-content-menu d-flex justify-content-center align-items-center wpx-55 hpx-55">
                            <i class="bi bi-truck"></i>
                        </div>
                        <div class="my-3">Logistics</div>
                        <div class="my-3 d-flex align-items-center">
                            <div class="fs-5 fw-semibold">44.10k</div>
                            <div class="text-success ms-3">+12%</div>
                        </div>
                        <small class="my-3 text-secondary">
                            Revenue Increase
                        </small>
                    </div>
                </div>

                <!-- reports -->
                <div class="col-12 col-sm-6">
                    <div class="bg-white p-3 shadow rounded-3 mb-3">
                        <div class="bg-warning border-0 rounded-circle fs-3 cursor-content-menu d-flex justify-content-center align-items-center wpx-55 hpx-55">
                            <i class="bi bi-check-lg"></i>
                        </div>
                        <div class="my-3">Reports</div>
                        <div class="my-3 d-flex align-items-center">
                            <div class="fs-5 fw-semibold">Reports</div>
                            <div class="text-danger ms-3">-8%</div>
                        </div>
                        <small class="my-3 text-secondary">
                            System Bugs
                        </small>
                    </div>
                </div>

                <!-- new visitors -->
                <div class="col-12">
                    <div class="bg-white p-3 shadow rounded-3 mb-3">
                        <div class="bg-theme text-white border-0 rounded-circle fs-4 cursor-content-menu d-flex justify-content-center align-items-center wpx-55 hpx-55">
                            <i class="bi bi-people"></i>
                        </div>
                        <div class="my-3">Reports</div>
                        <div class="my-3 d-flex align-items-center">
                            <div class="fs-5 fw-semibold">this week.</div>
                            <div class="text-secondary ms-3 d-flex align-items-center">12,480 <div class="ms-2 text-success"> <i class="bi bi-chevron-up"></i> 28</div> </div>
                        </div>
                        <small class="my-3 text-secondary">
                            48% new visitors
                        </small>
                    </div>

                    <!-- meeting schedule -->
                    <div class="bg-white p-3 shadow rounded-3 mb-3">
                        <div class="h5 mb-3 fw-bold ps-4">
                            Meeting Schedule
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td class="name">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <img :src="`/images/clients/face-1.png`" class="face" alt="client avatar">
                                                <small class="ms-2">
                                                    <span class="fw-semibold d-block">Steven Myers</span>
                                                    <span class="text-secondary text-opacity-50 d-block">lori06@morse.com</span>
                                                </small>
                                            </div>
                                        </td>
                                        <td class="status">
                                            <div class="badge bg-warning px-3 py-2">
                                                Business
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <img :src="`/images/clients/face-2.png`" class="face" alt="client avatar">
                                                <small class="ms-2">
                                                    <span class="fw-semibold d-block">Susan Dickerson</span>
                                                    <span class="text-secondary text-opacity-50 d-block">bwilson@norris-brock.com</span>
                                                </small>
                                            </div>
                                        </td>
                                        <td class="status">
                                            <div class="badge bg-success px-3 py-2">
                                                Meditation
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <img :src="`/images/clients/face-3.png`" class="face" alt="client avatar">
                                                <small class="ms-2">
                                                    <span class="fw-semibold d-block">Tammy Sanchez</span>
                                                    <span class="text-secondary text-opacity-50 d-block">eric47@george-castillo.com</span>
                                                </small>
                                            </div>
                                        </td>
                                        <td class="status">
                                            <div class="badge bg-secondary px-3 py-2">
                                                Meetup
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <img :src="`/images/clients/face-4.png`" class="face" alt="client avatar">
                                                <small class="ms-2">
                                                    <span class="fw-semibold d-block">Timothy Stevenson</span>
                                                    <span class="text-secondary text-opacity-50 d-block">arielberg@wolfe-smith.com</span>
                                                </small>
                                            </div>
                                        </td>
                                        <td class="status">
                                            <div class="badge bg-danger px-3 py-2">
                                                Play
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <img :src="`/images/clients/face-5.png`" class="face" alt="client avatar">
                                                <small class="ms-2">
                                                    <span class="fw-semibold d-block">Tony Herrera</span>
                                                    <span class="text-secondary text-opacity-50 d-block">smithtiffany@powers.com</span>
                                                </small>
                                            </div>
                                        </td>
                                        <td class="status">
                                            <div class="badge bg-info px-3 py-2">
                                                Family
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Client maximum list 5 -->
        <div class="col-lg-6 col-xl-7">
            <div class="bg-white p-3 shadow rounded-3 mb-3 cursor-content-menu">
                <div class="h5 mb-3 pt-3 ps-3 fw-bold">Client list</div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="fw-semibold id">#Id</th>
                                <th class="fw-semibold name">Client name</th>
                                <th class="fw-semibold payment">Due</th>
                                <th class="fw-semibold status">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="id text-theme">#5020</td>
                                <td class="name">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <img :src="`/images/clients/face-1.png`" class="face" alt="client avatar">
                                        <small class="ms-2">
                                            <span class="fw-semibold d-block">Steven Myers</span>
                                            <span class="text-secondary text-opacity-50 d-block">lori06@morse.com</span>
                                        </small>
                                    </div>
                                </td>
                                <td class="payment">$4372</td>
                                <td class="status">
                                    <div class="badge bg-success py-2 px-3">
                                        paid
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="id text-theme">#5008</td>
                                <td class="name">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <img :src="`/images/clients/face-2.png`" class="face" alt="client avatar">
                                        <small class="ms-2">
                                            <span class="fw-semibold d-block">Susan Dickerson</span>
                                            <span class="text-secondary text-opacity-50 d-block">bwilson@norris-brock.com</span>
                                        </small>
                                    </div>
                                </td>
                                <td class="payment">$2771</td>
                                <td class="status">
                                    <div class="badge bg-success py-2 px-3">
                                        paid
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="id text-theme">#5010</td>
                                <td class="name">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <img :src="`/images/clients/face-3.png`" class="face" alt="client avatar">
                                        <small class="ms-2">
                                            <span class="fw-semibold d-block">Tammy Sanchez</span>
                                            <span class="text-secondary text-opacity-50 d-block">eric47@george-castillo.com</span>
                                        </small>
                                    </div>
                                </td>
                                <td class="payment">$3171</td>
                                <td class="status">
                                    <div class="badge bg-success py-2 px-3">
                                        paid
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="id text-theme">#5007</td>
                                <td class="name">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <img :src="`/images/clients/face-4.png`" class="face" alt="client avatar">
                                        <small class="ms-2">
                                            <span class="fw-semibold d-block">Timothy Stevenson</span>
                                            <span class="text-secondary text-opacity-50 d-block">arielberg@wolfe-smith.com</span>
                                        </small>
                                    </div>
                                </td>
                                <td class="payment">$3904</td>
                                <td class="status">
                                    <div class="badge bg-success py-2 px-3">
                                        paid
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="id text-theme">#5015</td>
                                <td class="name">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <img :src="`/images/clients/face-5.png`" class="face" alt="client avatar">
                                        <small class="ms-2">
                                            <span class="fw-semibold d-block">Tony Herrera</span>
                                            <span class="text-secondary text-opacity-50 d-block">smithtiffany@powers.com</span>
                                        </small>
                                    </div>
                                </td>
                                <td class="payment">$2060</td>
                                <td class="status">
                                    <div class="badge bg-danger py-2 px-3">
                                        unpaid
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <lineChart/>

        </div>
    </div>

</template>

<script>
import lineChart from "./graph-chart/line.vue";

export default {

    components: {
        /* components for line chart */
        lineChart
    },

    data(){

        return{}

    },

    mounted() {



    },

    methods: {



    }

}

</script>
