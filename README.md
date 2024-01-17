# Cloudberry Project
#### NOTE: This is a test version. Project under development. 
Cloudberry is a project created for the "Advanced Computer Architectures" course as part of the Master's program at the Faculty of Electrical Engineering, University of East Sarajevo. This project serves as a cloud application designed to store the results of data processing performed by a cluster of Raspberry Pi devices. The application is implemented using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Features

- **Distributed Data Processing:** Cloudberry utilizes a cluster of Raspberry Pi devices to perform data processing tasks in a distributed manner.

- **Real-time Monitoring:** Cloudberry offers real-time monitoring capabilities, allowing administrators to observe the performance and status of each Raspberry Pi in the cluster. This includes metrics such as CPU usage, memory utilization, and network activity.

- **Notification System:** The application features a notification system that alerts administrators about critical events, task completions, or any anomalies in the system. Notifications can be customized based on the severity of the event.

- **Data Visualization:** The app incorporates data visualization tools to represent processed data and statistics in an easy-to-understand format. This includes charts, graphs, and other visual aids to facilitate quick analysis of the data.

- **Customizable Reports:** Cloudberry allows administrators to generate customizable reports on cluster performance, data processing efficiency, and other relevant metrics. These reports can be exported in various formats for further analysis or presentation.

- **User Access Control:** The admin app incorporates user access control features, allowing administrators to define roles and permissions for different users. This ensures that only authorized personnel can access and modify specific aspects of the system.

- **MERN Stack:** The application is developed using the MERN stack, which includes MongoDB for the database, Express.js for the backend, React for the frontend, and Node.js as the runtime environment.

## Installation

To run the Cloudberry project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/vascabarkapa/raspberry-cluster-analysis.git
2. Set up the environment variables:
    ```bash
    PORT="Specifies the port on which your application will listen for HTTP requests"
    ENVIRONMENT="Indicates the environment in which the application is running"
    CONNECTION_STRING="Provide the connection string for connecting to your MongoDB database"
    ACCESS_TOKEN_SECRET="Secret key used for signing and verifying JWT (JSON Web Token) tokens"
    API_URL="Specifies the URL of your API service, e.g. http://localhost:5001/api"
    FRONT_URL="URL for the frontend application, e.g. http://localhost:3000"
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

## Technologies Stack
- **MongoDB:** Serving as the database solution, MongoDB is employed for the storage of processed data. Its flexible and scalable NoSQL architecture makes it an ideal choice for handling diverse datasets.
- **Express:** At the core of the backend infrastructure, Express serves as the web application framework. Its minimalistic and flexible design enables the seamless development of a robust API, providing efficient communication between the frontend and the database.
- **React** Powering the frontend, React stands as the library of choice for constructing dynamic and interactive user interfaces. Its component-based architecture promotes modular and maintainable code, facilitating an enhanced user experience.
- **Node:** As the runtime environment for server-side JavaScript execution, Node plays a pivotal role in ensuring the smooth functioning of the application. Its event-driven, non-blocking I/O model contributes to the overall responsiveness and scalability of the system.

## License

This project is licensed under the [MIT License](LICENSE).