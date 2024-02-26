<template>

    <!-- chat wrapper -->
    <div class="chat-wrapper">

        <!-- owner details in left sidebar -->
        <div class="ownerDetails" :class="{'active' : ownerDetailsActive}">
            <div class="text-end">
                <button type="button" class="btn-close" @click="remove"></button>
            </div>
            <div class="d-flex flex-column justify-content-between content">
                <div class="col-12">
                    <div class="text-center">
                        <img :src="`/images/avatar.png`" class="img-fluid mb-3 wpx-100 hpx-100 rounded-circle" alt="avatar">
                        <div class="h5">John Deo</div>
                        <small class="text-secondary text-opacity-50">Admin</small>
                    </div>
                    <div class="text-start col-12 mt-4">
                        <div class="mb-3">PERSONAL INFORMATION</div>
                        <div class="mb-3 text-secondary text-opacity-75">
                            <i class="bi bi-envelope me-2"></i>
                            johndeo@gmail.com
                        </div>
                        <div class="mb-3 text-secondary text-opacity-75">
                            <i class="bi bi-telephone me-2"></i>
                            +880 01400125289
                        </div>
                        <div class="mb-3 text-secondary text-opacity-75">
                            <i class="bi bi-clock me-2"></i>
                            Mon - Fri 10AM - 8PM
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-center align-items-center">
                    <button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35">
                        <i class="bi bi-twitter-x"></i>
                    </button>
                    <button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35">
                        <i class="bi bi-linkedin"></i>
                    </button>
                    <button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35">
                        <i class="bi bi-youtube"></i>
                    </button>
                    <button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35">
                        <i class="bi bi-github"></i>
                    </button>
                </div>

            </div>
        </div>

        <!-- client details in left sidebar -->
        <div class="clientDetails" :class="{'active' : clientDetailsActive}">
            <div class="text-start">
                <button type="button" class="btn-close" @click="remove"></button>
            </div>
            <div class="d-flex flex-column justify-content-between content">
                <div class="col-12">
                    <div class="text-center">
                        <img :src="`/images/clients/face-1.png`" class="img-fluid mb-3 wpx-100 hpx-100 rounded-circle" alt="client-avatar">
                        <div class="h5">Harriet McBride</div>
                        <small class="text-secondary text-opacity-50">Frontend Developer</small>
                    </div>
                    <div class="text-start col-12 mt-4">
                        <div class="mb-3">PERSONAL INFORMATION</div>
                        <div class="mb-3 text-secondary text-opacity-75">
                            <i class="bi bi-envelope me-2"></i>
                            harriet@gmail.com
                        </div>
                        <div class="mb-3 text-secondary text-opacity-75">
                            <i class="bi bi-telephone me-2"></i>
                            +1(123) 456 - 7890
                        </div>
                        <div class="mb-3 text-secondary text-opacity-75">
                            <i class="bi bi-clock me-2"></i>
                            Mon - Fri 10AM - 8PM
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-center align-items-center">
                    <button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35">
                        <i class="bi bi-twitter-x"></i>
                    </button>
                    <button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35">
                        <i class="bi bi-linkedin"></i>
                    </button>
                    <button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35">
                        <i class="bi bi-youtube"></i>
                    </button>
                    <button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35">
                        <i class="bi bi-github"></i>
                    </button>
                </div>

            </div>
        </div>

        <!-- chat sidebar -->
        <div class="chat-sidebar" :class="{active: chatSidebarActive}">
            <div class="chat-sidebar-header">
                <img :src="`/images/avatar.png`" class="img-fluid rounded-circle me-2 cursor-pointer wpx-45 hpx-45" alt="avatar" @click="ownerDetails">
                <div class="position-relative">
                    <input type="text" name="" class="form-control shadow-none ps-5" placeholder="Search Here">
                    <div class="position-absolute start-0 top-50 translate-middle-y ps-3">
                        <i class="bi bi-search text-secondary"></i>
                    </div>
                </div>
                <a href="javascript:void(0)" class="chat-sidebar-close ms-2" @click="remove">
                    <i class="bi bi-x-lg"></i>
                </a>
            </div>
            <div class="chat-sidebar-body">
                <a href="javascript:void(0)" class="chat-sidebar-link">
                    <img :src="'/images/clients/face-1.png'" class="chat-user" alt="avatar.png">
                    <span>
                        <strong> Harriet McBride </strong>
                        <br>
                        <small class="text-secondary">harriet@gmail.com</small>
                    </span>
                </a>
                <a href="javascript:void(0)" class="chat-sidebar-link">
                    <img :src="'/images/clients/face-2.png'" class="chat-user" alt="avatar.png">
                    <span>
                        <strong> Danny Conner </strong>
                        <br>
                        <small class="text-secondary">danny@gmail.com</small>
                    </span>
                </a>
                <a href="javascript:void(0)" class="chat-sidebar-link">
                    <img :src="'/images/clients/face-3.png'" class="chat-user" alt="avatar.png">
                    <span>
                        <strong> Janie West </strong>
                        <br>
                        <small class="text-secondary">janie@gmail.com</small>
                    </span>
                </a>
                <a href="javascript:void(0)" class="chat-sidebar-link">
                    <img :src="'/images/clients/face-4.png'" class="chat-user" alt="avatar.png">
                    <span>
                        <strong> Bryan Murray </strong>
                        <br>
                        <small class="text-secondary">bryan@gmail.com</small>
                    </span>
                </a>
                <a href="javascript:void(0)" class="chat-sidebar-link">
                    <img :src="'/images/clients/face-5.png'" class="chat-user" alt="avatar.png">
                    <span>
                        <strong> Albert Underwood </strong>
                        <br>
                        <small class="text-secondary">albert@gmail.com</small>
                    </span>
                </a>
            </div>
        </div>

        <!-- chat body -->
        <div class="chat-body">

            <!-- chat body header -->
            <div class="chat-body-header">
                <div class="d-flex align-items-center justify-content-start">
                    <a href="javascript:void(0)" class="btn-controller" @click="chatSidebarController">
                        <i class="bi bi-justify-left"></i>
                    </a>
                    <div class="d-flex align-items-center cursor-pointer font-14" @click="clientDetails">
                        <img :src="'/images/clients/'+select.ClientImage" class="img-fluid rounded-circle me-2 wpx-45 hpx-45" alt="client-avatar">
                        <span>
                            <strong> {{select.clientName}} </strong>
                            <br>
                            <small class="text-secondary">harriet@gmail.com</small>
                        </span>
                    </div>
                </div>
                <div class="dropdown">
                    <button type="button" class="btn-icon border-0" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                        <li>
                            <button type="button" class="dropdown-item px-3 py-2">
                                Audio call
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item px-3 py-2">
                                Video call
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item px-3 py-2">
                                Mute notification
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item px-3 py-2">
                                Block conversation
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item px-3 py-2">
                                Clear conversation
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- chat body content -->
            <div class="chat-body-content p-3">

                <!-- chat content both user -->
                <div class="chat-text-content p-1 cursor-content-menu">

                    <!-- admin chat -->
                    <div class="d-flex justify-content-end align-items-center mb-3">
                        <div class="py-2 px-3 bg-theme text-white rounded-3 shadow-sm">
                            How can we help? We're here for you!
                        </div>
                        <img :src="`/images/avatar.png`" class="rounded-circle ms-2 wpx-45 hpx-45" alt="avatar">
                    </div>

                    <!-- client chat -->
                    <div class="d-flex justify-content-start align-items-center mb-3">
                        <img :src="'/images/clients/face-1.png'" class="img-fluid rounded-circle me-2 wpx-45 hpx-45" alt="client-avatar">
                        <div class="py-2 px-3 bg-white text-secondary rounded-3 shadow-sm">
                            Hey John, I am looking for the best admin template. Could you please help me to find it out?
                        </div>
                    </div>
                </div>

                <!-- send message content -->
                <div class="mt-3">
                    <div class="position-relative">
                        <input type="text" name="" class="form-control" placeholder="Type you message" required>
                        <div class="position-absolute top-50 end-0 translate-middle-y me-1">
                            <button type="button" class="btn btn-theme d-flex justify-content-center align-items-center rounded-1 hpx-38">
                                <i class="bi bi-send me-2"></i>
                                Send
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{
            /* Data properties for the component */
            chatSidebarActive: false,
            clientDetailsActive: false,
            ownerDetailsActive: false,
            select: {
                ClientImage: 'face-1.png',
                clientName: 'Harriet McBride',
                ClientEmail: ''

            },

        }

    },

    mounted() {



    },

    methods: {

        /* Function to chat sidebar controller */
        chatSidebarController(){
            this.chatSidebarActive = true;
            this.clientDetailsActive = false;
            this.ownerDetailsActive = false;
        },

        /* Function to client details */
        clientDetails(){
            this.clientDetailsActive = true;
            this.chatSidebarActive = false;
            this.ownerDetailsActive = false;
        },

        /* Function to owner details */
        ownerDetails(){
            this.ownerDetailsActive = true;
            this.chatSidebarActive = false;
            this.clientDetailsActive = false
        },

        /* Function to remove sidebar's */
        remove(){
            this.chatSidebarActive = false;
            this.clientDetailsActive = false;
            this.ownerDetailsActive = false;
        },

    }

}

</script>
