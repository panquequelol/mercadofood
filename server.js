const express = require('express');
const cors = require('cors');
const app = express();
// enable json usage
app.use(express.json(), express.urlencoded({ extended: true }));
// allow access from a different origin (front-end server)
app.use(
	cors({
		// front-end URL
		origin: 'http://localhost:3000',
	})
);
// Initialize DB
require('./server/config/mongoose.config');
// Import routes
const myRoutes = require('./server/routes/product.routes');
myRoutes(app);

app.listen(8000, () => {
	console.log('✨Server up!');
});
