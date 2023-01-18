<?php
include ("../includes/funciones.php");

$busca = mysqli_query($linkconx, "SELECT * FROM data ORDER BY id ASC ");
//$busca = mysqli_query($linkconx, "SELECT * FROM sucursales ORDER BY id ASC LIMIT 20 OFFSET 40  ");
echo '{"book": "Digital-Age Resistance","author": "Andrew Kennis","caption": "Journalism, Social Movements and the Media Dependence Model","photos": [';
while ($info = mysqli_fetch_array($busca)) {

   /*$nombresucursal = $info['nombre_sucursal'];
   $porcionesSucursal = explode(" ", $nombresucursal, 2);
   if ($porcionesSucursal[0] == 'SUCURSAL') {$nombresucursal = $porcionesSucursal[1];
   }else{$nombresucursal = $info['nombre_sucursal'];}*/

   echo '{"storeid": "'.$info['id'].'","capitulo": "'.$info['capitulo'].'","fincapitulo": "'.$info['fincapitulo'].'","seccion": "'.$info['seccion'].'","photo": "'.$info['photo'].'","photocover": "'.$info['photocover'].'","lugar": "'.$info['lugar'].'","fecha": "'.$info['fecha'].'","fotografo": "'.$info['fotografo'].'","descripcion": "'.$info['descripcion'].'","link": "'.$info['link'].'","extracto": "'.$info['extracto'].'"},';

   
}
echo ']}';
?>