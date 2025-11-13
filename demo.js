const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js App!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


// 🟦 WINDOWS (C:\docker_app_lab1)
// 1. Create folder
// mkdir C:\docker_app_lab1
// cd C:\docker_app_lab1

// 2. Initialize Node project
// npm init -y

// 3. Install Express
// npm install express

// 4. Create index.js
// notepad index.js


// Paste:

// const express = require("express");
// const app = express();
// app.get("/", (req, res) => res.send("Node App Running!"));
// app.listen(3000, () => console.log("Running on http://localhost:3000"));

// 5. Run
// node index.js


// Open browser:

// http://localhost:3000


// Take screenshots.

// 🟩 LINUX (/home/student/docker_app_lab1/)
// 1. Copy folder using FileZilla

// Destination:

// /home/student/docker_app_lab1/

// 2. Install Node
// sudo apt update
// sudo apt install nodejs npm -y

// 3. Run the app
// cd /home/student/docker_app_lab1
// npm install
// node index.js


// Browser:

// http://localhost:3000


// Take screenshots.
