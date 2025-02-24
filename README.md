# TodoApp

## Overview
TodoApp is a simple and efficient application to manage your daily tasks. Built with JavaScript, HTML, CSS, and Docker, this app allows users to add, sort, and mark tasks as completed.

![Screenshot 2025-02-24 103440](https://github.com/user-attachments/assets/3ae44b06-bc7c-4476-9515-d7a25d550490)

 Features
- Add new tasks
- Mark tasks as completed
- Sort tasks
- Dockerized for easy deployment

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/tomernegad/todoapp.git
    cd todoapp
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

## Usage
1. Run the application:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## Docker Deployment
1. Build the Docker image:
    ```sh
    docker build -t todoapp .
    ```
2. Run the Docker container:
    ```sh
    docker run -p 3000:3000 todoapp
    ```
