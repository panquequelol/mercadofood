const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const secret_key = 'this is a secret key';
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
	const user = new User(req.body);
	const newUser = await user.save();

	try {
		const payload = {
			_id: user._id,
		};
		// guardar el usuario en una cookie
		const myJWT = jwt.sign(payload, secret_key);
		res
			.cookie('usertoken', myJWT, secret_key, {
				httpOnly: true,
			})
			.json(newUser);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
};

module.exports.login = async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (user === null) {
		res.json({ error: true, message: 'Wrong email' });
	} else {
		const passwordValid = await bcrypt.compare(req.body.password, user.password);
		try {
			if (passwordValid) {
				const payload = {
					_id: user._id,
				};
				const myJWT = jwt.sign(payload, secret_key);
				res
					.cookie('usertoken', myJWT, secret_key, {
						httpOnly: true,
					})
					.json({ error: false, message: 'logged in correctly' });
			} else {
				res.json({ error: true, message: 'Wrong password' });
			}
		} catch (error) {
			res.json({ error: true, message: 'Invalid log in' });
		}
	}
};

module.exports.logout = (req, res) => {
	res.clearCookie('usertoken');
	res.status(200).json({ message: 'Logged out' });
};
