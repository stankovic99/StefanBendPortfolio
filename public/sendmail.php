<?php
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function sendMail($name, $email, $message) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = getenv("SMTP_HOST");
        $mail->SMTPAuth = true;
        $mail->Username = getenv("SMTP_USER");
        $mail->Password = getenv("SMTP_PASS");
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = getenv("SMTP_PORT");

        $mail->setFrom($email, $name);
        $mail->addAddress(getenv("TO_EMAIL"));

        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission";
        $mail->Body = "<h1>New Message</h1>
                       <strong>Name:</strong> $name<br>
                       <strong>Email:</strong> $email<br>
                       <strong>Message:</strong><br>$message";

        return $mail->send();
    } catch (Exception $e) {
        return false;
    }
}
?>
