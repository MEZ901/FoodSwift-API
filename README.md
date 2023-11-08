# FoodSwift-API
This is the backend API for FoodSwift, a restaurant delivery application. It powers the core functionality of order processing, user management, and delivery tracking.

## Table of Contents
- [FoodSwift-API](#foodswift-api)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [1. installation](#1-installation)
    - [2. Configuration](#2-configuration)
    - [3. Database Setup](#3-database-setup)
    - [4. Running the Application](#4-running-the-application)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [API Documentation](#api-documentation)
  - [Docker](#docker)
  - [Testing](#testing)

## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).
- Yarn: We use Yarn as a package manager. You can install it via npm with the following command: `npm install -g yarn`.
- MongoDB: You need a MongoDB instance as the database for the application. You can install it locally or use a cloud-hosted solution like MongoDB Atlas.
- Docker: If you want to containerize your application, make sure Docker is installed. You can download it from [https://www.docker.com/](https://www.docker.com/).

## Getting Started
These instructions will help you set up and run the FoodSwift API on your local machine for development and testing purposes.

### 1. installation
- Clone this repository:
  ```bash
  git clone git@github.com:MEZ901/FoodSwift-API.git
  ```
- Navigate to the project directory:
  ```bash
  cd FoodSwift-API
  ```
- Install the required dependencies:
  ```bash
  yarn install
  ```

### 2. Configuration
Duplicate the .env.example file and rename it to .env
```bash
cp .env.example .env
```
Update the environment variables in the .env file as needed for your local setup.

### 3. Database Setup
- Ensure that your MongoDB server is up and running.

### 4. Running the Application
To start the FoodSwift API, run the following command:
```bash
yarn run dev
```
By default, the server will run on http://localhost:8080. You can change the port by modifying the PORT variable in your .env file.

## Usage
You can use Postman or any other API testing tool to test the API.

## Project Structure
You can find the project structure documentation [here](https://github.com/MEZ901/FoodSwift-API/wiki/Project-structure).

## API Documentation
The API documentation can be found [here](https://documenter.getpostman.com/view/25895747/2s9YXcf64q).

## Docker
The Docker documentation can be found [here](https://github.com/MEZ901/FoodSwift-API/tree/main/docker#readme).

## Testing
You can run tests using the following command:
```bash
yarn test
```
