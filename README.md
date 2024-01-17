# Cloudberry Project

## Overview

Cloudberry is a project created for the "Advanced Computer Architectures" course as part of the Master's program at the Faculty of Electrical Engineering, University of East Sarajevo. This project serves as a cloud application designed to store the results of data processing performed by a cluster of Raspberry Pi devices. The application is implemented using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Features

- **Distributed Data Processing:** Cloudberry utilizes a cluster of Raspberry Pi devices to perform data processing tasks in a distributed manner.

- **Data Processing:** The cluster of Raspberry Pis performs data processing tasks and stores the results in the cloud.

- **Dashboard:** The application provides a user-friendly dashboard to monitor and manage data processing tasks.
  
- **MERN Stack:** The application is developed using the MERN stack, which includes MongoDB for the database, Express.js for the backend, React for the frontend, and Node.js as the runtime environment.

## Installation

To run the Cloudberry project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/vascabarkapa/raspberry-cluster-analysis.git
2. Set up the environment variables:
    ```bash
    PORT=
    ENVIRONMENT=
    CONNECTION_STRING="create account on mongoDb"
    ACCESS_TOKEN_SECRET=
    API_URL=
    FRONT_URL=
3. Navigate to project directory:
    ```bash
    cd raspberry-cluster-analysis
4. Install dependencies for the backend:
    ```bash
    cd server
    npm install
5. Install dependencies for the frontend:
    ```bash
    cd ../client
    yarn install
6. Start the backend server:
    ```bash
    cd ../server
    npm start
7. Start the frontend application:
    ```bash
    cd ../client
    yarn start
8. Open your web browser and navigate to http://localhost:3000 to access the Cloudberry application.

## Technologies Used
- **MongoDB:** Database for storing processed data.
- **Express:** Backend framework for building the API.
- **React** Frontend library for building user interfaces.
- **Node:** Runtime environment for executing JavaScript on the server.

## License

This project is licensed under the [MIT License](LICENSE).