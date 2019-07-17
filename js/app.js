(function($){
$(function(){

      $("#exampleModal input[name=phone]").mask("+7(999)999-99-99");
        $("header #arrowBottom").click(function(){
            let nextElem = $(this).parents("header").next().offset().top;
              $("html, body").animate({scrollTop:nextElem}, 500);
        });

         $("#section-1 #arrowBottom").click(function(){
            let nextElem = $(this).parents("#section-1").next().offset().top;
              $("html, body").animate({scrollTop:nextElem}, 500);
        });


        $('.before-wrapper').on("touchmove",  function(e) {
                var offsets = $(this).offset();
                var fullWidth = $(this).width();
                var mouseX = e.changedTouches[0].pageX - offsets.left;



    if (mouseX < 0) { mouseX = 0; }
    else if (mouseX > fullWidth) { mouseX = fullWidth }


    $(this).parent().find('.comparison-slider').css({
      left: mouseX,
      transition: 'none'
    });
    $(this).find('.after-wrapper').css({
      transform: 'translateX(' + (mouseX) + 'px)',
      transition: 'none'
    });
    $(this).find('.after-image').css({
      transform: 'translateX(' + (-1*mouseX) + 'px)',
      transition: 'none'
    });

            });


  $('.before-wrapper').on( "mousemove", function(e) {
    var offsets = $(this).offset();
    var fullWidth = $(this).width();
    var mouseX = e.pageX - offsets.left;

    if (mouseX < 0) { mouseX = 0; }
    else if (mouseX > fullWidth) { mouseX = fullWidth }


    $(this).parent().find('.comparison-slider').css({
      left: mouseX,
      transition: 'none'
    });
    $(this).find('.after-wrapper').css({
      transform: 'translateX(' + (mouseX) + 'px)',
      transition: 'none'
    });
    $(this).find('.after-image').css({
      transform: 'translateX(' + (-1*mouseX) + 'px)',
      transition: 'none'
    });
  });
  $('.slider-wrapper').on( "mouseleave", function() {
    $(this).parent().find('.comparison-slider').css({
      left: '50%',
      transition: 'all .3s'
    });
    $(this).find('.after-wrapper').css({
      transform: 'translateX(50%)',
      transition: 'all .3s'
    });
    $(this).find('.after-image').css({
      transform: 'translateX(-50%)',
      transition: 'all .3s'
    });
  });

});
})(jQuery);



ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [45.0441,38.9529],
            zoom: 15,
            controls: ['zoomControl']
        })

        myMap.behaviors.disable('multiTouch');
        myMap.behaviors.disable('drag');
        myMap.behaviors.disable('scrollZoom');

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [45.0441,38.9529]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Северная 207',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#greenStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        })

         myMap.geoObjects.add(myGeoObject);
}


jQuery(document).ready(function($) {



      $("#section-5").on("mousemove", function(e){
            var start = 0;
            var end = e.currentTarget.clientWidth;
            var center = Math.floor(end/2);
            console.log();
              if (e.clientX > center) {
                  $("#section-5 .img").each(function(ind, el){

                      if (ind == 0 || ind == 3) {
                        $(el).css({
                          "background-position": e.clientX/end*4+"% 50%"
                        });
                        $(el).css({
                          "background-position": e.clientX/end*4+"% 50%"
                        });
                      }else if(ind == 1 || ind == 4){
                        $(el).css({
                          "background-position": 50+e.clientX/end*4+"% 50%"
                        });
                        $(el).css({
                          "background-position": 50+e.clientX/end*4+"% 50%"
                        });
                      }else if(ind == 2 || ind == 5){
                        $(el).css({
                          "background-position": 100+e.clientX/end*4+"% 50%"
                        });
                      }
                  });


              }else{
                $("#section-5 .img").each(function(ind, el){

                    if (ind == 0 || ind == 3) {
                      $(el).css({
                        "background-position": e.clientX/end*4+"% 50%"
                      });
                      $(el).css({
                        "background-position": e.clientX/end*4+"% 50%"
                      });
                    }else if(ind == 1 || ind == 4){
                      $(el).css({
                        "background-position": 50+e.clientX/end*4+"% 50%"
                      });
                      $(el).css({
                        "background-position": 50+e.clientX/end*4+"% 50%"
                      });
                    }else if(ind == 2 || ind == 5){
                      $(el).css({
                        "background-position": 100+e.clientX/end*4+"% 50%"
                      });
                    }
                });
              }
      });


   $("header .navbar .nav-link").click(function(e){

            var href = $(this).attr("href");

            if (href.substring(0,3) == "tel") {

             }else{
              e.preventDefault();

              var elem = $("#"+href).offset().top;
              $("html, body").animate({scrollTop:elem}, 500);
             }

        });

    $("#section-3 button.button").click(function(){
        $("#exampleModal").modal("show");
    });

    $("#section-6 .col-md-6").click(function(){
        $("#exampleModal").modal("show");
    });

    $("header .buyMoh").click(function(){
          $("#exampleModal").modal("show");
    });

    $("#exampleModal .sendForm").click(function(e){
        e.preventDefault();

        if ($("#exampleModal #customCheck1").prop("checked") == true) {
              $("#exampleModal .error").hide(100);
              if ($("#exampleModal form input[name=phone]").val() == "") {
               $("#exampleModal .error").text("Ошибка, вы не указали номер телефона");
              $("#exampleModal .error").show(100);
              }else{
                  $("#exampleModal .error").hide(100);
                  var name = $("#exampleModal form input[name=name]").val();
                  if (name == "") {
                    name = "Без имени";
                  }
                let phone = $("#exampleModal form input[name=phone]").val();

                $.ajax({
                  url: '/sendMail.php',
                  type: 'POST',
                  data: {name: name, phone:phone},
                  beforeSend: function(){
                    $("#exampleModal .modal-body").html(`<div class="col-12 text-center"><img src="img/load.gif" alt="load"></div>`);
                  }
                })
                .done(function(data) {
                  $("#exampleModal .modal-body").html(`<div class="alert alert-success text-center" role="alert"><h2>Заявка отправлена</h2></div>`);
                  $(".formYandexSend input").click();
                })
                .fail(function() {
                  console.log("error");
                })
                .always(function() {
                  console.log("complete");
                });
              }
        }else{
          $("#exampleModal .error").text("Ошибка, вы не дали соглашение с политикой конфиденциальности");
          $("#exampleModal .error").show(100);
        }
    });



});
