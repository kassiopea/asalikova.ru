$(document).ready(function(e){

  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('a.close, body').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('.modal_for_msg')
      .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
        }
      );
  });

    $('form#feedback').submit(function(e){
      e.preventDefault();
      $.ajax({
          url: "send.php",
          type: "POST",
          data: $('#feedback').serialize(),


          beforeSend: function(xhr, textStatus){ 
                             $('form#feedback :input').attr('disabled','disabled');
                        },

          success: function(data) {
            
            if(data == 'Сообщение отправлено. Я отвечу Вам в ближайшее время :)'){
              console.log('отправлено');
              msg = data;
            
            $('.birds').after('<div class="modal_for_msg"><a href="#close" title="Закрыть" class="close">X</a><p>'+msg+'</p></div>').show(1000);

            $('form#feedback :input').removeAttr('disabled');
            $('form#feedback :text, textarea').val('').removeClass().next('.error-box').text('');

            }else{
              
              msg_error = data;
              console.log(msg_error);
              $('form#feedback :input').removeAttr('disabled');
              $('.birds').after('<div class="modal_for_msg"><a href="#close" title="Закрыть" class="close">X</a><p>'+msg_error+'</p></div>').show(1000);
              

            };
          },

          /*error: function(xhr, status, error) {
            alert(xhr.responseText + '|\n' + status + '|\n' +error);
          }*/


      });//end ajax

      return false;

    });//end submit
}); // end js
