<template>

    <!-- map -->
    <div class="map mb-3">
        <div id="canvas-for-googlemap" class="w-100 h-100">
            <iframe class="h-100 w-100 border-0" src="https://www.google.com/maps/embed/v1/place?q=Jessore+sadar+upazila.+Jessore,+Jashore,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div>
    </div>

    <div class="container bg-white">
        <div class="row px-2 py-1">
            <form class="col-md-6 mb-3 p-3" autocomplete="off">

                <!-- message form for customer needed as asking question or confusion -->
                <div class="fw-semibold fs-4 mb-3">
                    Drop us message
                </div>
                <div class="mb-3 form-group">
                    <label for="name" class="form-label fw-medium">Name</label>
                    <input id="name" type="text" name="name" class="form-control" required autocomplete="new-name" placeholder="Enter your name">
                </div>
                <div class="mb-3 form-group">
                    <label for="email" class="form-label fw-medium">Email</label>
                    <input id="email" type="email" name="email" class="form-control" required autocomplete="new-email" placeholder="Enter your email">
                </div>
                <div class="mb-3 form-group">
                    <label for="message" class="form-label fw-medium">Message</label>
                    <textarea name="message" class="form-textarea" id="message" cols="30" rows="5" required autocomplete="new-message" placeholder="Write your message..."></textarea>
                </div>
                <div>
                    <button type="submit" class="btn btn-theme">
                        Submit
                    </button>
                </div>
            </form>
            <div class="col-md-6 mb-3 p-3">

                <!-- company information for identification -->
                <div class="fw-semibold fs-4 mb-3">
                    Get in touch
                </div>
                <div class="mb-3 line-height-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. rerum earum eveniet dolorum suscipit
                    nesciunt incidunt animi repudiandae ab at, tenetur distinctio voluptate vel illo similique.
                </div>
                <div class="mb-3">
                    <div class="fw-bold d-block mb-2">
                        <i class="bi bi-person-fill me-2"></i> Address
                    </div>
                    <div class="ps-4">
                        Mollapara, Jessore Sadar, Jessore, Bangladesh
                    </div>
                </div>
                <div class="mb-3">
                    <div class="fw-bold d-block mb-2">
                        <i class="bi bi-telephone-fill me-2"></i> Phone
                    </div>
                    <div class="ps-4">
                        +880 01400125289
                    </div>
                </div>
                <div class="mb-3">
                    <div class="fw-bold d-block mb-2">
                        <i class="bi bi-envelope-fill me-2"></i> Email
                    </div>
                    <div class="ps-4">
                        mahibashar2023@gmail.com
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

export default {
    data() { return {  } },
    mounted() {  },
    methods: {  }
}

</script>
