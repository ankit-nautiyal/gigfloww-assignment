Gig Worker Sign-Up Form





A responsive and user-friendly sign-up form built with React and Material-UI for gig workers to join a freelancing platform. The form includes client-side validation, a dynamic skill selector, and a success notification system powered by react-toastify.

Features
Form Fields:
Name: Text input for the worker's full name.
Email: Validated email input (e.g., user@example.com).
Skill Category: Dropdown with options like Graphic Design, Web Development, and an Other option that triggers a custom skill input.
Portfolio Link: URL input with validation (e.g., https://your-portfolio.com).
Dynamic Input: Selecting Other in Skill Category reveals a text field to specify a custom skill.
Validation: Real-time error messages for:
Empty or invalid fields.
Incorrect email formats.
Invalid URLs.
Notifications: A react-toastify success toast displays on valid submission, followed by a thank-you page.
Design: Material-UI ensures a modern, mobile-friendly interface.
Installation
Follow these steps to set up the project locally:

Clone the repository:
bash

Copy
git clone https://github.com/your-username/gig-worker-signup.git
Navigate to the project directory:
bash

Copy
cd gig-worker-signup
Install dependencies:
bash

Copy
npm install
Start the development server:
bash

Copy
npm run dev
The application will be available at http://localhost:5173.

Usage
Open http://localhost:5173 in your browser.
Fill out the form:
Name: Enter your full name (e.g., John Doe).
Email: Provide a valid email (e.g., john.doe@example.com).
Skill Category: Choose from the dropdown or select Other to enter a custom skill (e.g., UI/UX Design).
Portfolio Link: Input a valid URL (e.g., https://johns-portfolio.com).
Click the Sign Up button:
Success: A toast notification will appear, followed by a thank-you message.
Error: Validation errors will display below the relevant fields.
Technologies
Technology	Version	Purpose
React	18.2.0	Frontend UI framework
Vite	4.3.9	Build tool and dev server
Material-UI	5.15.0	UI components and styling
react-toastify	9.1.3	Success notifications
Additional tools:

JavaScript/ES Modules: For logic and validation.
CSS: Custom styles for layout tweaks.
Contributing
We welcome contributions to enhance the project! To contribute:

Fork the repository.
Create a new branch:
bash

Copy
git checkout -b feature/your-feature-name
Make your changes and commit:
bash

Copy
git commit -m "Implement your feature"
Push to your branch:
bash

Copy
git push origin feature/your-feature-name
Open a pull request on GitHub with a clear description.
Guidelines:

Follow the project's coding style.
Add tests for new features.
Ensure commits are descriptive.
Troubleshooting
Build Error: If you encounter Could not resolve "./components/SignupForm" from "src/App.jsx":
Verify SignUpForm.jsx is in the src directory.
Ensure App.jsx imports it correctly:
jsx

Copy
import SignUpForm from './SignUpForm';
Test the build locally:
bash

Copy
npm run build
Dependency Issues:
Clear cache and reinstall:
bash

Copy
rm -rf node_modules package-lock.json
npm install
Port Conflicts: If http://localhost:5173 is unavailable, Vite will prompt for a different port.
For other issues, check the Issues tab on GitHub.

License
This project is licensed under the MIT License. See the  file for details.

Feedback
Have suggestions or found a bug? Open an issue on the GitHub repository.
