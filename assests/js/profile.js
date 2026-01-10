$(document).ready(function() {
    // 1. Get user email from browser localstorage (Requirement)
    let email = localStorage.getItem("userEmail");
    
    // If not logged in, send back to login page
    if(!email) {
        window.location.href = "login.html";
        return;
    }

    // 2. Display the email on the page 
    // FIXED: Changed ID to match your profile.html span ID
    $("#user_email_display").text(email);

    // 3. Load Profile from MongoDB via PHP (GET Request)
    $.get(`php/profile.php?email=${email}`, function(data) {
        if(data && data.age) {
            // Fill the input fields with data from MongoDB
            $("#age").val(data.age);
            $("#dob").val(data.dob);
            $("#contact").val(data.contact);
        }
    });

    // 4. Update Profile Logic (POST Request)
    $("#updateBtn").click(function() {
        let profileData = {
            email: email,
            age: $("#age").val(),
            dob: $("#dob").val(),
            contact: $("#contact").val()
        };

        $.ajax({
            url: 'php_folder/profile.php',
            type: 'POST',
            contentType: 'application/json', // Critical for PHP json_decode
            data: JSON.stringify(profileData),
            success: function(response) { 
                alert("Profile Details Updated in MongoDB successfully!");
            },
            error: function() {
                alert("Error updating profile. Check if MongoDB is running.");
            }
        });
    });
});

// Logout function
function logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "login.html";
}