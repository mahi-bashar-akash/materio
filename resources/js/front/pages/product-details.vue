<template>

    <form class="w-100 h-100 container-fluid cursor-content-menu">
        <div class="row">
            <div class="col-12 col-lg-5 p-0">
                <img :src="insertedImage" class="img-fluid border w-100 object-fit-cover" alt="product 1">
                <div class="row">
                    <div class="col-4 mt-3 mb-3">
                        <img :src="`/images/product/image-01.jpg`" class="img-fluid border cursor-pointer" alt="product 2" @click="insertImage($event)">
                    </div>
                    <div class="col-4 mt-3 mb-3">
                        <img :src="`/images/product/image-02.jpg`" class="img-fluid border cursor-pointer" alt="product 3" @click="insertImage($event)">
                    </div>
                    <div class="col-4 mt-3 mb-3">
                        <img :src="`/images/product/image-03.jpg`" class="img-fluid border cursor-pointer" alt="product 4" @click="insertImage($event)">
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-7 h-100">
                <div class="bg-white p-3 border">
                    <div class="p-2">
                        Fresh broccoli
                    </div>
                    <div class="p-2">
                        Food : Vegetables
                    </div>
                    <div class="p-2">
                        <div class="mb-2">Description</div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid consequuntur dolorem
                        dolores ex exercitationem fugiat id illum labore, laborum magni maiores minima nisi numquam
                        odit pariatur placeat provident quaerat quibusdam, quidem, reiciendis sit tenetur ut
                        veritatis vero. Ab corporis expedita id nobis non veniam.
                    </div>
                    <div class="p-2">
                        Currently Available
                    </div>
                    <div class="p-2">
                        Weight: 1 kg
                    </div>
                    <div class="p-2">
                        Price: $10
                    </div>
                    <div class="p-2">
                        <button type="submit" class="btn btn-theme me-2 mb-3">
                            <i class="bi bi-cart me-2"></i>
                            Add to cart
                        </button>
                        <button type="submit" class="btn btn-outline-theme mb-3">
                            <i class="bi bi-bag-fill me-2"></i>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>

</template>

<script>

export default {

    data(){

        return{
            insertedImage: '/images/product/image-01.jpg'
        }

    },

    mounted() {



    },

    methods: {

        insertImage(e){
            this.insertedImage = e.target.src;
        }

    }

}

</script>
