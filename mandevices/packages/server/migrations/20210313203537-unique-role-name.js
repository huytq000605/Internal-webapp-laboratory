module.exports = {
	async up(db, client) {
		const session = client.startSession();
		try {
			await session.withTransaction(async () => {
				await db.collection('roles').createIndex(
					{ name: 1 },
					{
						unique: true,
						name: 'unique_role_name',
					}
				);
			});
		} finally {
			await session.endSession();
		}
	},

	async down(db, client) {
		const session = client.startSession();
		try {
			await session.withTransaction(async () => {
				await db.collection('roles').dropIndex('unique_role_name');
			});
		} finally {
			await session.endSession();
		}
	},
};
