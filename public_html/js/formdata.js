$(document).ready(function() {


    $("#ajax_form").submit(function(e) { // Устанавливаем событие отправки для формы с id=form
        e.preventDefault();
        var form_data = $(this).serialize(); // Собираем все данные из формы
        $.ajax({
            type: "POST", // Метод отправки
            url: "post/snd.php", // Путь до php файла отправителя
            data: form_data,
            success: function() {
                // Код в этом блоке выполняется при успешной отправке сообщения
                $("#okm").modal('show');
                $(".modal").modal("hide");
                 $("#ajax_form")[0].reset();
              
                return true;
            }
        });
    });
    
     $("#ajax_form2").submit(function(e) { // Устанавливаем событие отправки для формы с id=form
        e.preventDefault();
        var form_data = $(this).serialize(); // Собираем все данные из формы
        $.ajax({
            type: "POST", // Метод отправки
            url: "post/recall.php", // Путь до php файла отправителя
            data: form_data,
            success: function() {
                // Код в этом блоке выполняется при успешной отправке сообщения
               
                $("#okm").modal('show');
                 $(".modal").modal("hide");
               $("#ajax_form2")[0].reset();
                return true;
            }
        });
    });

  $("#ajax_form3").submit(function(e) { // Устанавливаем событие отправки для формы с id=form
        e.preventDefault();
        var form_data = $(this).serialize(); // Собираем все данные из формы
        $.ajax({
            type: "POST", // Метод отправки
            url: "post/snd.php", // Путь до php файла отправителя
            data: form_data,
            success: function() {
                // Код в этом блоке выполняется при успешной отправке сообщения
                $("#okm").modal('show');
                $("#ajax_form3")[0].reset();
              
                return true;
            }
        });
    });

console.log("document is ready");
  


});