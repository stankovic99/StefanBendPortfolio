<?php
require_once 'env_loader.php';
require 'sendmail.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mailSent = sendMail($name, $email, $message);

    if ($mailSent) {
        echo 'Thank you for submitting your message!';
    } else {
        echo 'Error sending message. Please try again.';
    }
} else {
    http_response_code(405);
    echo 'Method Not Allowed';
}
?>
