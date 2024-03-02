<!doctype html>

<html lang="en">

<head>

    {{-- head --}}
    @include('components.head')

    {{-- seller vue connection app js --}}
    @vite('resources/js/seller/app.js')

</head>

<body class="seller-portal">

    <div id="app"></div>

    {{-- global perloader --}}
    @include('components/preloader')

</body>

@include('components.script')

</html>
