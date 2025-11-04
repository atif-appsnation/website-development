<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userName  = htmlspecialchars($_POST["full_name"]);
    $userEmail = htmlspecialchars($_POST["email"]);
    $userNumber    = htmlspecialchars($_POST["mobile"]);
    $userMessage  = htmlspecialchars($_POST["message"]);

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        // $mail->isSMTP();
        // $mail->Host       = 'smtp.titan.email';
        // $mail->SMTPAuth   = true;
        // $mail->Username   = 'leeds@appsnation.co';
        // $mail->Password   = 'Leeds@321+-'; // Use env variable in production
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        // $mail->Port       = 465;

         $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'leads@digitroopers.com';
        $mail->Password = 'Lead@321+-';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->CharSet = 'UTF-8';

        // Recipients
        $mail->setFrom('leads@digitroopers.com', $userName);
        $mail->addAddress('leads@digitroopers.com', 'AppsNation');

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = '('.$userName.')' ." Website New Lead";
        $mail->Body = "
        <table style='width:100%;border-collapse:collapse;'>
            <tr><th style='border:1px solid #ddd;padding:8px;'>Name</th><td style='border:1px solid #ddd;padding:8px;'>$userName</td></tr>
            <tr><th style='border:1px solid #ddd;padding:8px;'>Email</th><td style='border:1px solid #ddd;padding:8px;'>$userEmail</td></tr>
            <tr><th style='border:1px solid #ddd;padding:8px;'>Number</th><td style='border:1px solid #ddd;padding:8px;'>$userNumber</td></tr>
            <tr><th style='border:1px solid #ddd;padding:8px;'>Message</th><td style='border:1px solid #ddd;padding:8px;'>$userMessage</td></tr>
        </table>";

        $mail->send();
        echo '<div class="alert alert-success">Thank you! Your review has been submitted successfully.</div>';
    } catch (Exception $e) {
        echo '<div class="alert alert-danger">Failed to send email. Error: ' . $mail->ErrorInfo . '</div>';
    }
} else {
    echo '<div class="alert alert-danger">Invalid request.</div>';
}