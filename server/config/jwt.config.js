const jwt = require('jsonwebtoken');
const secret_key = 'this is a secret key';

module.exports.authenticate = (req, res, next) => {
	jwt.verify(req.cookies.usertoken, secret_key, (err, payload) => {
		if (err) {
			res.status(401).jsn({ verified: false });
		} else {
			next();
		}
	});
};
