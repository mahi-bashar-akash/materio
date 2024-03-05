{{-- preloader --}}
<div id="preloader">
    <div class="loader"></div>
</div>

{{-- preloader script js --}}
<script type="application/javascript">
    const loader = document.getElementById("preloader")
    window.addEventListener("load", function () {
        setTimeout(() => {
            loader.style.display = "none";
        },3000)
    })
</script>
