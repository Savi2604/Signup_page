$(document).ready(function() {
    $("#registerBtn").click(function() {
        let email = $("#email").val();
        let password = $("#password").val();

        if(!email || !password) {
            alert("Fields-ai fill pannunga!");
            return;
        }

        $.ajax({
            url: 'php_folder/register.php', // Path verified from your screenshot
            type: 'POST',
            data: JSON.stringify({ email: email, password: password }),
            contentType: 'application/json',
            dataType: 'json', // Idhu 'undefined' error-ai thadukkum
            success: function(response) {
                console.log("Full Response:", response);
                
                if(response && response.status === 'success') {
                    alert(response.message);
                    window.location.href = "login.html"; 
                } else if (response && response.status === 'error') {
                    $("#msg").html("<span class='text-danger'>" + response.message + "</span>");
                } else {
                    alert("Unknown error occurred. Check Console.");
                }
            },
            error: function(xhr) {
                console.log("Error Status:", xhr.status);
                console.log("Error Response:", xhr.responseText);
                alert("Server Error! Browser Console-ai (F12) check pannunga.");
            }
        });
    });
});