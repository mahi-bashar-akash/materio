<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="{{asset('/images/svg/logo.svg')}}" type="image/x-icon">
    <title> materio </title>

    {{-- necessary sources --}}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"/>

    @vite('resources/scss/basic.scss')
    @vite('resources/js/front/app.js')
</head>
<body class="front-portal">
    <div id="app"></div>
    @include('components/preloader')
</body>
<script>
    window.core = {
        APP_NAME: 'Materio ',
        APP_URL: '{{env('APP_URL')}}',
    };
</script>
</html>
