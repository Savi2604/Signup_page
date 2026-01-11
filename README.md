**Full-Stack User Profile Management System**
This project is a basic User Registration, Login, and Profile Management system. It utilizes multiple databases (MySQL, MongoDB) and caching (Redis) for optimized performance.

🚀 Features
Secure Registration: Provides registration functionality with strong password validation using Regex.

Safe Login: Facilitates secure login through MySQL and Redis session management.

Profile Management: Allows saving age, date of birth (DOB), contact details, and profile images (Base64) in MongoDB.

Responsive UI: Designed using Bootstrap 5 for a mobile-friendly user experience.

No Alerts: All error messages are displayed inline (directly below the input fields) instead of using pop-up alerts.

🛠️ Tech Stack
Frontend: HTML5, CSS3, JavaScript (jQuery 3.7.1)

Backend: PHP

Databases:

MySQL: Used to store user credentials (email, password).

MongoDB: Used to store user profile details and images.

Redis: Used for session management and caching.

📋 Prerequisites
To run this project, the following software must be installed on your computer:

XAMPP: For Apache and MySQL services.

MongoDB Server: To store profile details.

Redis Server (Windows version 3.0.504): For session caching.

Composer: To install MongoDB and Redis libraries for PHP.

🔧 Setup Instructions
Clone the Repository:

Bash

git clone https://github.com/Savi2604/Signup_page.git
Database Setup:

Start MySQL in XAMPP.

Create a users table with the following fields: id, email, password.

PHP Library Installation: Navigate to the php_folder and run composer install to set up Redis and MongoDB drivers.

Run the App: Place your project folder inside the XAMPP htdocs directory. Open your browser and navigate to http://localhost/web_develop/register.html.

📁 Project Structure
register.html & login.html: User entry and authentication pages.

profile.html: Page to update user profile details.

display.html: Page to view fetched profile details.

assets/js/: Contains JavaScript validation and AJAX logic.

php_folder/: Contains PHP scripts for Registration, Login, and Profile APIs.

🔒 Password Requirements
For security purposes, passwords must meet the following criteria:

Minimum 8 characters long.

At least one uppercase and one lowercase letter.

At least one numerical digit.

At least one special character (e.g., @$!%*?&).
