#!/usr/bin/env node

// Edward Baker

// I learned that: The order in which you define your endpoints in the file can affect how they are processed by your server.
// In most web frameworks, including Express, routes are processed in the order they are defined in the code.
// This means that if a request matches multiple routes, the first matching route will be used.

// Import modules from a03
import {rps, rpsls} from "./lib/rpsls.js";
// To read cli args
import minimist from "minimist";
const args = minimist(process.argv.slice(2));
// Setting up express
import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Defining port
const PORT = args.port || 5000;

// Check Endpoint
app.get('/app/', (req, res) => {
  res.status(200).send('200 OK');
});

// Endpoint /app/rps/ that returns {"player":"(rock|paper|scissors)"}
app.get('/app/rps/', (req, res) => {
	res.status(200).send(rps());
});

// Endpoint /app/rpsls/ that returns {"player":"(rock|paper|scissors|lizard|spock)"}
app.get('/app/rpsls/', (req, res) => {
	res.status(200).send(rps());
});

// Endpoint /app/rps/play/, takes shot=(rock|paper|scissors) (URLEncoded)
app.get('/app/rps/play/', (req, res) => {
	res.status(200).send(rps(req.query.shot));
});

// Endpoint /app/rps/play/, takes shot=(rock|paper|scissors) (JSON)
app.post('/app/rps/play/', (req, res) => {
	res.status(200).send(rps(req.body.shot));
});

// Endpoint /app/rpsls/play/, takes shot=(rock|paper|scissors) (URLEncoded)
app.get('/app/rpsls/play/', (req, res) => {
	res.status(200).send(rpsls(req.query.shot));
});

// Endpoint /app/rpsls/play/, takes shot=(rock|paper|scissors) (JSON)
app.post('/app/rpsls/play/', (req, res) => {
	res.status(200).send(rpsls(req.body.shot));
});

// Endpoint /app/rpsls/play/(rock|paper|scissors)/
app.get('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(rps(req.params.shot));
});

// Endpoint /app/rpsls/play/(rock|paper|scissors|lizard|spock)/
app.get('/app/rpsls/play/:shot', (req, res) => {
	res.status(200).send(rpsls(req.params.shot));
});

// Default Endpoint
app.get('*', (req, res) => {
  res.status(404).send('404 NOT FOUND');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
