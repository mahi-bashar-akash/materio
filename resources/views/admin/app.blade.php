<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="{{asset('/images/svg/logo.svg')}}" type="image/x-icon">
    <title> MahiBro </title>
    @vite('resources/scss/basic.scss')
    @vite('resources/scss/admin.scss')
    @vite('resources/js/admin/app.js')
</head>
<body class="admin-portal" id="admin"></body>
<script>
    window.core = {
        APP_NAME: 'MahiBro - ',
        APP_URL: '{{env('APP_URL')}}',
    };
</script>

</html>
