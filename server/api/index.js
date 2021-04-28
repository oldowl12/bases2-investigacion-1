const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit'); // Limits allowed calls for x amount of ms
const slowDown = require('express-slow-down'); // Slows each following request if spammed
const axios = require('axios'); // Use axios to make http requests
const db = require('../db/config');


// Limiting number of requests possible for a set amount of time
const limiter = rateLimit({
	windowMs: 30 * 1000, // Time frame (30 seconds * 1000ms)
	max: 10, // Max amount of requests
});

// Slowing down each request after a specific number of requests
const speedLimiter = slowDown({
	windowMs: 30 * 1000, // Time frame (30 seconds * 1000ms)
	delayAfter: 3, // Start delaying after 3 requests within the time frame
	delayMs: 500 // Make each requests 500ms slower
});

router.get('/', limiter, speedLimiter, (req, res) => {
	res.json({
		message: 'API - 👋🌎🌍🌏'
	});
});

router.get('/arangoTest', (req, res) =>{
	db.listCollections().then(function(res) {
		res.forEach((coll, i) => {
			console.log(`${i+1}. ${coll.name} (ID=${coll.id}, system=${coll.isSystem})`)
		});
	}, function(err) {
		const res = err.response.body;
		console.log(`Error ${res.errorNum}: ${res.errorMessage} (HTTP ${res.code})`);
	});
	res.json({
		message: 'Arango tested'
	})
});

// router.use('/example-path', example); ==> to be routed to: api/chosen_path for example

module.exports = router;