# MERN Advanced Authentication System

## Overview

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application that implements an advanced authentication system. It provides features such as user registration, email verification, login, password reset, and more, all with a modern and responsive user interface.

## Features

- User registration with email verification
- Secure login system
- Password reset functionality
- Email notifications using Mailtrap
- Responsive design using Tailwind CSS
- State management with Zustand
- Animations with Framer Motion

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, Zustand
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Mailtrap

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/mern-advance-auth.git
   cd mern-advance-auth
   ```

2. Install dependencies for both backend and frontend:
   ```
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   MAILTRAP_TOKEN=your_mailtrap_api_token
   CLIENT_URL=http://localhost:5173
   PORT=5000
   NODE_ENV=development
   ```

   Replace the placeholder values with your actual credentials.

4. Start the development server:
   ```
   npm run dev
   ```

   This will start both the backend server and the frontend development server.

5. Open your browser and navigate to `http://localhost:5173` to see the application running.

## Project Structure

- `/backend` - Contains the Express server and API routes
- `/frontend` - Contains the React application
- `/frontend/src/components` - React components
- `/frontend/src/pages` - React pages/routes
- `/frontend/src/store` - Zustand store for state management

## API Endpoints

- POST /api/auth/signup - Register a new user
- POST /api/auth/verify-email - Verify user's email
- POST /api/auth/login - User login
- POST /api/auth/logout - User logout
- POST /api/auth/forgot-password - Request password reset
- POST /api/auth/reset-password/:token - Reset password

## Deployment

**Note: We are currently experiencing issues with deployment. If you have experience with deploying MERN stack applications, especially on platforms like Render, we would greatly appreciate your help!**

### Current Deployment Issues

We are facing challenges in deploying this application, particularly:

1. Configuring the build process for both frontend and backend
2. Setting up environment variables correctly in the production environment
3. Ensuring proper communication between the frontend and backend in the deployed version

If you have expertise in these areas or have successfully deployed similar MERN stack applications, please consider contributing or providing guidance. You can open an issue or submit a pull request with your suggestions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to all contributors who have helped with the development and deployment of this project.
- Special thanks to the open-source community for the amazing tools and libraries used in this project.

## Contact

If you have any questions or want to reach out about the deployment issues, please open an issue on this repository.

---

We appreciate any help or advice on resolving our deployment challenges. Thank you for your interest in our project!
