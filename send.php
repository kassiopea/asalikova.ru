<?php

/*$email = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];

$to = "admin@asalikova.ru";
$subject = "От посетителя сайта";
$text =  "Написал(а): $name\n Контактный email - $email\n\n Текст письма: $message\n";

$header.= "Content-type: text/html; charset=utf-8\r\n";
$header .= "MIME-Version: 1.0\r\n";
$sending = mail($to, $subject, $text, $headers);

if ($sending) {
	header('Refresh: 5; URL=http://asalikova.ru');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body style="background-color: #1e1e1e;"><div style="position: absolute; width: 600px; height: 100px; left: 50%; top: 50%; margin-left: -300px; margin-top: - 60px; color: #fff; font-size: 18px;">Письмо отправлено, через 5 секунд вы вернетесь на страницу asalikova.ru</div></body>';}*/

$post = (!empty($_POST)) ? true : false;
if($post) {

	$email = $_POST['email'];
	$name = $_POST['name'];
	$message = $_POST['message'];

	//функция очистки полей
	function clean($value = "") {
	    $value = trim($value);
	    $value = stripslashes($value);
	    $value = strip_tags($value);
	    $value = htmlspecialchars($value);
	    
	    return $value;
	}
	//очистить поля
	$email = clean($email);
	$name = clean($name);
	$message = clean($message);

	$error = '';
	//проверка на поле имя
	if(!$name || strlen($name) < 2) {$error .= 'Напишите имя не менее 2 символов. ';}
	
	if(strlen($name) > 75) {$error .= 'Напишите имя не более 75 символов. ';}
	
	//if(preg_match('/[^a-zа-яё\d\s]$/i', $name)) 
	if(preg_match('/^[^\/?:@&=+$#]+$/im', $name))
		{$error .= '';}
		else{$error .= 'Поле "Имя" содержит недопустимые символы. ';}
	//проверка на поле емейл
	if(!$email) {$error .= 'Укажите электронную почту. ';}
	if(preg_match('/@/', $email)) {$error .= '';} else{$error .= 'Введите почту в формате mail@domen.ru. ';}

	//проверка на поле сообщение
	if(!$message || strlen($message) < 1) {$error .= 'Введите сообщение.';}
	if(strlen($message) > 5000) {$error .= 'Вы ввели слишком длинное сообщение. Сократите текст до 5000 символов. ';}

	if(!$error) {

	$to = "admin@asalikova.ru";
	$subject = "Посетитель сайта: $name";
	$text =  "Написал(а): $name\n\n Контактный email - $email\n\n\n Текст письма: $message\n";

	$header.= "Content-type: text/html; charset=utf-8\r\n";
	$header .= "MIME-Version: 1.0\r\n";
	$sending = mail($to, $subject, $text, $headers);
	if($sending) {echo 'Сообщение отправлено. Я отвечу Вам в ближайшее время :)';}
}
	else {echo $error;}
}

 ?>