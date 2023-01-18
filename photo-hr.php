<?php 
$photo_get = $_REQUEST['photo'];
$capitulo_get = $_REQUEST['capitulo'];
$capitulo_id_get = $_REQUEST['capituloId'];
/*if ($capitulo_get=='I') {
  $capitulo_get=1;
}else{}*/
?>
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/swiper-bundle.min.css" />
    

    <title id="tituloPagina"></title>
    <!-- Custom styles for this template -->
    <link href="css/cover.css?v=1.5" rel="stylesheet">
    <link href="css/swiper.css?v=1.4" rel="stylesheet">

    <link href="css/custom.css?v=1.6" rel="stylesheet">

    <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-0SDH1P66SY"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-0SDH1P66SY');
  </script>
</head>

<body id="body">

<div role="main" class="main-cover">

  <div  class="carousel slide" data-ride="carousel" id="foto-hr"></div>

  
</div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/4aba989b05.js"></script>
    <script src="js/swiper-dar.js"></script>
    <script src="js/custom.js?v=9.8.1"></script>
    <script>
      $(document).ready(function() {
      initPhotoHr(<?php echo $photo_get; ?>,'<?php echo $capitulo_get; ?>',<?php echo $capitulo_id_get; ?>);
    });
    </script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    -->
  </body>
</html>