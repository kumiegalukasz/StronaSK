<?php
$headers = 'From: ' . $_POST['email'] . "\r\n" .
'Content-type: text/html; charset=utf-8';
echo mail('office@kk-softwareltd.co.uk', 'K&K Software Ltd', $_POST['message'], $headers);
?>