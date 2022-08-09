import mongoose from 'mongoose';

import { MONGODB } from '../../../.env.local';

const connectDb = () => {
	try {
		mongoose.connect(MONGODB, {
			useNewUrlParser: Boolean(true)
		});

		console.log('MongoDB connected 🚀');
	} catch (err) {
		console.log('Error connecting to database');
		console.error(err);
		process.exit(1);
	};
};

export default connectDb;
