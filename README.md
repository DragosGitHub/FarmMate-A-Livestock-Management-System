FarmMate: A Livestock Management System
FarmMate is a web-based livestock management system designed to help farmers and livestock owners efficiently manage their animals. This application provides an intuitive interface for tracking animal health, location, and activities, making it easier to monitor and improve livestock productivity.

Features
Dashboard Overview

Displays the total count of animals, including cows, buffalo, and sheep, with respective icons.
Health summary for animals, categorized as:
Pregnant
Non-Pregnant
Sick
Needs Care
Abnormal Symptoms
Data Management

Add new livestock data with the following details:
Location
Animal Type (Cow, Buffalo, Sheep)
Activity (Pregnant, Sick, Needs Care, Abnormal Symptoms)
Date of activity onset
View all entered livestock data in a dedicated section.
Delete individual animal records with a single click.
User Authentication

Sign-In feature to personalize the application with the user's name.
Dynamic Updates

Automatically updates the dashboard and health summary based on user input.
Persistent UI Design

Fixed application title and developer credit at the top of the page.
Clean and user-friendly layout inspired by modern design principles.
Favicon Integration

Includes a custom favicon (animal-care.png) for a polished look.
Technology Stack
HTML: Structure of the application.
CSS: Styling for an engaging and responsive UI.
JavaScript: Dynamic functionalities and data management.
Setup Instructions
Clone the repository to your local machine:

bash
Copy code
git clone <repository-url>
Place the animal-care.png favicon and relevant icons in the icons folder.

Open the project directory and start the application:

Open the index.html file in a web browser to view the application.
How to Use
Sign In:

Click the "Sign In" button in the top-right corner.
Enter your name to personalize the application.
Add Data:

Click the "Add Data" button to enter livestock details.
Fill in the prompted details and submit.
View Dashboard:

The dashboard dynamically updates to show the total number of animals and their health status.
Manage Data Entries:

All data entries appear below the health summary.
Delete unwanted records by clicking the delete button next to each entry.
Project Structure
graphql
Copy code
FarmMate/
│
├── index.html          # Main HTML file
├── style.css           # CSS for styling the app
├── script.js           # JavaScript for app functionality
├── animal-care.png     # Favicon for the application
└── icons/              # Folder containing icons for various categories
    ├── herd.png
    ├── cow.png
    ├── sheep.png
    ├── buffalo.png
    ├── pregnant.png
    ├── non-pregnant.png
    ├── sick.png
    ├── care.png
    ├── symptoms.png
About the Developer
Developed by: Saptadip Das
FarmMate was built to empower farmers and livestock owners with an easy-to-use tool for managing their herds, promoting better productivity, and ensuring animal welfare.

Future Improvements
Add a database for persistent data storage.
Introduce user accounts for multiple users.
Enhance data visualization with charts and graphs.
