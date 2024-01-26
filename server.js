const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// used for JWT generation
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Load .env
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Secret key for signing the JWT (update value in .env file)
const secretKey = process.env.ZENDESK_SECRET_KEY;
// Zendesk Subdomain for the login URL (update value in .env file)
const subdomain = process.env.ZENDESK_SUBDOMAIN;
// App port
const port = process.env.PORT;

/* App route */
app.post('/jwt', (req, res) => {
	console.log('================ Request received ================');
	console.log(req.body);
	try {
		const data = {
			subdomain: subdomain,
			jwt: generateToken(req.body),
		};
		console.log('================ Zendesk HC JWT ================');
		console.log(jwt.decode(data.jwt, { complete: true }));

		res.status(200).json(data);
	} catch (err) {
		res.send(err);
	}
});

function generateToken(payload) {
	const header = {
		algorithm: 'HS256',
	};
	// Generate jti needed in messaging JWT payload
	const jti = crypto.randomBytes(6).toString('hex');
	payload.jti = jti;

	// Generate the JWT
	const token = jwt.sign(payload, secretKey, header);

	return token;
}

app.listen(port, () => {
	console.log(`Server running on port ${port}. Visit http://localhost:${port}`);
});
