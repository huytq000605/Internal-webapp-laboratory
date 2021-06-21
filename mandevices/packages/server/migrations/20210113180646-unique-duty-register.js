module.exports = {
	async up(db, client) {
		const session = client.startSession();
		try {
			await session.withTransaction(async () => {
				await new Promise(async (resolve, reject) => {
					try {
						await db.collection('duties').createIndex(
							{ subscriberId: 1, date: 1 },
							{
								unique: true,
								name: 'unique_duty_register',
							}
						);
						resolve();
					} catch (error) {
						reject(error);
					}
				});
			});
		} finally {
			await session.endSession();
		}
	},

	async down(db, client) {
		const session = client.startSession();
		try {
			await session.withTransaction(async () => {
				await new Promise(async (resolve, reject) => {
					try {
						await db
							.collection('duties')
							.dropIndex('unique_duty_register');
						resolve();
					} catch (error) {
						reject(error);
					}
				});
			});
		} finally {
			await session.endSession();
		}
	},
};
