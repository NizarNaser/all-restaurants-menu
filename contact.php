<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. استقبال البيانات من الفورم
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // 2. التحقق من أن البيانات غير فارغة
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "الرجاء تعبئة النموذج بشكل صحيح.";
        exit;
    }

    // 3. إعداد البريد الإلكتروني
    $recipient = "nizarnaser17@gmail.com";  // <-- عدّل هذا إلى بريدك
    $subject = "رسالة جديدة من موقعك";
    $email_content = "الاسم: $name\n";
    $email_content .= "البريد الإلكتروني: $email\n\n";
    $email_content .= "الرسالة:\n$message\n";

    $email_headers = "From: $name <$email>";

    // 4. إرسال البريد
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "تم إرسال رسالتك بنجاح!";
    } else {
        http_response_code(500);
        echo "حدث خطأ أثناء الإرسال. حاول مرة أخرى.";
    }
} else {
    http_response_code(403);
    echo "هناك مشكلة في طريقة الإرسال.";
}
?>
