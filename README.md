# Chat App (Express + Socket.IO)

A simple real-time chat app built with **Node.js**, **Express**, and **Socket.IO**.

## Features
- Serves a single frontend page (`home.html`)
- Real-time messaging via WebSockets (Socket.IO)
- All connected clients receive messages immediately

## Project Structure
- `index.js` — Express + Socket.IO server
- `home.html` — Frontend UI (message input + send button)
- `package.json` — Dependencies and project metadata

## Requirements
- Node.js (v18+ recommended)

## Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node index.js
   ```
3. Open in your browser:
   - http://localhost:3000

## How it Works
### Server (`index.js`)
- Creates an HTTP server and attaches Socket.IO to it
- Listens for incoming socket events:
  - Client sends: `message`
  - Server broadcasts to everyone: `message`
- Serves `home.html` at `/`

### Client (`home.html`)
- Connects to Socket.IO: `const socket = io();`
- On Send button click:
  - Emits `socket.emit('message', message)`
- On receiving a message:
  - Appends the message into `#messages`

## Notes
### Port 3000 already in use
If you see:
- `EADDRINUSE: address already in use :::3000`

That means something is already running on port **3000**. Stop the other process or change the port in `index.js`.

## Dependencies
- `express`
- `socket.io`

