# code-assessment

# Frontend and Backend Projects

## Frontend Project

This project contains the frontend code for our application.

### Prerequisites

Before running the project, ensure you have Node.js and npm installed on your system.

### Getting Started

To run the frontend project locally, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory: cd frontend
  
3. Install dependencies:
4. Start the development server:npm start

This will start the development server and open the application in your default web browser.

#### Running with Docker

To run the frontend project using Docker, make sure you have Docker installed on your system and follow these steps:

1. Build the Docker image: docker build -t frontend or docker-compose -t frontend

2. Run the Docker container:
3. This will start the container and expose port 5173 to access the application.

#### Seeding Data

To seed data into the backend, refer to the backend README.md for instructions on how to run the Prisma migration and seed the database.

## Backend Project

This project contains the backend code for our application.

### Prerequisites

Before running the project, ensure you have Node.js and npm installed on your system.

### Getting Started

To run the backend project locally, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory:
3. Install dependencies: npm install

4. Apply database migrations:
npx prisma migrate deploy

5. Seed the database:
npx prisma db seed

6. Start the server:
npm start

This will start the backend server.

#### Running with Docker

To run the backend project using Docker, make sure you have Docker installed on your system and follow these steps:

1. Build the Docker image:
Sure, here's the combined README content in a single block that you can copy:

# Frontend and Backend Projects

## Frontend Project

This project contains the frontend code for our application.

### Prerequisites

Before running the project, ensure you have Node.js and npm installed on your system.

### Getting Started

To run the frontend project locally, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory:
cd frontend

3. Install dependencies:
npm install

4. Start the development server:
npm start

This will start the development server and open the application in your default web browser.

#### Running with Docker

To run the frontend project using Docker, make sure you have Docker installed on your system and follow these steps:

1. Build the Docker image:
docker build -t frontend .

2. Run the Docker container:
docker run -p 5173:5173 frontend

This will start the container and expose port 5173 to access the application.

#### Seeding Data

To seed data into the backend, refer to the backend README.md for instructions on how to run the Prisma migration and seed the database.

## Backend Project

This project contains the backend code for our application.

### Prerequisites

Before running the project, ensure you have Node.js and npm installed on your system.

### Getting Started

To run the backend project locally, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory:
cd backend

3. Install dependencies:
npm install

4. Apply database migrations:
npx prisma migrate deploy

5. Seed the database:
npx prisma db seed

6. Start the server:
npm start

This will start the backend server.

#### Running with Docker

To run the backend project using Docker, make sure you have Docker installed on your system and follow these steps:

1. Build the Docker image:
docker build -t backend .

2. Run the Docker container:
docker run -p 3000:3000 backend

This will start the container and expose port 3000 to access the backend API.

#### Seeding Data
