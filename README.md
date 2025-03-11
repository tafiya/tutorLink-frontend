# TutorLink 🎓 - Find & Connect with the Best Tutors

**TutorLink 🎓** is an online platform where students can find and connect with qualified tutors, book sessions, and manage their learning journey. Tutors can create profiles, list subjects, set availability, and manage bookings. The platform ensures seamless communication, secure payments, and easy booking management.

## Project Overview

TutorLink 🎓 is designed to bridge the gap between students and tutors, helping students find the best tutors based on their specific learning needs. Tutors can showcase their expertise, set their own rates, and manage availability. The platform is built with role-based authentication and integrates secure payment systems for bookings.

## Core Features

### User Roles

- **Student**: Browse tutors, book sessions, view history, and leave reviews.
- **Tutor**: Create and manage profiles, set availability, manage bookings, and view earnings.
- **Admin (optional)**: Approve tutor registrations, oversee platform content, manage users.

1. **Public Routes**
   - **Home Page**: Introduction to the platform, search bar to find tutors by subject/grade/tutor name, and a call-to-action for signing up as a student or tutor.
   - **Browse Tutors**: Page with filter and sort options, allowing students to browse tutors based on subject, rating, availability, and hourly rate.
   - **Tutor Profile**: Detailed page for each tutor with bio, subjects taught, hourly rate, reviews, and a booking calendar.
   - **About Us**: Information about the platform’s mission, vision, and success stories.
   - **FAQ**: Frequently asked questions and categories like “Tutoring”, “Payments”, and “Account Management”.
   - **News/Blog**: Educational tips, platform updates, and industry news.

2. **Private Routes**
   - **Student Dashboard**: Manage profile, view past bookings, leave reviews.
   - **Tutor Dashboard**: Manage profile, handle booking requests, set availability, view earnings.
   - **Checkout Page**: Secure payment interface integrated with SSLCommerz/Stripe/PayPal for booking tutor sessions.

------

## Installation Guide

### Prerequisites

- Node.js (LTS version)
- MongoDB (local or cloud through MongoDB Atlas)
- Yarn (recommended) or npm

### Clone the Repository

```bash
git clone https://github.com/yourusername/tutorlink.git
cd tutorlink
```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory and configure:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   SURJOPAY_KEY=your_surjopay_key
   ```
4. **Run the backend server:**
   ```sh
   npm run server
   ```
5. **Run the frontend:**
   ```sh
   npm start
   ```

## Provide a link to a video explaining the API design and functionality:  
Part-1:[Video Link](https://www.loom.com/share/5214f56b3b1142a09fdf8ea881a77462?sid=960a8e0a-53b3-4277-b103-f2773fbb5bb0)
Part-2:[Video Link](https://www.loom.com/share/eee6700c80794e1b851692b1ed94901a?sid=0adc7164-7d5c-4aa9-9ff0-c6b1e3c49db7)

## Live Link
Provide the link to the live deployed application:  
 [Live Link](https://book-shop-frontend-project.vercel.app/)
## server-side GitHub Link
   [Live Link](https://github.com/tafiya/tutorLink-server)

