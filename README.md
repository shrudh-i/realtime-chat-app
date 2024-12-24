# Realtime Chat App

This repository contains the source code for a realtime chat application. The app allows users to communicate with each other in real time, offering a seamless and responsive chatting experience. It is built using modern web development technologies.

## Features
- Realtime messaging between users.
- User authentication and session management.
- Responsive design for both desktop and mobile devices.
- Group chat functionality.
- Display of online/offline user statuses.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, and frameworks (if any, e.g., React, Vue).
- **Backend**: Node.js with Express.js.
- **Database**: MongoDB (or any other database used).
- **Realtime Communication**: Socket.IO for handling WebSocket connections.

## Getting Started

### Prerequisites
- Node.js installed on your system.
- MongoDB installed or access to a MongoDB Atlas cluster.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shrudh-i/realtime-chat-app.git
   cd realtime-chat-app
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables: Create a .env file in the root directory and add the following variables:
   ```bash
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
4. Start the application:
   ```bash
   npm start
5. Access the app in your browser at http://localhost:3000.

