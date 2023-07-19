<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    function tester(&$x){
        $x += 2;
        echo "O valor de x é $x ";

    }
    $a = 3;
    tester($a);
    echo "O vlaor de A é $a";
    ?>
</body>
</html>