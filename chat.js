$(document).ready(function() {
    // Load chat history
    $.ajax({
        type: "GET",
        url: "chat.php",
        success: function(data) {
            $("#chat-box").html(data);
        }
    });

    // Function to send message
    window.sendMessage = function() {
        var message = $("#chat-message").val();
        if (message != "") {
            $.ajax({
                type: "POST",
                url: "chat.php",
                data: { message: message },
                success: function() {
                    $("#chat-box").append("<p><strong>You:</strong> " + message + "</p>");
                    $("#chat-message").val("");
                }
            });
        }
    };

    // Auto refresh chat every 2 seconds
    setInterval(function() {
        $.ajax({
            type: "GET",
            url: "chat.php",
            success: function(data) {
                $("#chat-box").html(data);
            }
        });
    }, 2000);
});
