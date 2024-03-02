<!doctype html>

<html lang="en">

    <head>

        {{-- head --}}
        @include('components.head')

        {{-- JQuery Js --}}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

        {{-- Owl carousel Js --}}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

        {{-- Owl carousel css --}}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>

        {{-- Owl carousel default css --}}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"/>

        {{-- front vue connection app js --}}
        @vite('resources/js/front/app.js')

    </head>

    <body class="front-portal">

        <div id="app"></div>

        {{-- global perloader --}}
        @include('components/preloader')

    </body>

    @include('components.script')

</html>
