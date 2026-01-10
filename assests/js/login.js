function submitLogin() {
    let email = $("#login_email").val();
    let password = $("#login_password").val();

    $.ajax({
        url: 'php_folder/login.php',
        type: 'POST',
        data: JSON.stringify({ email: email, password: password }),
        contentType: 'application/json',
        success: function(res) {
            if(res.status === 'success') {
                localStorage.setItem("userEmail", email);
                alert("Login Successful!");
                window.location.href = "profile.html";
            } else {
                $("#msg").text(res.message);
            }
        }
    });
}