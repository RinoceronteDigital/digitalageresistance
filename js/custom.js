/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  //document.getElementById("mySidebar").style.width = "540px";
  $('.sidebar').addClass('anchomenu');
  //document.getElementById("mySidebar").addClass('anchomenu');
  document.getElementById("main").style.marginRight = "0";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  //document.getElementById("mySidebar").style.width = "0";
  //document.getElementById("mySidebar").removeClass('anchomenu');
  $('.sidebar').removeClass('anchomenu');
  document.getElementById("main").style.marginRight = "0";
}

function initPhotoHome() {
const requestURL = 'js/data-photos-b-5.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const datosf = request.response;
  bookHeader(datosf);
  homeGallery(datosf);
}
  function bookHeader(jsonObj) {
    if (jsonObj['titleWeb'] == '') {
      document.getElementById("titleWeb").innerHTML = jsonObj['book'];
    } else {
      document.getElementById("titleWeb").innerHTML = jsonObj['titleWeb'];
    }
    document.getElementById("book").innerHTML = jsonObj['book']+'<br><span>'+jsonObj['caption']+'<br><em>by '+jsonObj['author']+'</em></span>';
    document.getElementById("blockHomeuno").innerHTML = jsonObj['blockHomeuno'];
    document.getElementById("blockHomedos").innerHTML = jsonObj['blockHomedos'];
    document.getElementById("blockHometres").innerHTML = jsonObj['blockHometres'];
  }
  function homeGallery(jsonObj) {
    const photosHome = jsonObj['capitulos'];

    for (var i = 0; i < photosHome.length; i++) {
       const photosCapitulo = photosHome[i].photos;
       for (var e = 0; e < photosCapitulo.length; e++) {

        var carCap = '';
        var textCap = '';

        // TEXTOS PARA HOME CUADROS 
        if (photosCapitulo[e].capitulo=='M') {
          carCap = 'carCap-M.jpg'; 
          textCap = 'These lead photos were personally picked and curated by the author himself from among all images associated with the book, whether from the print edition or online-only photos. They were selected on the basis of exceptional photojournalism including several, award-winning World Press photos (see John Moore’s and Matthew Abbott’s photo).';
        } 
        else if (photosCapitulo[e].capitulo=='I') {
          carCap = 'carCap-I.jpg'; 
          textCap = 'This photo section features images from the introduction of the book of the #BlackLivesMatter / #BLM movement as well of the New York Times headquarters. Additional, online-only images related to the same themes of this chapter are also included in this photo section for the #ClimateStrike and #BLM movements.';
        } 
        else if (photosCapitulo[e].capitulo=='1') {
          carCap = 'carCap-1.jpg'; 
          textCap = 'This photo section features a lone image from the first chapter of East Timor. A few tables from the chapter are pending an upload and their eventual inclusion. Finally, there is a separate photo section that can be found here which has additional images showing East Timor’s plight from its 1999, tragic but successful struggle for self-determination and independence.';
        } 
        else if (photosCapitulo[e].capitulo=='2') {
          carCap = 'carCap-2.jpg'; 
          textCap = 'This photo section features images from the introduction of the book of the #BlackLivesMatter / #BLM movement as well of the New York Times headquarters. Additional, online-only images related to the same themes of this chapter are also included in this photo section for the #ClimateStrike and #BLM movements.';
        } 
        else if (photosCapitulo[e].capitulo=='3') {
          carCap = 'carCap-3.jpg'; 
          textCap = 'Chapter 3 is focused on immigration and thus has more rich and award-winning photojournalism than perhaps any other photo section or related chapter. One of the photos shot by Getty photog John Moore won a World Press award (Moore has won multiple times) for this captivating image which went viral and was featured on the cover of Time. There are other jaw-dropping images in this section too, including one by Reuters photog Adrees Latiff.';
        } 
        else if (photosCapitulo[e].capitulo=='4') {
          carCap = 'carCap-4.jpg'; 
          textCap = 'The photo section for chapter 4 is full of images, sometimes shot with sophisticated drone techniques, of mass movement protests stemming from the explosion of resistance and activism from all over the world in 2019 <a href="" data-toggle="modal" data-target="#readmore_chapter4">(continued...)';
        } 
        else if (photosCapitulo[e].capitulo=='5') {
          carCap = 'carCap-5.jpg'; 
          textCap = 'Chapter 5 on climate change, similar to Chapter 3 on immigration, is another chapter which has Word Press award-winning photos featured in it. Several shot by Matthew Abbott for the New York Times capture the horrifying moments during the Australian bushfires of 2020, widely seen by scientists as having been exacerbated to record-breaking levels by climate change <a href="" data-toggle="modal" data-target="#readmore_chapter5">(continued...)';
        } 
        else if (photosCapitulo[e].capitulo=='6') {
          carCap = 'carCap-6.jpg'; 
          textCap = 'This chapter and photo section features images from the recent pandemic era. A comparative case-study was undertaken in this chapter sizing up both NYT as well as Fox News coverage of the #CancelRent movement and the President Trump-inspired, #Liberate / #OperationGridlock resistance of 2020. Photos from the movement as well as the resistance can be found herein.';
        } 
        else if (photosCapitulo[e].capitulo=='7') {
          carCap = 'carCap-7.jpg'; 
          textCap = 'Former President Donald Trump recently announced his campaign for re-election and whether the mainstream news media will play again (or not) is what can be sized up by reading the book’s case-study of his 2016 campaign. A lone photo appearing in the book as well as a handful of online-only images, are contained in this photo section.';
        } 
        else if (photosCapitulo[e].capitulo=='8') {
          carCap = 'carCap-8.jpg'; 
          textCap = 'This chapter is a policy study that fully explores the ongoing crisis to professional journalism in the public policy context of the U.S.-based Federal Communications Commission (FCC) having terminated network neutrality protections during the Trump administration. There are photos from the fight to save the internet featured herein.';
        } 
        else if (photosCapitulo[e].capitulo=='9') {
          carCap = 'carCap-9.jpg'; 
          textCap = 'Both the #OccupyWallStreet (US and global) and #YoSoy132 (Mexico) mass resistance movements happened within a year of each other and were monumental events at the time. In particular, #OWS had some exceptional photojournalism undertaken while #YoSoy132, which didn’t garner much attention beyond its borders, had less so. Nevertheless, related photos to both movements are featured in this photo section with professional-grade photojournalism thanks to shots from photogs working for Getty, Reuters and beyond.';
        } 
        else if (photosCapitulo[e].capitulo=='10') {
          carCap = 'carCap-10.jpg'; 
          textCap = 'This is one of two photo sections and book chapters focusing on immigration and is thus chock full of exceptional photojournalism. Both pending online-only images and print-edition photos comprise an array of captivating and award-winning photography, including from the largest, non-election-covered, MSM-story at the turn-of-the-century, outpacing even coverage given to the O.J. Simpson trial and the death of Princess Diana: that, of course, of the Elian Gonzalez saga <a href="" data-toggle="modal" data-target="#readmore_chapter10">(continued...)';
        } 
        else if (photosCapitulo[e].capitulo=='11') {
          carCap = 'carCap-11.jpg'; 
          textCap = 'Chapter 11';
        } 
        else if (photosCapitulo[e].capitulo=='12') {
          carCap = 'carCap-12.jpg'; 
          textCap = 'Chapter 12';
        } 
        else if (photosCapitulo[e].capitulo=='C') {
          carCap = 'carCap-C.jpg'; 
          textCap = 'Chapter C';
        } 
        else if (photosCapitulo[e].capitulo=='A') {
          carCap = 'carCap-A.jpg'; 
          textCap = 'Chapter A';
        } 
        else if (photosCapitulo[e].capitulo=='13') {
          carCap = 'carCap-13.jpg'; 
          textCap = 'Chapter 13';
        } 

        if (photosCapitulo[e].id == 1) {
          document.getElementById("homeGallery").innerHTML += '<div class="col-md-4 col-m"><div class="publication p-h" style="background: url(img/'+carCap+') center center no-repeat; background-size: cover;"><div class="publication-hover"><div class="publication-textCar">'+textCap+'</div></div></div></div><div class="col-md-4 col-m"><div class="publication p-h" style="background: url(img/'+photosCapitulo[e].photo+') center center no-repeat; background-size: cover;"><a href="gallery?photo='+photosCapitulo[e].id+'&capitulo='+photosCapitulo[e].capitulo+'&capituloId='+photosHome[i].capitulo+'"><div class="publication-hover"><div class="publication-title">'+photosCapitulo[e].lugar+',<br><span>'+photosCapitulo[e].fecha+'</span></div></div></a></div></div>';
        } 
        else {
          document.getElementById("homeGallery").innerHTML += '<div class="col-md-4 col-m"><div class="publication p-h" style="background: url(img/'+photosCapitulo[e].photo+') center center no-repeat; background-size: cover;"><a href="gallery?photo='+photosCapitulo[e].id+'&capitulo='+photosCapitulo[e].capitulo+'&capituloId='+photosHome[i].capitulo+'"><div class="publication-hover"><div class="publication-title">'+photosCapitulo[e].lugar+',<br><span>'+photosCapitulo[e].fecha+'</span></div></div></a></div></div>';
        }
      }
    }
  } 
}

//######## INICIO FUNCION PARA GALERIA 
function initPagina(fotoSelecc,cap,capId) {
  const requestURL = 'js/data-photos-b-5.json';
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    const datosg = request.response;
    bookHeader(datosg);
    dataPagina(datosg,fotoSelecc);
  }

  function bookHeader(jsonObj) {
    document.getElementById("book").innerHTML = jsonObj['book']+'<br><span>'+jsonObj['caption']+'<br><em>by '+jsonObj['author']+'</em></span>';
  }

  //######### FUNCION OBJETO PARA EXTRARER DATOS Y CREAR CARRUSELES
  function dataPagina(jsonObj,fotoSelecc) {
    const photosPagina = jsonObj['capitulos'];

    //######### FOR DATOS Y BUCLE
    for (var i = 0; i < photosPagina.length; i++) {

       const photosCapitulo = photosPagina[i].photos;

       for (var e = 0; e < photosCapitulo.length; e++) {
        

          if (photosCapitulo[e].print_online == 1) { // FOTOS SOLO ONLINE
              if (photosCapitulo[e].capitulo == 'M') {
                var capdeM = photosCapitulo[e].photo.split('-'); 
                var capdImagen = 'This online-only image has been thematically grouped with other images contained in <b>Chapter '+capdeM[0]+' </b>of the print edition of the book.';
              } else {
                var capdImagen = 'This online-only image has been thematically grouped with other images contained in <b>Chapter '+photosCapitulo[e].capitulo+' </b>of the print edition of the book.';
              }
              var imageOnline = 'Online-only ';
          } 
          else if (photosCapitulo[e].print_online == 0) { // FOTOS DE LIBRO
              if (photosCapitulo[e].capitulo == 'M') {
                var capdeM = photosCapitulo[e].photo.split('-'); 
                var capdImagen = 'This image is contained in <b>Chapter '+capdeM[0]+' </b>of the print edition of the book.';
              } else {
                var capdImagen = 'This image is contained in <b>Chapter '+photosCapitulo[e].capitulo+' </b>of the print edition of the book.';
              }
              var imageOnline = '';
          }
          else if (photosCapitulo[e].print_online == 2) { // FOTOS DONADAS
            if (photosCapitulo[e].capitulo == 'M') {
              var capdeM = photosCapitulo[e].photo.split('-'); 
              var capdImagen = 'This image is contained in <b>Chapter '+capdeM[0]+' </b>of the print edition of the book.';
            } else {
              var capdImagen = 'This image is contained in <b>Chapter '+photosCapitulo[e].capitulo+' </b>of the print edition of the book.';
            }
            var imageOnline = '';
        }

         //###### carrusel por capitulo
          if (cap == photosCapitulo[e].capitulo) {
                document.getElementById("bloqueswipercapitulo").innerHTML += '<div class="swiper-slide"><a href="gallery?photo='+photosCapitulo[e].id+'&capitulo='+photosCapitulo[e].capitulo+'&capituloId='+photosPagina[i].capitulo+'"><img src="img/'+photosCapitulo[e].photo+'" alt="" onmouseover="photoCarouselCap(this)"  onmouseout="photowCarouselCapnor(this)"></a></div>';
          }
          //###### carrusel por capitulo fin
         //###### CARRUSEL GENERAL
          document.getElementById("bloqueswipergeneral").innerHTML += '<div class="swiper-slide bg-light" onmouseover="photoweb(this)"  onmouseout="photowebnor(this)"><div class="photo-hover-carousel__item"><a href="gallery?photo='+photosCapitulo[e].id+'&capitulo='+photosCapitulo[e].capitulo+'&capituloId='+photosPagina[i].capitulo+'"><div class="photo-hover-carousel__item-image img-center js-img-with-txt js-bg-color-el swiper-lazy swiper-lazy-loaded" style="background-size: cover; background-image: url(img/'+photosCapitulo[e].photo+'); background-position: center center; background-repeat: no-repeat no-repeat;" title="'+photosCapitulo[e].fotografo+' / '+photosCapitulo[e].lugar+'"><div class="photo-hover-carousel__item-text"><p class="photo-hover-carousel__item-small-label">'+imageOnline+'Image '+photosCapitulo[e].seccion+': '+photosCapitulo[e].lugar+'</p><p class="photo-hover-carousel__item-large-label">'+photosCapitulo[e].fecha+'</p></div></div></a></div></div>';
          //###### CARRUSEL GENERAL FIN
          //##### Datos de la foto start
          if (photosPagina[i].capitulo == capId && photosCapitulo[e].id == fotoSelecc) {

            var prevCap = 0;
            var nextCap = 0;

            var prevCapitulolibro = '';
            var nextCapitulolibro = '';

            var prevPhoto = 0;
            var nextPhoto = 0;

            var ultimaFotoCapituloAnterior = 0;
            var primerafotoCapituloSiguiente = 1;

            if (photosPagina[i].capitulo==1) {
              // ### BLOQUE DE FOTOS INICIO
              if (photosCapitulo.length==1) {
                prevCap = Number(photosPagina.length);
                prevCapId = prevCap - 1;
                prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                nextCap = Number(photosPagina[i].capitulo) + 1;
                nextCapId = nextCap - 1;
                nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                prevPhoto = photosPagina[prevCapId].photos.length;
                nextPhoto = 1;
                  console.log('Capitulo 1, Cap Libro M, 1 Foto, Foto 1');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
              } else if (photosCapitulo.length==2) {
                if (Number(photosCapitulo[e].id)==1) {
                  prevCap = Number(photosPagina.length);
                  prevCapId = prevCap - 1;
                  prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                  nextCap = Number(photosPagina[i].capitulo);
                  nextCapitulolibro = photosCapitulo[e].capitulo;
                  prevPhoto = photosPagina[prevCapId].photos.length;
                  nextPhoto = 2;
                  console.log('Capitulo 1, Cap Libro M, 2 Fotos, Foto 1');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                } else if (Number(photosCapitulo[e].id)==2) {
                  prevCap = Number(photosPagina[i].capitulo);
                  prevCapitulolibro = photosCapitulo[e].capitulo;
                  nextCap = Number(photosPagina[i].capitulo) + 1;
                  nextCapId = nextCap - 1;
                  nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                  prevPhoto = 1;
                  nextPhoto = 1;
                  console.log('Capitulo 1, Cap Libro M, 2 Fotos, Foto 2');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                }
              } else {
                if (photosCapitulo[e].id == 1) {
                  prevCap = Number(photosPagina.length);
                  prevCapId = prevCap - 1;
                  prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                  nextCap = Number(photosPagina[i].capitulo);
                  nextCapitulolibro = photosCapitulo[e].capitulo;
                  prevPhoto = photosPagina[prevCapId].photos.length;
                  nextPhoto = 2;
                  console.log('Capitulo 1, Cap Libro M, Mas de 2 Fotos, Foto 1');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                } else if (photosCapitulo[e].id > 1 && photosCapitulo[e].id < photosCapitulo.length) {
                  prevCap = Number(photosPagina[i].capitulo);
                  prevCapId = prevCap - 1;
                  prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                  nextCap = Number(photosPagina[i].capitulo);
                  nextCapId = nextCap - 1;
                  nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                  prevPhoto = Number(photosCapitulo[e].id) - 1;
                  nextPhoto = Number(photosCapitulo[e].id) + 1;
                  console.log('Capitulo 1, Cap Libro M, Mas de 2 Fotos, Foto 2 o penultima');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                } else if (photosCapitulo[e].id == photosCapitulo.length) {
                    prevCap = Number(photosPagina[i].capitulo);
                    prevCapitulolibro = photosCapitulo[e].capitulo;
                    nextCap = Number(photosPagina[i].capitulo) + 1;
                    nextCapId = nextCap - 1;
                    nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                    prevPhoto = Number(photosCapitulo[e].id) - 1;
                    nextPhoto = 1;
                    console.log('Capitulo 1, Cap Libro M, Mas de 2 Fotos, Ultima foto');
                    console.log('prevCap '+prevCap);
                    console.log('prevCapitulolibro '+prevCapitulolibro);
                    console.log('nextCap '+nextCap);
                    console.log('nextCapitulolibro '+nextCapitulolibro);
                    console.log('prevPhoto '+prevPhoto);
                    console.log('nextPhoto '+nextPhoto); 
                }
              }
              // ### BLOQUE DE FOTOS FIN
            } else if (photosPagina[i].capitulo==photosPagina.length) {
              // ### BLOQUE DE FOTOS INICIO
              if (photosCapitulo.length==1) {
                prevCap = Number(photosPagina.length) - 1;
                prevCapId = prevCap - 1;
                prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                nextCap = 1;
                nextCapId = nextCap - 1;
                nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                prevPhoto = photosPagina[prevCapId].photos.length;
                nextPhoto = 1;
                  console.log('Ultimo Capitulo, Cap Libro C, 1 Foto, Foto 1');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
              } else if (photosCapitulo.length==2) {
                if (Number(photosCapitulo[e].id)==1) {
                  prevCap = Number(photosPagina.length) - 1;
                  prevCapId = prevCap - 1;
                  prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                  nextCap = Number(photosPagina[i].capitulo);
                  nextCapitulolibro = photosCapitulo[e].capitulo;
                  prevPhoto = photosPagina[prevCapId].photos.length;
                  nextPhoto = 2;
                  console.log('Ultimo Capitulo, Cap Libro C, 2 Fotos, Foto 1');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                } else if (Number(photosCapitulo[e].id)==2) {
                  prevCap = Number(photosPagina[i].capitulo);
                  prevCapitulolibro = photosCapitulo[e].capitulo;
                  nextCap = 1;
                  nextCapId = nextCap - 1;
                  nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                  prevPhoto = 1;
                  nextPhoto = 1;
                  console.log('Ultimo Capitulo, Cap Libro C, 2 Fotos, Foto 2');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                }
              } else {
                if (photosCapitulo[e].id == 1) {
                  prevCap = Number(photosPagina.length) - 1;
                  prevCapId = prevCap - 1;
                  prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                  nextCap = Number(photosPagina[i].capitulo);
                  nextCapitulolibro = photosCapitulo[e].capitulo;
                  prevPhoto = photosPagina[prevCapId].photos.length;
                  nextPhoto = 2;
                  console.log('Ultimo Capitulo, Cap Libro C, Mas de 2 Fotos, Foto 1');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                } else if (photosCapitulo[e].id > 1 && photosCapitulo[e].id < photosCapitulo.length) {
                  prevCap = Number(photosPagina[i].capitulo);
                  prevCapId = prevCap - 1;
                  prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                  nextCap = Number(photosPagina[i].capitulo);
                  nextCapId = nextCap - 1;
                  nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                  prevPhoto = Number(photosCapitulo[e].id) - 1;
                  nextPhoto = Number(photosCapitulo[e].id) + 1;
                  console.log('Ultimo Capitulo, Cap Libro C, Mas de 2 Fotos, Foto 2 o penultima');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                } else if (photosCapitulo[e].id == photosCapitulo.length) {
                    prevCap = Number(photosPagina[i].capitulo);
                    prevCapitulolibro = photosCapitulo[e].capitulo;
                    nextCap = 1;
                    nextCapId = nextCap - 1;
                    nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                    prevPhoto = Number(photosCapitulo[e].id) - 1;
                    nextPhoto = 1;
                    console.log('Ultimo Capitulo, Cap Libro C, Mas de 2 Fotos, Ultima foto');
                    console.log('prevCap '+prevCap);
                    console.log('prevCapitulolibro '+prevCapitulolibro);
                    console.log('nextCap '+nextCap);
                    console.log('nextCapitulolibro '+nextCapitulolibro);
                    console.log('prevPhoto '+prevPhoto);
                    console.log('nextPhoto '+nextPhoto); 
                }
              }
              // ### BLOQUE DE FOTOS FIN
            } else {
              // ### BLOQUE DE FOTOS INICIO
              if (photosCapitulo.length==1) {
                prevCap = Number(photosPagina[i].capitulo) - 1;
                prevCapId = prevCap - 1;
                prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                nextCap = Number(photosPagina[i].capitulo) + 1;
                nextCapId = nextCap - 1;
                nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                prevPhoto = photosPagina[prevCapId].photos.length;
                nextPhoto = 1;
                console.log('Capitulo 2 a penultimo, Cap Libro '+photosCapitulo[e].capitulo+', 1 Foto, Foto 1');
                console.log('prevCap '+prevCap);
                console.log('prevCapitulolibro '+prevCapitulolibro);
                console.log('nextCap '+nextCap);
                console.log('nextCapitulolibro '+nextCapitulolibro);
                console.log('prevPhoto '+prevPhoto);
                console.log('nextPhoto '+nextPhoto);
              } else if (photosCapitulo.length==2) {
                if (Number(photosCapitulo[e].id)==1) {
                  prevCap = Number(photosPagina[i].capitulo) - 1;
                  prevCapId = prevCap - 1;
                  prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                  nextCap = Number(photosPagina[i].capitulo);
                  nextCapId = nextCap - 1;
                  nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                  prevPhoto = photosPagina[prevCapId].photos.length;
                  nextPhoto = 2;
                  console.log('Capitulo 2 a penultimo, Cap Libro '+photosCapitulo[e].capitulo+', 2 Fotos, Foto 1');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                } else if (Number(photosCapitulo[e].id)==2) {
                  prevCap = Number(photosPagina[i].capitulo);
                  prevCapId = prevCap - 1;
                  prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                  nextCap = Number(photosPagina[i].capitulo) + 1;
                  nextCapId = nextCap - 1;
                  nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                  prevPhoto = 1;
                  nextPhoto = 1;
                  console.log('Capitulo 2 a penultimo, Cap Libro '+photosCapitulo[e].capitulo+', 2 Fotos, Foto 2');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                }
              } else {
                if (photosCapitulo[e].id == 1) {
                  prevCap = Number(photosPagina[i].capitulo) - 1;
                  prevCapId = prevCap - 1;
                  prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                  nextCap = Number(photosPagina[i].capitulo);
                  nextCapId = nextCap - 1;
                  nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                  prevPhoto = photosPagina[prevCapId].photos.length;
                  nextPhoto = 2;
                  console.log('Capitulo 2 a penultimo, Cap Libro '+photosCapitulo[e].capitulo+', Mas de 2 Fotos, Foto 1');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                } else if (photosCapitulo[e].id > 1 && photosCapitulo[e].id < photosCapitulo.length) {
                  prevCap = Number(photosPagina[i].capitulo);
                  prevCapId = prevCap - 1;
                  prevCapitulolibro = photosPagina[prevCapId].photos[0].capitulo;
                  nextCap = Number(photosPagina[i].capitulo);
                  nextCapId = nextCap - 1;
                  nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                  prevPhoto = Number(photosCapitulo[e].id) - 1;
                  nextPhoto = Number(photosCapitulo[e].id) + 1;
                  console.log('Capitulo 2 a penultimo, Cap Libro '+photosCapitulo[e].capitulo+', Mas de 2 Fotos, Foto 2 o penultima');
                  console.log('prevCap '+prevCap);
                  console.log('prevCapitulolibro '+prevCapitulolibro);
                  console.log('nextCap '+nextCap);
                  console.log('nextCapitulolibro '+nextCapitulolibro);
                  console.log('prevPhoto '+prevPhoto);
                  console.log('nextPhoto '+nextPhoto);
                } else if (photosCapitulo[e].id == photosCapitulo.length) {
                    prevCap = Number(photosPagina[i].capitulo);
                    prevCapitulolibro = photosCapitulo[e].capitulo;
                    nextCap = Number(photosPagina[i].capitulo) + 1;
                    nextCapId = nextCap - 1;
                    nextCapitulolibro = photosPagina[nextCapId].photos[0].capitulo;
                    prevPhoto = Number(photosCapitulo[e].id) - 1;
                    nextPhoto = 1;
                    console.log('Capitulo 2 a penultimo, Cap Libro '+photosCapitulo[e].capitulo+', Mas de 2 Fotos, Ultima foto');
                    console.log('prevCap '+prevCap);
                    console.log('prevCapitulolibro '+prevCapitulolibro);
                    console.log('nextCap '+nextCap);
                    console.log('nextCapitulolibro '+nextCapitulolibro);
                    console.log('prevPhoto '+prevPhoto);
                    console.log('nextPhoto '+nextPhoto); 
                }
              }
              // ### BLOQUE DE FOTOS FIN
            }

            var ajusteFoto = '';
            if (photosCapitulo[e].id == 2 && photosCapitulo[e].capitulo == 'M') {
              ajusteFoto = 'background-position-x: 60%;';
            } 
            else if (photosCapitulo[e].id == 3 && photosCapitulo[e].capitulo == 'M') {
              ajusteFoto = 'background-position-x: 40%;';
            } 
            else if (photosCapitulo[e].id == 5 && photosCapitulo[e].capitulo == 'M') {
              ajusteFoto = 'background-position-x: 25%;';
            } 
            else if (photosCapitulo[e].id == 6 && photosCapitulo[e].capitulo == 'M') {
              ajusteFoto = 'background-position-x: 63%;';
            } 
            else if (photosCapitulo[e].id == 7 && photosCapitulo[e].capitulo == 'M') {
              ajusteFoto = 'background-position-x: 70%;';
            } 
            else if (photosCapitulo[e].id == 8 && photosCapitulo[e].capitulo == 'M') {
              ajusteFoto = 'background-position-x: 70%;';
            } 
            else if (photosCapitulo[e].id == 11 && photosCapitulo[e].capitulo == 'M') {
              ajusteFoto = 'background-position-x: 15%;';
            } 
            else if (photosCapitulo[e].id == 13 && photosCapitulo[e].capitulo == 'M') {
              ajusteFoto = 'background-position-x: 30%;';
            } 
            else if (photosCapitulo[e].id == 15 && photosCapitulo[e].capitulo == 'M') {
              ajusteFoto = 'background-position-x: 30%;';
            } 
            else if (photosCapitulo[e].id == 2 && photosCapitulo[e].capitulo == 'I') {
              ajusteFoto = 'background-position-x: 30%;';
            } 
            else if (photosCapitulo[e].id == 14 && photosCapitulo[e].capitulo == 'M') {
              ajusteFoto = 'background-position-x: 35%;';
            } 
            else if (photosCapitulo[e].id == 3 && photosCapitulo[e].capitulo == 'I') {
              ajusteFoto = 'background-position-x: 28%;';
            } 
            else if (photosCapitulo[e].id == 2 && photosCapitulo[e].capitulo == 2) {
              //ajusteFoto = 'background-position-x: 60%;';
            } 
            else if (photosCapitulo[e].id == 1 && photosCapitulo[e].capitulo == 3) {
              ajusteFoto = 'background-position-x: 63%;';
            } 
            else if (photosCapitulo[e].id == 3 && photosCapitulo[e].capitulo == 3) {
              ajusteFoto = 'background-position-x: 60%;';
            } 
            else if (photosCapitulo[e].id == 4 && photosCapitulo[e].capitulo == 3) {
              ajusteFoto = 'background-position-x: 60%;';
            } 
            else if (photosCapitulo[e].id == 6 && photosCapitulo[e].capitulo == 3) {
              ajusteFoto = 'background-position-x: 45%;';
            } 
            else if (photosCapitulo[e].id == 8 && photosCapitulo[e].capitulo == 3) {
              ajusteFoto = 'background-position-x: 25%;';
            } 
            else if (photosCapitulo[e].id == 1 && photosCapitulo[e].capitulo == 4) {
              ajusteFoto = 'background-position-x: 70%;';
            } 
            else if (photosCapitulo[e].id == 3 && photosCapitulo[e].capitulo == 4) {
              ajusteFoto = 'background-position-x: 70%;';
            } 
            else if (photosCapitulo[e].id == 5 && photosCapitulo[e].capitulo == 4) {
              ajusteFoto = 'background-position-x: 35%;';
            } 
            else if (photosCapitulo[e].id == 3 && photosCapitulo[e].capitulo == 5) {
              ajusteFoto = 'background-position-x: 40%;';
            } 
            else if (photosCapitulo[e].id == 4 && photosCapitulo[e].capitulo == 5) {
              ajusteFoto = 'background-position-x: 25%;';
            } 
            else if (photosCapitulo[e].id == 5 && photosCapitulo[e].capitulo == 5) {
              ajusteFoto = 'background-position-x: 70%;';
            } 
            else if (photosCapitulo[e].id == 6 && photosCapitulo[e].capitulo == 5) {
              ajusteFoto = 'background-position-x: 30%;';
            } 
            else if (photosCapitulo[e].id == 8 && photosCapitulo[e].capitulo == 5) {
              ajusteFoto = 'background-position-x: 20%;';
            } 
            else if (photosCapitulo[e].id == 1 && photosCapitulo[e].capitulo == 6) {
              ajusteFoto = 'background-position-x: 15%;';
            } 
            else if (photosCapitulo[e].id == 3 && photosCapitulo[e].capitulo == 6) {
              ajusteFoto = 'background-position-x: 60%;';
            } 
            else if (photosCapitulo[e].id == 1 && photosCapitulo[e].capitulo == 7) {
              ajusteFoto = 'background-position-x: 30%;';
            } 
            else if (photosCapitulo[e].id == 1 && photosCapitulo[e].capitulo == 8) {
              ajusteFoto = 'background-position-x: 45%;';
            } 
            else if (photosCapitulo[e].id == 3 && photosCapitulo[e].capitulo == 9) {
              ajusteFoto = 'background-position-x: 70%;';
            } 
            else if (photosCapitulo[e].id == 5 && photosCapitulo[e].capitulo == 9) {
              ajusteFoto = 'background-position-x: 60%;';
            } 
            else if (photosCapitulo[e].id == 1 && photosCapitulo[e].capitulo == 10) {
              ajusteFoto = 'background-position-x: 75%;';
            } 
            else if (photosCapitulo[e].id == 3 && photosCapitulo[e].capitulo == 12) {
              ajusteFoto = 'background-position-x: 60%;';
            } 
            else if (photosCapitulo[e].id == 1 && photosCapitulo[e].capitulo == 'C') {
              ajusteFoto = 'background-position-x: 35%;';
            } 
            else if (photosCapitulo[e].id == 2 && photosCapitulo[e].capitulo == 'C') {
              ajusteFoto = 'background-position-x: 70%;';
            } 
            else if (photosCapitulo[e].id == 3 && photosCapitulo[e].capitulo == 'C') {
              ajusteFoto = 'background-position-x: 25%;';
            } 
            else {
              ajusteFoto = '';
            }

            if (photosCapitulo[e].titlePage == '') {
              document.getElementById("tituloPagina").innerHTML = photosCapitulo[e].lugar+' / '+photosCapitulo[e].fecha+' / '+photosCapitulo[e].fotografo;
            } else {
              document.getElementById("tituloPagina").innerHTML = photosCapitulo[e].titlePage;
            }
            
            var imagenDescarga1 = photosCapitulo[e].photo.split('.');

            var imagenDescraga2 = imagenDescarga1[0];
            
            document.getElementById("icondownload").innerHTML = '<a href="img/'+photosCapitulo[e].photocover+'" download="'+imagenDescraga2+'" style="color:#fff" title="Download LoRes Photo"><i class="fa-solid fa-download" style="color:#fff"></i></a>';
            
            document.getElementById("foto-inner").innerHTML = '<div class="carousel-inner"><a href="photo-hr?photo='+photosCapitulo[e].id+'&capitulo='+photosCapitulo[e].capitulo+'&capituloId='+photosPagina[i].capitulo+'" target="_blank"><div class="carousel-item-gallery " style="background-image: url(img/'+photosCapitulo[e].photocover+');background-repeat: no-repeat;background-position: center;'+ajusteFoto+'background-size: cover;"><div class="container"><div class="carousel-caption text-left"></div></div></div></a></div><a href="gallery?photo='+prevPhoto+'&capitulo='+prevCapitulolibro+'&capituloId='+prevCap+'"><button class="carousel-control-prev" type="button" data-target="#myCarousel" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></button></a><a href="gallery?photo='+nextPhoto+'&capitulo='+nextCapitulolibro+'&capituloId='+nextCap+'"><button class="carousel-control-next" type="button" data-target="#myCarousel" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></button></a>';

            document.getElementById("foto-titulo").innerHTML = photosCapitulo[e].lugar;

            document.getElementById("foto-author").innerHTML = 'Photo by<br>'+photosCapitulo[e].fotografo;
            //document.getElementById("foto-fecha").innerHTML = photosCapitulo[e].fecha;
            
            document.getElementById("foto-descripcion").innerHTML = '<b><u>Image '+photosCapitulo[e].seccion+', '+photosCapitulo[e].lugar+', '+photosCapitulo[e].fecha+'</u></b>: '+photosCapitulo[e].descripcion;
            
            document.getElementById("foto-capitulo").innerHTML = capdImagen;
            
            document.getElementById("foto-extracto").innerHTML = photosCapitulo[e].extracto;
          }
          //##### Datos de la foto end
          
       }
    }
    //####### FOR PARA CREAR DATOS Y BUCLE FIN
  }
  //######### FUNCION OBJETO PARA EXTRARER DATOS Y CREAR CARRUSELES FIN
}
//######## FIN FUNCION PARA GALERIA



//######## INICIO FUNCION PARA GALERIA 
function initPhotoHr(fotoSelecc,cap,capId) {
  const requestURL = 'js/data-photos-b-5.json';
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    const datosg = request.response;
    dataPagina(datosg,fotoSelecc);
  }

  //######### FUNCION OBJETO PARA EXTRARER DATOS Y CREAR CARRUSELES
  function dataPagina(jsonObj,fotoSelecc) {
    const photosPagina = jsonObj['capitulos'];

    //######### FOR DATOS Y BUCLE
    for (var i = 0; i < photosPagina.length; i++) {

       const photosCapitulo = photosPagina[i].photos;

       for (var e = 0; e < photosCapitulo.length; e++) {
        
          //##### Datos de la foto start
          if (photosPagina[i].capitulo == capId && photosCapitulo[e].id == fotoSelecc) {

            if (photosCapitulo[e].titlePage == '') {
              document.getElementById("tituloPagina").innerHTML = photosCapitulo[e].lugar+' / '+photosCapitulo[e].fecha+' / '+photosCapitulo[e].fotografo;
            } else {
              document.getElementById("tituloPagina").innerHTML = photosCapitulo[e].titlePage;
            }

            document.getElementById("foto-hr").innerHTML = '<div class="carousel-inner"><div class="carousel-item-gallery " style="background-image: url(img/'+photosCapitulo[e].photocover+');background-repeat: no-repeat;background-position: center;background-size: contain;"><div class="container"><div class="carousel-caption text-left"></div></div></div></div>';

          }
          //##### Datos de la foto end
          
       }
    }
    //####### FOR PARA CREAR DATOS Y BUCLE FIN
  }
  //######### FUNCION OBJETO PARA EXTRARER DATOS Y CREAR CARRUSELES FIN
}
//######## FIN FUNCION PARA GALERIA

$('#carouselExample').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


  $('#carouselExample').carousel({ 
                interval: 2000
        });


  $(document).ready(function() {
/* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event){
      event.preventDefault();
      var content = $('.modal-body');
      content.empty();
        var title = $(this).attr("title");
        $('.modal-title').html(title);        
        content.html($(this).html());
        $(".modal-profile").modal({show:true});
    });

  });


var swiperb = new Swiper(".mySwiperb", {
        //slidesPerView: "auto",
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-paginationb",
          clickable: true,
        },
        navigation: {
          nextEl: ".btn-next-web",
          prevEl: ".btn-prev-web",
        },

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        },

      });

var swiper = new Swiper(".mySwiper", {
        //slidesPerView: "auto",
        slidesPerView: 1,
        spaceBetween: 8,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 8
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 8
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 8
          }
        },
      });

        /*#######*/
function photoweb(x) {
    x.style = "transition: width 0.9s;";
    x.style.width = "50%";
}
function photowebnor(x) {
  x.style.width = "282px";
}

function photoCarouselCap(x) {
    x.style = "transition: width 0.5s;";
    x.style.width = "106%";
}
function photowCarouselCapnor(x) {
  x.style.width = "100%";
}


function mostrarMenu(e) {
  var menu = document.getElementById("menuIcon");
  var coverHome = document.getElementById("coverHome");
  var anchoCover = coverHome.clientWidth;
  var altoCover = coverHome.clientHeight;
  var x = e.clientX;
  var y = e.clientY;
  var porX = (anchoCover / 100) * 60 ;
  var porY = (altoCover / 100) * 40 ;
  if (x > porX && y < porY){
    menu.style.display = "block";
  }
  if (x < porX || y > porY) {
    menu.style.display = "none";
  }
}

function mostrarMenuGallery(e) {
  var showhidescroll = document.getElementById("showhidescroll");
  var menu = document.getElementById("menuIcon");
  var coverHome = document.getElementById("foto-inner");
  var anchoCover = coverHome.clientWidth;
  var altoCover = coverHome.clientHeight;
  var x = e.clientX;
  var y = e.clientY;
  var porX = (anchoCover / 100) * 50 ;
  var porY = (altoCover / 100) * 50 ;
  var scrollY = (altoCover / 100) * 50 ;

  if (anchoCover > 768) {
    if (x > porX && y < porY){
      menu.style.display = "block";
    }
    if (x < porX || y > porY) {
      menu.style.display = "none";
    }
    if (y > scrollY){
      showhidescroll.style.display = "flex";
    }
    if (y < scrollY) {
      showhidescroll.style.display = "none";
    }
  }
  
}
       


  $(document).ready(function() {
    
  });






