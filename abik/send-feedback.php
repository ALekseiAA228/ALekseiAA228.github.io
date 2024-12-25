<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = filter_var(trim($data['name'] ?? ''), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $phone = filter_var(trim($data['phone'] ?? ''), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($data['message'] ?? ''), FILTER_SANITIZE_STRING);

    if (!$email) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Неверный формат email."]);
        exit;
    }

    $to = "your-email@example.com"; // Замените на ваш реальный адрес
    $subject = "Новая заявка с сайта";
    $body = "Имя: $name\nПочта: $email\nТелефон: $phone\nСообщение:\n$message";

    $headers = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Ваше сообщение отправлено!"]);
    } else {
        error_log("Ошибка при отправке сообщения: " . print_r(error_get_last(), true));
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Не удалось отправить сообщение."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Метод запроса не поддерживается."]);
}
?>
