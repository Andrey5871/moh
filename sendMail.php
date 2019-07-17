<?php
if (isset($_POST['phone'])) {
	$name = htmlspecialchars($_POST['name']);
	$phone = htmlspecialchars($_POST['phone']);

	$to  = "mohmechty@mail.ru";

	$subject = "Заявка с сайта мохмечты.рф";

	$message = '<h4>Имя: '.$name."</h4>"."<h4>Телефон: ".$phone."</h4>";

	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Заявка с сайта  <мохмечты.рф>\r\n";
	$headers .= "Reply-To: reply-to@example.com\r\n";

	mail($to, $subject, $message, $headers);
}else{
	header("Location: /");
}


 ?>
