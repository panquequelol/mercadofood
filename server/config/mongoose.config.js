const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/mercadofood', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('🥬DB Connected'))
	.catch((error) => console.log('❌Error conecting to the DB ' + error));
