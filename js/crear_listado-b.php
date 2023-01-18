<?php
include ("../includes/funciones.php");

//$busca = mysqli_query($linkconx, "SELECT * FROM sucursales ORDER BY id ASC LIMIT 20 OFFSET 40  ");
echo '{"book": "Digital-Age Resistance","author": "Andrew Kennis","caption": "Journalism, Social Movements and the Media Dependence Model","capitulos": [';


for ($i = 1; $i <= 17; $i++) {
    $busca = mysqli_query($linkconx, "SELECT * FROM data WHERE capitulo = '$i' ORDER BY id ASC ");
    echo '{"capitulo": "'.$i.'","photos": [';
    $e=1;
    while ($info = mysqli_fetch_array($busca)) {
      echo '{"id": "'.$e.'","capitulo": "'.$info['capitulo_libro'].'","seccion": "'.$info['seccion'].'","photo": "'.$info['photo'].'","photocover": "'.$info['photocover'].'","lugar": "'.$info['lugar'].'","fecha": "'.$info['fecha'].'","fotografo": "'.$info['fotografo'].'","descripcion": "'.$info['descripcion'].'","link": "'.$info['link'].'","extracto": "'.$info['extracto'].'","print_online": "'.$info['print_online'].'"}';
        echo ',';
      $e++;
    }
    echo ']},';
}
echo ']}';
?>