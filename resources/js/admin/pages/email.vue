<template>

    <!-- email wrapper -->
    <div class="email-wrapper">

        <!-- email sidebar -->
        <div class="email-sidebar" :class="{active: emailSidebarActive}">
            <div class="email-sidebar-header">
                MailBox
                <button type="button" class="btn-close" @click="emailSidebarController">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="email-sidebar-body">
                <a href="javascript:void(0)" class="email-sidebar-link">
                    Index
                    <span class="badge bg-secondary-subtle text-secondary">
                        0
                    </span>
                </a>
                <a href="javascript:void(0)" class="email-sidebar-link">
                    Important
                    <span class="badge bg-secondary-subtle text-secondary">
                        0
                    </span>
                </a>
                <a href="javascript:void(0)" class="email-sidebar-link">
                    Draft
                    <span class="badge bg-secondary-subtle text-secondary">
                        0
                    </span>
                </a>
                <a href="javascript:void(0)" class="email-sidebar-link">
                    Trash
                    <span class="badge bg-secondary-subtle text-secondary">
                        0
                    </span>
                </a>
                <a href="javascript:void(0)" class="email-sidebar-link">
                    Spam
                    <span class="badge bg-secondary-subtle text-secondary">
                        0
                    </span>
                </a>
            </div>
            <div class="email-sidebar-footer">
                <button type="button" class="btn btn-theme w-100" @click="emailComposerController">
                    Composer
                </button>
            </div>
        </div>

        <!-- email body -->
        <div class="email-body">

            <!-- email body header -->
            <div class="email-body-header border-bottom">

                <a href="javascript:void(0)" class="btn-controller" @click="emailSidebarController">
                    <i class="bi bi-justify-left"></i>
                </a>

                <div class="col-8 col-sm-6 col-md-4">
                    <div class="position-relative">
                        <input type="text" name="keyword" class="form-control ps-5" placeholder="Search here anything">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>

            </div>

            <!-- email body content -->
            <div class="email-body-content p-3">

                <div class="email-content">

                    <!-- email btn group -->
                    <div class="email-btn-group d-flex justify-content-start align-items-center">
                        <span>
                            <input type="checkbox" class="form-checkbox">
                        </span>
                        <button type="button" class="btn-icon ms-2">
                            <i class="bi bi-trash2 text-danger"></i>
                        </button>
                        <button type="button" class="btn-icon ms-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                    </div>

                    <div class="email-list-content">

                        <!-- email single data -->
                        <div class="single-data row py-2 align-items-center cursor-content-menu" v-for="each in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]">
                            <div class="col-12 col-xl-8 text-truncate d-flex align-items-center">
                                <span>
                                    <input type="checkbox" class="form-checkbox">
                                </span>
                                <button type="button" class="btn-icon me-2">
                                    <i class="bi bi-star text-warning"></i>
                                </button>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eligendi facilis id incidunt laborum modi, possimus, praesentium quis repudiandae sed sequi.
                            </div>
                            <div class="col-12 col-xl-4 d-flex align-items-center justify-content-end">
                                <small class="me-2 text-theme">
                                    jan, 02
                                </small>
                                <button class="btn-icon me-2" @click="emailDetailsController">
                                    <i class="bi bi-envelope"></i>
                                </button>
                                <button class="btn-icon">
                                    <i class="bi bi-exclamation-octagon"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- email details content -->
                <div class="email-details-content p-4" :class="{'active' : emailDetailsActive}">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="email-user-info d-flex align-items-center">
                            <button type="button" class="btn-icon me-2" @click="emailDetailsController">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <img :src="'/images/avatar.png'" class="email-avatar" alt="avatar.png">
                            <span class="ms-2">
                                <strong class="d-block fw-bold"> John Deo </strong>
                                <small class="text-secondary">12:07 PM</small>
                            </span>
                        </div>
                        <button type="button" class="btn btn-danger">
                            <i class="bi bi-trash2"></i>
                        </button>
                    </div>
                    <div class="py-3">
                        <div class="fw-bold mb-3">An 'extremely credible source'</div>
                        <div class="text-secondary mb-3">Hi Nathan,</div>
                        <div class="mb-3">
                            An 'extremely credible source' has called my office and told me that Barack Obama's placeholder text is a fraud. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.
                        </div>
                        <div class="mb-3">
                            This can't be! Artoo, you're playing the wrong message. There will be no bargain. We're doomed. I will not give up my favorite decoration. I like Captain Solo where he is. Artoo, look! Captain Solo. And he's still frozen in carbonite. What could possibly have come over Master Luke. Is it something I did? He never expressed any unhappiness with my work. Oh! Oh! Hold it! Ohh!
                        </div>
                        <div class="mb-3">
                            Your fleet has lost. And your friends on the Endor moon will not survive. There is no escape, my young apprentice.
                        </div>
                        <div class="fw-bold">
                            Moruth Doole,
                        </div>
                    </div>
                    <QuillEditor class="hpx-190" contentType="html" theme="snow" toolbar="full"/>
                    <button type="submit" name="" class="btn btn-theme mt-3 px-5">Send</button>
                </div>

                <!-- email composer content -->
                <div class="email-composer p-4" :class="{'active' : emailComposerActive}">
                    <div class="d-flex justify-content-start align-items-center fw-semibold mb-3">
                        <button type="button" class="btn-icon me-2" @click="emailComposerController">
                            <i class="bi bi-chevron-left"></i>
                        </button>
                        Compose Mail
                    </div>

                    <!-- email composer form action -->
                    <form>
                        <div class="form-group">
                            <input type="text" name="composerEmailTo" v-model="composerParam.composerEmailTo" class="email-form-control rounded-0 shadow-none border-bottom-0" placeholder="To:" required autocomplete="new-to">
                        </div>
                        <div class="form-group">
                            <input type="text" name="composerEmailFrom" v-model="composerParam.composerEmailFrom" class="email-form-control rounded-0 shadow-none border-bottom-0" placeholder="Subject:" required autocomplete="new-subject">
                        </div>
                        <div class="form-group">
                            <textarea name="composerEmailMessage" v-model="composerParam.composerEmailMessage" class="email-form-textarea rounded-0 shadow-none" cols="30" rows="10" required placeholder="Message" autocomplete="new-message"></textarea>
                        </div>
                        <div class="mt-2">
                            <button type="button" class="btn btn-theme">
                                <i class="bi bi-send me-2"></i> Send
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </div>

</template>

<script>

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {

    components: {
        /* components for quill editor */
        QuillEditor
    },

    data(){

        return{
            /* Data properties for the component */
            emailDropdownActive: false,
            emailSidebarActive: false,
            emailDetailsActive: false,
            emailComposerActive: false,
            selectText: 'All',
            composerParam: {
                composerEmailTo: '',
                composerEmailFrom: '',
                composerEmailMessage: '',
            }
        }

    },

    mounted() {  },

    methods: {

        /* Function to email sidebar controller */
        emailSidebarController(){
            this.emailSidebarActive = !this.emailSidebarActive;
            this.emailComposerActive = false;
            this.emailDetailsActive = false;
        },

        /* Function to email details controller */
        emailDetailsController(){
            this.emailDetailsActive = !this.emailDetailsActive;
            this.emailComposerActive = false;
        },

        /* Function to email composer controller */
        emailComposerController(){
            this.emailComposerActive = !this.emailComposerActive;
            this.emailDetailsActive = false;
        }

    }

}

</script>
