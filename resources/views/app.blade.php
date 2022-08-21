<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/css/app.css" rel="stylesheet">
        <meta name="baseurl" content="{{ config('app.url') }}"/>
        <meta name="pakttoken" content="{{ config('custom_config.packt_token') }}"/>
        <title>Packt-Demo</title>

    </head>
    <body class="">
        

            <div id="app"></div>
            
    </body>
    <script type="text/javascript" src="{{ asset(mix('js/app.js')) }}"></script>
</html>
