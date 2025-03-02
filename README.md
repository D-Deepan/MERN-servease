# Servease - Streamlining Hotel Services

Servease is a web application designed to streamline services and orders between hotel customers and managers. Instead of relying on traditional landline calls, customers can request services like maintenance, laundry, and room cleaning, as well as order food items from a menu, all through the web app. Managers can update the status of requested services, and customers can monitor the progress in real-time. Additionally, an admin can create new users (managers) and rooms, while managers handle room allocation. Customers can also post complaints, which are visible only to the admin.

This repository contains both the frontend (React) and backend (Express.js) code for the Servease application.

## Features

### Frontend (React)
- **Persist Login:** Implements persistent login using useState without relying on localStorage or sessionStorage.
- **Role-Based Views:** Dynamic UI based on user roles (Customer, Manager, Admin).
- **Service Requests:** Customers can request services like maintenance, laundry, and room cleaning.
- **Food Ordering:** Customers can order food items from a menu.
- **Complaint System:** Customers can post complaints, which are visible only to the admin.
- **Real-Time Updates:** Customers can monitor the status of their service requests (e.g., "In Progress" or "Provided").
- **Room Allocation:** Managers can allocate rooms to customers.
- **Admin Dashboard:** Admins can create new users (managers) and manage rooms.

### Backend (Express.js)
- **JWT Authentication:** Secure user authentication using JSON Web Tokens (JWT).
- **Role-Based Access Control (RBAC):** Implements three user roles—Customer, Manager, and Admin—with distinct permissions.
- **Service Management:** Customers can request services, and managers can update the status of these requests.
- **Food Ordering:** Customers can order food items, and managers can manage these orders.
- **Complaint System:** Customers can post complaints, which are visible only to the admin.
- **Room Allocation:** Managers can allocate rooms to customers, while admins can create new rooms and manage user accounts.
- **API Endpoints:** Well-structured RESTful APIs for seamless communication with the frontend.

## Tech Stack

### Frontend
- **Framework:** React.js
- **State Management:** React Context API, useState
- **Styling:** Material-UI (MUI)
- **Routing:** React Router
- **API Integration:** Axios

### Backend
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT, Bcrypt for password hashing
- **Middleware:** CORS, Cookie-Parser, Error Handling

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas (or a local MongoDB instance)
- Git

## Installation

### Clone the repository:
```bash
git clone https://github.com/your-username/servease.git
cd servease
```

### Install dependencies for both frontend and backend:
```bash
cd frontend
npm install
cd ../backend
npm install
```

### Set up environment variables:
Create a `.env` file in the backend directory with the following content:
```plaintext
JWT_ACCESS=your_jwt_access_secret
JWT_REFRESH=your_jwt_refresh_secret
JWT_EXPIRES_IN=1h
DATABASE_URI=your_mongodb_connection_string
```
Replace the sample values with your actual secrets and MongoDB connection string.

### Start the backend server:
```bash
cd backend
npm start
```

### Start the frontend development server:
```bash
cd frontend
npm start
```

Open your browser and navigate to `http://localhost:3000` to access the application.

## Environment Variables

The following environment variables are required for the backend:

| Variable Name  | Sample Value                  | Description                                 |
|---------------|--------------------------------|---------------------------------------------|
| JWT_ACCESS    | your_jwt_access_secret        | Secret key for JWT access tokens.          |
| JWT_REFRESH   | your_jwt_refresh_secret       | Secret key for JWT refresh tokens.         |
| JWT_EXPIRES_IN| 1h                             | Expiration time for JWT access tokens.     |
| DATABASE_URI  | your_mongodb_connection_string| MongoDB connection string.                 |

