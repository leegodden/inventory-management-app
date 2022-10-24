const dotenv = require('dotenv').config();
import express, { Express, Request, Response } from 'express';
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

mongoose.connect(process.env.MONGO_URI).then(() => {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
