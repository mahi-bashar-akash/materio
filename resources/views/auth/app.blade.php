<!doctype html>

<html lang="en">

<head>

    {{-- head --}}
    @include('components.head')

    {{-- authentication vue connection app js --}}
    @vite('resources/js/auth/app.js')

</head>

<body class="auth-portal">

    <div id="app"></div>

    {{-- global perloader --}}
    @include('components/preloader')

</body>

@include('components.script')

</html>
