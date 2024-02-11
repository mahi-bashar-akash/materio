<div id="preloader">
    <div class="loader"></div>
</div>

<script>
    const loader = document.getElementById("preloader")
    window.addEventListener("load", function () {
        setTimeout(() => {
            loader.style.display = "none";
        },3000)
    })
</script>
