<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>NeuroGame</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="styles/styles.css">
    <link rel="shortcut icon" href="images/favicon.png">
</head>

<body>
    <div id="content">
        <div id="header" role="heading">
            <h1>NeuroGame</h1>
        </div>
        <center>
            <p> Thank you for playing </p>
            <a href = "index.html" ><button class="act-button" onclick="index.html">NEW GAME</button></a>
        </center>
</body>
</html>

<?php
$file = 'content.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= json_encode($_GET) . "\n";
// Write the contents back to the file                                          file_put_contents($file, $current);
?>
