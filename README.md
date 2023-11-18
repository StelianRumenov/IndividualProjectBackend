# Locals - Backend

Welcome to Locals! This project is a backend application built with NestJs, aiming to connect individual consumers with small-scale farmers. It provides a platform for consumers to directly interact with farmers, discover locally grown produce, and support sustainable farming practices.

## Getting Started

To get started with the Locals project, follow the instructions below:

## Prerequisites
Make sure you have the following installed on your system:

- Node.js (version 12 or above)
- NPM (Node Package Manager)
- MySQL (version 5.7 or above)
## Installation
1. Clone the repository to your local machine:

#### `git clone https://github.com/your-username/nestjs-farmconnect-backend.git`

2. Navigate to the project directory:

#### `cd individualProjectBackend`

3. Install the dependencies:

#### `npm install`

4. Configure the MySQL database:

 - Create a new MySQL database for the project.
 - Update the database connection details in the .env file.

5. Run database migrations:

#### `npm run migration:run`

6. Start the development server:

#### `npm run start:dev`

The backend server will be running at http://localhost:3002.


## Features

The Locals backend provides the following key features:

 - User authentication and authorization: Handles user registration, login, and authentication using JSON Web Tokens (JWT).
 - Farmer and Consumer profiles: Stores user profiles with information specific to farmers or consumers.
 - Product management: Enables farmers to create, update, and delete product listings, including details such as name, description, price, and availability.
 - Order management: Facilitates the placement and tracking of orders, including order history and status updates.
 - Messaging system: Allows users to communicate with each other through a messaging interface.
 - Rating and reviews: Supports the ability for users to rate and leave reviews for farmers and their products.

## Technologies Used
The NestJS-FarmConnect backend project utilizes the following technologies:

 - NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
 - MySQL: An open-source relational database management system.
 - TypeORM: A TypeScript-based ORM (Object-Relational Mapping) library for database management.
 - Passport: A middleware for handling authentication and authorization.
 - JWT: JSON Web Tokens for secure user authentication and authorization.

## Contributing
We welcome contributions to the Locals project! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes and their purpose.
   
Please ensure that your code adheres to the project's coding conventions and practices. Include tests when necessary and make sure all existing tests pass successfully.

## License
The Locals project is licensed under the MIT License. Feel free to modify and use the code for personal or commercial projects.

## Contact
If you have any questions or suggestions regarding the Locals project, feel free to contact us at your-s.rumenov@student.fontys.nl.

We appreciate your interest and hope that Locals proves to be a valuable tool in connecting consumers with small-scale farmers!
