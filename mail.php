<?php
$to      = 'kumiega86@tlen.pl';
$subject = $_POST['subject'];
$message = $_POST['message'];
$headers = 'From: ' . $_POST['email'] . "\r\n" .
'Content-type: text/html; charset=utf-8';
mail($to, $subject, $message, $headers);
?>