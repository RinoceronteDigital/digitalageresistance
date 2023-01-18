<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

    <title>Digital-Age Resistance</title>

    <!-- Custom styles for this template -->
    <link href="css/cover.css?v=1.1" rel="stylesheet">
    <link href="css/custom.css?v=1.1" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

</head>

<body >
<?php 
$versionPortada = rand(1, 5);
//$portadaHome = ;
?>
<div class="cover-container-<?php echo $versionPortada; ?> d-flex w-100 h-50 mx-auto flex-column" id="coverHome" >

  <header class="masthead mb-auto">
      <div id="mySidebar" class="sidebar ">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

      <a href="buy-book.php" onclick="closeNav()"><button type="button" class="btn btn-dark btn-lg btn-block shadow mt-5 boton3d">Buy book</button></a>
      
      <a href="#" onclick="closeNav()"><button type="button" class="btn btn-dark btn-lg btn-block shadow mt-5 boton3d">About</button></a>
      
      <a href="#" onclick="closeNav()"><button type="button" class="btn btn-dark btn-lg btn-block shadow mt-5 boton3d">News and updates</button></a>
      
      <a href="/#homeGallery" data-id="homeGallery" onclick="closeNav()"><button type="button" class="btn btn-dark btn-lg btn-block shadow mt-5 boton3d">Gallery</button></a>
      
    </div>

    <div class="inner navbar " style="z-index: 1030; display: block;">
      <nav class="nav nav-masthead" id="menuIcon"><span id="icondownload"></span>   <button type="button" class="openbtn btn btn-link" onclick="openNav()">&#9776; Menu</button>
      </nav>
      <a href="/" title="Homepage"><h4 class="masthead-brand" id="book" style="max-width: 60%;"></h4></a>
      
    </div>
  </header>

  <main role="main" class="inner cover text-center">
    <h1 class="cover-heading">Buy Book</h1>
    <p class="lead"></p>
  </main>

  <footer class="mastfoot mt-auto">
  </footer>

</div>

<div role="main" class="container-fluid">

  <div class="container my-4 mt-5">
    <div class="card-deck mb-3 text-center">

    <div class="card mb-4 shadow-sm">
      <div class="card-header" style="background-color: rgb(152, 8, 26, 1);">
        <a href="https://www.indiebound.org/indie-store-finder" target="_blank"><img src="img/buy/IB-logo-header-b.png" class="img-fluid" style="max-height: 60px;" alt=""></a>
      </div>
      <div class="card-body">
        <p class="mt-3 mb-4"><b><u>U.S.-based, Independent Bookstores:</u></b> this is a nifty tool designed to help you find the closest U.S.-based, indie bookstores, stemming from an initiative by the "American Booksellers Association," from which you can have the book ordered. A good option for folks wanting to support their local and indie bookstores without being in a rush to obtain the book.</p>
        <a href="https://www.indiebound.org/indie-store-finder" target="_blank"><button type="button" class="btn btn-lg btn-block btn-dark">Buy</button></a>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-header" style="background-color: rgb(255, 255, 255, 1);">
        <a href="https://www.booksellers.org.uk/bookshopsearch.aspx" target="_blank"><img src="img/buy/newbalogo.png" class="img-fluid" style="max-height: 60px;" alt=""></a>
      </div>
      <div class="card-body">
        <p class="mt-3 mb-4"><b><u>U.K. and Ireland-based, Independent Bookstores:</u></b> this is another nifty tool designed to help you find the closest U.K.and/or Ireland-based, indie bookstores affiliated with the "Booksellers Association," from which you can have the book ordered. A good option for folks wanting to support their local and indie bookstores without being in a rush to obtain the book. </p>
        <a href="https://www.booksellers.org.uk/bookshopsearch.aspx" target="_blank"><button type="button" class="btn btn-lg btn-block btn-dark">Buy</button></a>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-header" style="background-color: rgb(255, 255, 255, 1);">
        <a href="https://www.booksellers.org.uk/bookshopsearch.aspx" target="_blank"><img src="img/buy/newbalogo.png" class="img-fluid" style="max-height: 60px;" alt=""></a>
      </div>
      <div class="card-body">
        <p class="mt-3 mb-4"><b><u>Australia-based, Independent Bookstores:</u></b> this is a search page designed to help you find the closest Australian-based, indie bookstore affiliated with the "Leading Edge Books," with over a hundred different local bookstores from which you can have the book ordered. A good option for folks wanting to support their local and indie bookstores without being in a rush to obtain the book. </p>
        <a href="https://www.booksellers.org.uk/bookshopsearch.aspx" target="_blank"><button type="button" class="btn btn-lg btn-block btn-dark">Buy</button></a>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-header" style="background-color: rgb(255, 255, 255, 1);">
        <a href="https://www.routledge.com/Digital-Age-Resistance-Journalism-Social-Movements-and-the-Media-Dependence/Kennis/p/book/9780367638511" target="_blank"><img src="img/buy/routledge-logo.png" class="img-fluid" style="max-height: 60px;" alt=""></a>
      </div>
      <div class="card-body">
        <p class="mt-3 mb-4"><b><u>Routledge:</u></b> this buying option allows you to buy directly from the publisher. For those concerned about the discomforting state-of-affairs with the publishing industry in general and also are not in a rush to have the book. Also, particularly buyers in the U.K. can receive the book from Routledge without much delay. Those based in other countries, especially if it is an anglo-speaking one, shouldn't experience much delay either.</p>
        <a href="https://www.routledge.com/Digital-Age-Resistance-Journalism-Social-Movements-and-the-Media-Dependence/Kennis/p/book/9780367638511" target="_blank"><button type="button" class="btn btn-lg btn-block btn-dark">Buy</button></a>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-header" style="background-color: rgb(255, 255, 255, 1);">
        <a href="mailto:andrew.kennis@gmail.com" target="_blank"><h3 class="h3 text-body">Digital-Age Resistance</h3></a>
      </div>
      <div class="card-body">
        <p class="mt-3 mb-4"><b><u>Directly from the Author:</u></b> I'm willing, able and plenty happy to help arrange getting you a book at a discounted price if we're in the same vicinity. I can even write and sign a note personally to you too, if you so desire. Please feel free to drop me a line!</p>
        <a href="mailto:andrew.kennis@gmail.com" target="_blank"><button type="button" class="btn btn-lg btn-block btn-dark">Buy</button></a>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-header" style="background-color: rgb(15, 19, 25, 1);">
        <a href="https://www.amazon.com/Digital-Age-Resistance-Journalism-Dependence-Internationalizing/dp/0367638517" target="_blank"><img src="img/buy/amazon-logo.png" class="img-fluid" style="max-height: 60px;" alt=""></a>
      </div>
      <div class="card-body">
        <p class="mt-3 mb-4"><b><u>Amazon:</u></b> this is the trillion-dollar valued conglomerate option which is the best choice for anyone in a rush of any sort to obtain the book but the worst option in terms of supporting book publishing in general. Nonetheless, there is no quicker way to obtain the book and have it get to you than this. It also may be a decent option for interested readers in countries where English isn't the dominant language.</p>
        <a href="https://www.amazon.com/Digital-Age-Resistance-Journalism-Dependence-Internationalizing/dp/0367638517" target="_blank"><button type="button" class="btn btn-lg btn-block btn-dark">Buy</button></a>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-header" style="background-color: rgb(255, 255, 255, 1);">
        <a href="https://books.google.com.mx/books/about/Digital_Age_Resistance.html?id=ruexzQEACAAJ&redir_esc=y" target="_blank"><img src="img/buy/google-books.png" class="img-fluid" style="max-height: 60px;" alt=""></a>
      </div>
      <div class="card-body">
        <p class="mt-3 mb-4"><b><u>Google:</u></b> this is the other, trillion-dollar valued conglomerate option, which is another means to buy the book for anyone who may prefer it.</p>
        <a href="https://books.google.com.mx/books/about/Digital_Age_Resistance.html?id=ruexzQEACAAJ&redir_esc=y" target="_blank"><button type="button" class="btn btn-lg btn-block btn-dark">Buy</button></a>
      </div>
    </div>

  </div>
  </div>
  
</div>

<?php include("footer.php");?>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="js/jquery.slim.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/4aba989b05.js"></script>
    <script src="js/custom.js"></script>

<script>
  initPhotoHome();
</script>
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    -->
  </body>
</html>