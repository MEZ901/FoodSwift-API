# FoodSwift-API Docker Documentation
This documentation provides instructions for running the FoodSwift-API application using Docker.

## Table of Contents

- [FoodSwift-API Docker Documentation](#foodswift-api-docker-documentation)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Running the Application with Docker Compose](#running-the-application-with-docker-compose)
  - [Stopping the Docker Container](#stopping-the-docker-container)
  - [Running the API and the Web Application Together with Docker Compose](#running-the-api-and-the-web-application-together-with-docker-compose)

## Prerequisites
- Docker
- Docker Compose

## Running the Application with Docker Compose
1. Clone the `FoodSwift-API` repository to your local machine if you haven't already.
   ```sh
   git clone git@github.com:MEZ901/FoodSwift-API.git
   ```
3. Open a terminal and change to the `FoodSwift-API` directory.
   ```sh
   cd FoodSwift-API
   ```
4. Build the Docker container.
    ```sh
    docker-compose build
    ```
5. Run the Docker container.
    ```sh
    docker-compose up
    ```
6. Open Postman or any other API testing tool and navigate to `http://localhost:8080` to view the API.

## Stopping the Docker Container
To stop the running Docker container, open a terminal in the same directory where the docker-compose.yml file is located and run:
```sh
docker-compose down
```
This will stop and remove the container.

## Running the API and the Web Application Together with Docker Compose
To run the API and the web app together using Docker, you can create a Docker Compose configuration that sets up both services (frontend and backend) in the same network. Here's how you can do it:

1. Create a directory for the combined project:
    ```sh
    mkdir FoodSwift
    ```
2. Navigate to the newly created directory:
    ```sh
    cd FoodSwift
    ```
3. Clone the `FoodSwift-Web` repository and the `FoodSwift-API` repository to the `FoodSwift` directory.
   ```sh
   git clone git@github.com:MEZ901/FoodSwift-Web.git
   ```
   ```sh
   git clone git@github.com:MEZ901/FoodSwift-API.git
   ```
4. Create a new file named `docker-compose.yml` in the `FoodSwift` directory.
   ```sh
   touch docker-compose.yml
   ```
5. Open the `docker-compose.yml` file in a text editor and add the following configuration:
   ```yml
   version: "3.8"
    services:
    api:
        container_name: foodswift_api
        build:
        context: ./FoodSwift-API
        dockerfile: ./docker/Dockerfile
        image: foodswift_api:1.0.0
        ports:
        - "8080:8080"
        volumes:
        - ./FoodSwift-API:/app
        - /app/node_modules

    web:
        container_name: foodswift_web
        build:
        context: ./FoodSwift-Web
        dockerfile: ./docker/Dockerfile
        image: foodswift_web:1.0.0
        ports:
        - "3000:3000"
        volumes:
        - ./FoodSwift-Web:/app
        - /app/node_modules
        depends_on:
        - api
   ```
6. Save the file and close the text editor.
   ```sh
   :wq
   ```
7. Build the Docker containers.
    ```sh
    docker-compose build
    ```
8.  Run the Docker containers.
    ```sh
    docker-compose up
    ```
9.  Open a browser and navigate to `http://localhost:3000` to view the application.