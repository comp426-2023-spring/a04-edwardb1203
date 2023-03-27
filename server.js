
// Edward Baker

// Import modules from a03
import {rps, rpsls} from "./lib/rpsls.js";
// To read cli args
import minimist from "minimist";
const args = minimist(process.argv.slice(2));
// Setting up express
const express = require('express');
const app = express();
// Defining port
const PORT = args.port || 5000;


// Required API Endpoints Below

// Default Endpoint
app.use((req, res) => {
    res.status(404).send('404 Not Found');
  });

// Check Endpoint
app.get('/app/', (req, res) => {
  res.sendStatus(200);
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
