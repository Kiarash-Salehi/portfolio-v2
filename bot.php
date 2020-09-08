<?php
if (isset($_POST['submit'])) {
	if (filter_var($_POST['email'], FILTER_VALIDATE_FORM)) {
		$to = 'skiarash57@gmail.com';
		$name = $_POST['name'];
		$subject = $_POST['subject'];
		$messageIn = $_POST['message'];
		$email = $_POST['email'];
		$message = "\n".$subject."\n".$messageIn."\n";

		$headers = "From: ".$name." - ".$email."\r\n";
		$headers .= "Reply-To: ".$email."\r\n";
		$headers .= "Content-type: text/html\r\n";

		mail($to, $subject, $message, $headers);
	}
}
