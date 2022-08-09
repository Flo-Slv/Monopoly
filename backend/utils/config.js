const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const MONGODB = `mongodb+srv://FloSlv:${DB_PASSWORD}@flo.j1cmj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export {
	MONGODB
}
