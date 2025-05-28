<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // هنا يمكن حفظ البيانات أو إرسالها بالبريد
    echo "شكرًا يا $name، تم استلام رسالتك!";
} else {
    http_response_code(405);
    echo "الطريقة غير مسموحة.";
}
