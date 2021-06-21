module.exports = {
	async up(db, client) {
		const session = client.startSession();
		try {
			await session.withTransaction(async () => {
				const result = await db
					.collection('tasks')
					.find({ _id: { $type: 'objectId' } })
					.toArray();

				const asyncActions = result.map((item) => {
					return new Promise(async (resolve, reject) => {
						try {
							const oldId = item._id;
							item._id = oldId.toHexString();
							await db.collection('tasks').insertOne(item);
							await db.collection('tasks').remove({ _id: oldId });
							resolve();
						} catch (error) {
							reject(error);
						}
					});
				});

				await Promise.all(asyncActions);
			});
		} finally {
			await session.endSession();
		}
	},

	async down(db, client) {},
};
