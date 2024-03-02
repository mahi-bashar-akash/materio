<!doctype html>

<html lang="en">

    <head>

        {{-- head --}}
        @include('components.head')

        {{-- admin vue connection app js --}}
        @vite('resources/js/admin/app.js')

    </head>

    <body class="admin-portal">

        <div id="app"></div>

        {{-- global perloader --}}
        @include('components/preloader')

    </body>

    @include('components.script')

</html>
