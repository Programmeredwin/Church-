<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST['message'];
    
    if (!empty($message)) {
        $message = htmlspecialchars($message);
        $handle = fopen("messages.txt", "a");
        fwrite($handle, "<p><strong>" . $_SESSION['username'] . ":</strong> " . $message . "</p>");
        fclose($handle);
    }
    exit();
}

// Retrieve chat history
$chatHistory = file_get_contents("messages.txt");
echo $chatHistory;
?>
