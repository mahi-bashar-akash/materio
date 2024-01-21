<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="{{asset('/images/svg/logo.svg')}}" type="image/x-icon">
    <title> materio </title>
    @vite('resources/scss/basic.scss')
    @vite('resources/js/seller/app.js')
</head>
<body class="seller-portal" id="app"></body>
<script>
    window.core = {
        APP_NAME: 'Materio ',
        APP_URL: '{{env('APP_URL')}}',
    };
</script>
</html>
