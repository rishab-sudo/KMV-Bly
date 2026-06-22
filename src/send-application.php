<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$data     = json_decode(file_get_contents("php://input"), true);
$formType = $data['formType'] ?? 'application'; // 'contact' or 'application'
$to       = "rishabdutt4@gmail.com";

// ─── CONTACT FORM ────────────────────────────────────────────────
if ($formType === "contact") {

    $firstName = htmlspecialchars($data['firstName'] ?? '');
    $lastName  = htmlspecialchars($data['lastName']  ?? '');
    $email     = htmlspecialchars($data['email']     ?? '');
    $mobile    = htmlspecialchars($data['mobile']    ?? '');
    $message   = htmlspecialchars($data['message']   ?? '');

    if (!$firstName || !$lastName || !$email || !$mobile || !$message) {
        http_response_code(400);
        echo json_encode(["error" => "Missing fields"]);
        exit;
    }

    $subject = "New Contact Message from $firstName $lastName";
    $body    = "
New Contact Message
===================
Name:    $firstName $lastName
Email:   $email
Mobile:  $mobile

Message:
$message
    ";

    $headers  = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

}

// ─── APPLY NOW FORM ──────────────────────────────────────────────
else {

    $name          = htmlspecialchars($data['name']          ?? '');
    $email         = htmlspecialchars($data['email']         ?? '');
    $mobile        = htmlspecialchars($data['mobile']        ?? '');
    $qualification = htmlspecialchars($data['qualification'] ?? '');
    $course        = htmlspecialchars($data['course']        ?? '');
    $address       = htmlspecialchars($data['address']       ?? '');

    if (!$name || !$email || !$mobile || !$qualification || !$course || !$address) {
        http_response_code(400);
        echo json_encode(["error" => "Missing fields"]);
        exit;
    }

    $subject = "New Application: $course – $name";
    $body    = "
New Application Received
========================
Name:          $name
Email:         $email
Mobile:        $mobile
Qualification: $qualification
Course:        $course
Address:       $address
    ";

    $headers  = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

}

// ─── SEND ────────────────────────────────────────────────────────
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Mail sending failed"]);
}
?>