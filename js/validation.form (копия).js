$(document).ready(function(e){

    $('input#name, input#email, textarea#message').unbind().blur( function(){
             
    // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные 
      var id = $(this).attr('id'),
          val = $(this).val();
          

           // После того, как поле потеряло фокус, перебираем значения id, совпадающее с id данного поля
           switch(id)
           {
             // Проверка поля "Имя"
             case 'name':
                    
                    if(val.length >= 2 && val != '' && val.length <75)
                    {
                       $(this).removeClass('error').addClass('not_error');
                       $(this).next('.error-box').text('');                       
                    }

                  // Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                  // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                    else if (val.length < 2 || val === '')
                    {
                       $(this).removeClass('not_error').addClass('error');
                       $(this).next('.error-box').html('&bull; Поле должно содержать не менее 2 символов')
                                                  .css('color','#a60000')
                                                  .animate({'paddingLeft':'2px'},800);
                    }

                    else if(val.length >75)
                    {
                       $(this).removeClass('not_error').addClass('error');
                       $(this).next('.error-box').html('&bull; Поле не должно содержать более 75 символов')
                                                  .css('color','#a60000')
                                                  .animate({'paddingLeft':'2px'},800);
                    }
                    else
                    {
                       $(this).removeClass('not_error').addClass('error');
                       $(this).next('.error-box').html('&bull; Возможно, вы ввели некорректные символы? Попробуйте снова!')
                                                  .css('color','#a60000')
                                                  .animate({'paddingLeft':'2px'},800);
                    }
                break;


               // Проверка email
               case 'email':
                   var rv_email = /^([а-яА-Яa-zA-Z0-9_.-])+@([а-яА-Яa-zA-Z0-9_.-])+\.([рРфФa-zA-Z])+([рРфФa-zA-Z])+/;
                   if(val != '' && rv_email.test(val))
                   {
                      $(this).removeClass('error').addClass('not_error');
                      $(this).next('.error-box').text('');
                   }
                   else if (val === '')
                   {
                      $(this).removeClass('not_error').addClass('error');
                      $(this).next('.error-box').html('&bull; Поле обязательно для заполнения')
                                                 .css('color','#a60000')
                                                 .animate({'paddingLeft':'2px'},800);
                   }
                   else
                   {
                      $(this).removeClass('not_error').addClass('error');
                      $(this).next('.error-box').html('&bull; Формат почты должен быть info@mail.com/инфо@домен.рф')
                                                 .css('color','#a60000')
                                                 .animate({'paddingLeft':'2px'},800);
                   }
               break;


              // Проверка поля "Сообщение"
              case 'message':
                  if(val != '' && val.length < 5000)
                  {
                     $(this).removeClass('error').addClass('not_error');
                      $(this).next('.error-box').text('');
                  }
                  else if(val === '')
                  {
                     $(this).removeClass('not_error').addClass('error');
                     $(this).next('.error-box').html('&bull; Напишите мне, хоть слово')
                                               .css('color','#a60000')
                                               .animate({'paddingLeft':'2px'},800);
                  }
                  else
                  {
                     $(this).removeClass('not_error').addClass('error');
                     $(this).next('.error-box').html('&bull; Количество символов должно быть не более 5000')
                                               .css('color','#a60000')
                                               .animate({'paddingLeft':'2px'},800);
                  }
              break;


           } // end switch(...)

         }); // end blur()

        alert("erertger");
         // Теперь отправим наше письмо с помощью AJAX
         $('form#contacts-form').submit(function(e){

             // Запрещаем стандартное поведение для кнопки submit
             e.preventDefault();
             alert("ypa");
             // После того, как мы нажали кнопку "Отправить", делаем проверку,
             // если кол-во полей с классов .not_error равно 3(так как у нас всего 3 поля), то есть все поля заполнены верно,
             // выполняем наш Ajax сценарий и отправляем письмо адресату

          if($('.not_error').length === 3)
             {  

                // Eще одним моментов является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
                // и вызываем метод .serialize().
                // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

                 $.ajax({
                        url: 'send.php',
                        type: 'post',
                        data: $(this).serialize(),

                        beforeSend: function(xhr, textStatus){ 
                             $('form#contacts-form :input').attr('disabled','disabled');
                        },
//                       dataType:'json',
                       success: function(/*response*/){
//                            $('form#contacts-form :input').removeAttr('disabled');
//                            $('form#contacts-form :text, textarea').val('').removeClass().next('.error-box').text('');
                            alert("response");
                       }
                }); // end ajax({...})
            }
            else
            {
              return false;
            }
            // Иначе, если количество полей с данным классом не равно значению 3 или 4 мы возвращаем false,
            // останавливая отправку сообщения в невалидной форме
           

       }); // end submit()


      }); // end script
