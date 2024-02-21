# Academify

<p align="center">
  <img src="https://your-website.com/logo.png" alt="Academify Logo" width="200" height="200">
</p>

Academify is an online learning platform that offers a wide range of courses taught by experts in various fields. Whether you're looking to improve your skills, advance your career, or explore new interests, Academify has something for everyone.

## Features

- **Course Catalog:** Explore a diverse catalog of courses covering programming, design, business, language, and more.
- **Interactive Learning:** Engage with high-quality video lectures, quizzes, assignments, and interactive simulations.
- **Progress Tracking:** Keep track of your progress as you complete modules and assignments. Visual indicators help you stay on track.
- **Discussion Forums:** Connect with instructors and peers through discussion forums. Ask questions, share insights, and collaborate on projects.
- **Personalized Recommendations:** Receive personalized course recommendations based on your interests and learning history.
- **Certification and Badges:** Earn certificates and badges upon course completion to showcase your achievements.
- **Instructor Dashboard:** Instructors have access to a dashboard to create and manage courses, track student progress, and analyze course performance.
- **Responsive Design:** Access Academify on any device, including desktops, tablets, and smartphones.

## Technologies Used

- **Frontend:** React.js, Redux, Material-UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ORM)
- **Authentication:** bcrypt, Passport.js
- **Payment Integration:** Stripe
- **Others:** Socket.io (for real-time communication)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/wasyted/academify.git

2. Install dependancies:

   ```bash
   cd academify/client
   npm install
   cd ../server
   npm install

3. Set up environment variables, create a .env file in the server directory and add the following variables:

   ```bash
   PORT=3001
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key

4. Start the development server:

  # Start frontend

   ```bash
   cd ../client
   npm start

  # Start backend

   ```bash
   cd ../server
   npm start