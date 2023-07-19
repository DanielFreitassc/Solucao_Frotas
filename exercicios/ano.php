<?php
$a = isset($_GET["ano"]);
$i = date("Y") - $a;
echo "Você nasceu em $a";
?>
