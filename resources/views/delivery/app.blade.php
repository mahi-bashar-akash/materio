<!doctype html>

<html lang="en">

<head>

    {{-- head --}}
    @include('components.head')

    {{-- delivery vue connection app js --}}
    @vite('resources/js/delivery/app.js')

</head>

<body class="delivery-portal">

    <div id="app"></div>

    {{-- global perloader --}}
    @include('components/preloader')

</body>

@include('components.script')

</html>
