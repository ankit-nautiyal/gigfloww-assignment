Gig Worker Sign-Up Form
Description
This is a React-based sign-up form designed for gig workers to join a platform. The form allows users to input their Name, Email, Skill Category, and Portfolio Link, with robust client-side validation and a user-friendly interface. Key features include:

Input Fields: Name (text), Email (email validation), Skill Category (dropdown with an "Other" option), and Portfolio Link (URL validation).
Custom Skill Option: Selecting "Other" in Skill Category reveals a text field to specify a custom skill.
Validation: Ensures all fields are filled correctly, with real-time error messages for invalid inputs (e.g., invalid email or URL formats).
Success Notification: Displays a react-toastify success toast upon successful submission, followed by a thank-you message.
Responsive Design: Built with Material-UI for a modern, accessible, and mobile-friendly UI.

Installation

Clone the Repository:
git clone https://github.com/ankit-nautiyal/gigfloww-assignment.git


Navigate to the Project Directory:
cd gig-worker-signup


Install Dependencies:
npm install


Start the Development Server:
npm run dev

This will start the Vite development server, typically at http://localhost:5173.


Usage

Open your browser and navigate to http://localhost:5173.
Fill out the form:
Name: Enter your full name.
Email: Provide a valid email address.
Skill Category: Select from predefined options (e.g., Graphic Design, Web Development) or choose "Other" to specify a custom skill.
Portfolio Link: Enter a valid URL to your portfolio.


Submit the form:
If validation passes, a success toast will appear, followed by a thank-you message.
If validation fails, error messages will display below the relevant fields.



Technologies Used

React: Frontend library for building the UI.
Vite: Build tool for fast development and production builds.
Material-UI (MUI): Component library for responsive and accessible design.
react-toastify: Library for displaying success notifications.
JavaScript/ES Modules: For logic and validation.
CSS: Custom styles for layout adjustments.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name


Make your changes and commit them with clear messages: git commit -m "Add your feature description"


Push to your branch: git push origin feature/your-feature-name


Open a pull request on GitHub, describing your changes.

Please ensure your code follows the project’s coding style and includes relevant tests if applicable.
Troubleshooting

Dependencies: Run npm install to ensure all dependencies (e.g., @mui/material, react-toastify) are installed.
Vite Port: If http://localhost:5173 is in use, Vite will prompt for an alternative port.


