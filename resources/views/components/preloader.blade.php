<div id="preloader">
    <div class="manage-icon-position">
        <div class="spinner-loading-animation"></div>
        <div class="logo">
            <img src="{{asset('/images/svg/logo.svg')}}" class="wpx-65 hpx-65" alt="preloader">
        </div>
    </div>
</div>

<script>
    const loader = document.getElementById("preloader")
    window.addEventListener("load", function () {
        setTimeout(() => {
            loader.style.display = "none";
        },1000)
    })
</script>
