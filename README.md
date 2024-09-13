# Electronic Gadgets Hub Backend

## Live URLs

- **Frontend**: [Gadget Hub Frontend](https://electronic-gadgets-shop-frontend.vercel.app/)
- **Backend**: [Gadget Hub Backend](https://electronic-gadgets-shop-backend.vercel.app/)

A scalable and secure backend for managing an electronic gadgets marketplace, built using **Node.js**, **Express**, and **TypeScript**. This backend handles user authentication, product management, and order processing.

## Project Description

The **Electronic Gadgets Shop Backend** is designed to support an online marketplace for electronic gadgets. It includes user authentication, product listings, order management, and secure API endpoints. The backend is built with **Express** and **TypeScript** to ensure type safety, maintainability, and scalability. Key features include user management, JWT authentication, and role-based access control.

## Features

- **User Authentication**: Secure login, registration, and password hashing using `bcrypt`.
- **JWT Authorization**: Protect routes using JWT-based authentication.
- **Product Management**: Add, edit, and delete products.
- **Order Management**: Track order status from pending to delivered.
- **Validation**: Input validation using **Zod** schema.
- **Database Integration**: Use **MongoDB** for storing users, products, and orders.

## Technology Stack

- **Node.js**: JavaScript runtime for server-side code.
- **Express.js**: Minimalist web framework for building APIs.
- **TypeScript**: Static typing for JavaScript to catch errors at compile time.
- **MongoDB**: NoSQL database for scalable data storage.
- **JWT**: JSON Web Tokens for secure authentication.
- **Zod**: Schema validation for request validation.

## Installation Guideline

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **TypeScript** (`npm install -g typescript`)

### Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/NurMuhammadCSE/Electronic-Gadgets-Shop-Backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd gadget-hub
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```