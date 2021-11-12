

<?php
 

$mail=$_POST['mail'];
$phone=$_POST['phone'];
$name=$_POST['name'];
$order=$_POST['order'];


 // формируем заголовок и тело письма
 $picture=""; 
 $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
 $headers .= "From: Онлайн заявка <noreply@sistema112.ru>\r\n"; 
 $thm = "Новая заявка с сайта";
 $msg="	Заявка с сайта <br />
        Имя: <strong>$name</strong><br />
		Телефон: <strong>$phone</strong><br />
		E-mail: <strong>$mail</strong><br />
        Запрос: <strong>$order</strong>";
 $mail_to="pro@sistema112.ru"; // почта куда отправлять письмо
 // Отправляем почтовое сообщеzние
 
 if(empty($picture)) mail($mail_to, $thm, $msg, $headers);


foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b>%0A".$value."%0A%0A";
};


$keyboard = json_encode($keyboard, true);

$htxt= json_decode('"'.$good.'"'). "<b> Заявка с сайта</b>%0A %0A";


?>