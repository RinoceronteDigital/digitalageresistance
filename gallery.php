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

    <meta name="robots" content="Follow">
    <meta name="googlebot" content="Follow, Index">

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

<header>
  <?php include("header.php");?>
</header>

<div role="main" class="main-cover">

  <div  class="carousel slide" data-ride="carousel" id="foto-inner" onmousemove="mostrarMenuGallery(event)"></div>
  <div class="carousel-scrolldown d-md-none"><a href="#bloqueDatos" class="click-scroll" id="btnexp"><i class="fa-regular fa-circle-down click-scroll" style=""></i></a></div>

  <div class="carousel-scrolldown" id="showhidescroll" style="display:none"><a href="#bloqueDatos" class="click-scroll" id="btnexp"><i class="fa-regular fa-circle-down click-scroll" style=""></i></a></div>

  <div class="d-md-flex flex-md-equal bloque-datos" id="bloqueDatos">
    <div class="back-resistance pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div class="my-3 p-3">
        <h1 class="text-right text-white font-weight-bold" id="foto-titulo"></h1>
        <h5 class="text-right text-white" id="foto-author"></h5>
        <a href="buy-book.php" title="Buy Book"><h5 class="text-right text-white mt-5">Buy Book</h5></a>
      </div>

      <div class="p-3 bloque-titulo d-none d-md-block">
        <a href="/#homeGallery" title="Homepage"><h2 class="text-right text-muted font-weight-bold">DIGITAL-AGE RESISTANCE</h2></a>
        <a href="buy-book.php" title="Buy Book"><h5 class="text-right text-muted">Journalism, Social Movements and the Media Dependence Model<br>Andrew Kennis</h5></a>
      </div>
    </div>
    <div class="pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <p class="text-right" id="foto-fecha"><a href="index.php" class="text-secondary"><u>Back to Homepage</u></a></p>
        <p class="text-left text-muted" id="foto-capitulo"></p>
        <p class="text-left" id="foto-descripcion"></p>
      </div>
      <div class="my-3 p-3">
        <p class="text-left text-muted" id="foto-extracto"></p>
        
      </div>
      <div class="my-3 p-3"><?php include("carousel-capitulo.php");?></div>
    </div>
  </div>

  <div class="container-fluid bg-light">
      <?php include("carousel-fotos-web.php");?>
    </div>
  
</div>

<?php include("footer.php");?>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/4aba989b05.js"></script>
    <script src="js/swiper-dar.js"></script>
    <script src="js/custom.js?v=9.8.5"></script>
    <script>
      $(document).ready(function() {
      initPagina(<?php echo $photo_get; ?>,'<?php echo $capitulo_get; ?>',<?php echo $capitulo_id_get; ?>);
    });

    $(".click-scroll").on("click", function (e) {
      // 1
      e.preventDefault();
      // 2
      var href = $(this).attr("href");
      // 3
      $("html, body").animate({ scrollTop: $(href).offset().top }, 1600);
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