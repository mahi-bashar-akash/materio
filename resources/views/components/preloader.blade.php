<div id="preloader">
    <div class="loading" data-loading-text="Materio"></div>
</div>

<script>
    const loader = document.getElementById("preloader")
    window.addEventListener("load", function () {
        setTimeout(() => {
            loader.style.display = "none";
        },1500)
    })
</script>
