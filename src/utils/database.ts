import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
	mongoose.set('strictQuery', true);

	if (isConnected) {
		console.info('==== MongoDB is already connected ====');
		return;
	}
	try {
		await mongoose.connect(process.env.MONGODB_URI ?? '', { dbName: 'properties' });
		isConnected = true;
		console.info('==== MongoDB connected ====');
	} catch (error) {
		console.error(error);
	}
};
