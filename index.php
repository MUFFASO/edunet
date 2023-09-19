<!doctype html>
<html lang="es-AR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>La Educación en la Era del Aprendizaje Artificial</title>
    <link rel="stylesheet" href="./jscss/normalize.css">
    <link rel="stylesheet" href="./jscss/style.css">

    <link rel="prefetch" href="./actualimg.json">
    <link rel="prefetch" href="./imagenes/black.svg">
    <link rel="prefetch" href="./imagenes/inicio.png">
    <link rel="prefetch" href="./imagenes/splash.png">

</head>

<body <?php echo (isset($_GET['d']) && $_GET['d'] == "tv") ? 'class="tv"' : ''; ?>>
    <?php if (isset($_GET['d'])) : ?>
        <div id="canva" data-device="<?= $_GET['d']; ?>">
            <img src="./imagenes/inicio.png" class="opaque" id="imagen1">
            <img src="./imagenes/inicio.png" id="imagen2">
        </div>
        <script src="./jscss/fullscreen-api-polyfill.min.js" defer></script>
        <script src="./jscss/jquery-3.7.0.min.js" defer></script>
        <script src="./jscss/scripts.js" defer></script>
    <?php else : ?>
        <div id="seleccionar">
            <?php
            $devices = ['tv', 'tablet1', 'tablet2', 'tablet3', 'tablet4'];
            foreach ($devices as $device) {
                echo "<button onclick=\"location.href='?d=$device'\" type=\"button\">" . ucfirst($device) . "</button>";
            }
            ?>
        </div>
    <?php endif; ?>
    <div id="toast">
        Por favor<br>
        No tocar las tablets
    </div>
</body>

</html>