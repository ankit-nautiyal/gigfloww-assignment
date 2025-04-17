
# Gig Worker Sign-Up Form

## Description

This is a React-based sign-up form designed for gig workers to join a platform. The form allows users to input their Name, Email, Skill Category, and Portfolio Link, with robust client-side validation and a user-friendly interface. Key features include:

- **Input Fields**: Name (text), Email (email validation), Skill Category (dropdown with an "Other" option), and Portfolio Link (URL validation).
- **Custom Skill Option**: Selecting "Other" in Skill Category reveals a text field to specify a custom skill.
- **Validation**: Ensures all fields are filled correctly, with real-time error messages for invalid inputs (e.g., invalid email or URL formats).
- **Success Notification**: Displays a thank-you message upon successful submission.
- **Responsive Design**: Built with Material-UI for a modern, accessible, and mobile-friendly UI.

## Proejct Snapshots:

![image](https://github.com/user-attachments/assets/9464c5d6-c17d-49d3-bf7a-43ed380bc235)
![image](https://github.com/user-attachments/assets/bf22ea32-c9bc-4728-9a00-d724e7c536af)
![image](https://github.com/user-attachments/assets/619668fa-bcdc-419b-8919-b811df9472a5)
![image](https://github.com/user-attachments/assets/6f745869-af37-4c7c-9c23-4b7849561626)
![image](https://github.com/user-attachments/assets/c4cd5637-c8ae-4ffe-8a88-1b94dbe0a9dd)
![image](https://github.com/user-attachments/assets/a586f532-3a40-4ca3-9652-0d82ea87f9d9)
![image](https://github.com/user-attachments/assets/9f7fa13f-c87a-4e4f-afd9-67b022e79bfc)



## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ankit-nautiyal/gigfloww-assignment.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd gig-worker-signup
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   This will start the Vite development server, typically at `http://localhost:5173`.

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Fill out the form:
   - **Name**: Enter your full name.
   - **Email**: Provide a valid email address.
   - **Skill Category**: Select from predefined options (e.g., Graphic Design, Web Development) or choose "Other" to specify a custom skill.
   - **Portfolio Link**: Enter a valid URL to your portfolio.
3. Submit the form:
   - If validation passes, a success toast will appear, followed by a thank-you message.
   - If validation fails, error messages will display below the relevant fields.

## Technologies Used

- **React**: Frontend library for building the UI.
- **Vite**: Build tool for fast development and production builds.
- **Material-UI (MUI)**: Component library for responsive and accessible design.
- **JavaScript/ES Modules**: For logic and validation.
- **CSS**: Custom styles for layout adjustments.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them with clear messages:

   ```bash
   git commit -m "Add your feature description"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request on GitHub, describing your changes.

Please ensure your code follows the project’s coding style and includes relevant tests if applicable.

## Troubleshooting

- **Dependencies**: Run `npm install` to ensure all dependencies (e.g., `@mui/material`, `react-toastify`) are installed.
- **Vite Port**: If `http://localhost:5173` is in use, Vite will prompt for an alternative port.


