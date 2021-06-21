/* eslint-disable @typescript-eslint/no-var-requires */

const NodeEnvironment = require('jest-environment-node');
const { MongoClient } = require('mongodb');

class MongoTestEnvironment extends NodeEnvironment {
	mongoClient;
	mongoDb;
	constructor(config, context) {
		super(config, context);
	}

	async setup() {
		this.mongoClient = await MongoClient.connect(
			process.env.MONGO_URL || '',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		this.mongoDb = this.mongoClient.db();
		this.global.db = this.mongoDb;
		this.global.collection = this.mongoDb.collection('test-collection');
	}

	async teardown() {
		await this.mongoDb.dropDatabase();
		await this.mongoClient.close();
		delete this.global.collection;
		delete this.global.db;
		await super.teardown();
	}
}

module.exports = MongoTestEnvironment;
