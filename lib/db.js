import mysql from 'serverless-mysql';

const db = mysql({
	config: {
		/* TODO:
			host: process.env.MYSQL_HOST,
			port: process.env.MYSQL_PORT,
			database: process.env.MYSQL_DATABASE,
			user: process.env.MYSQL_USER,
			password: process.env.MYSQL_PASSWORD
		*/
		host: "dev-lifeactions-db.ckzcfxihz4uf.ap-south-1.rds.amazonaws.com",
		user: "admin",
		password: "password123",
		database: "website",
		port: 3306
	}
});

export default async function executeQuery({ query, values = null }) {
	try {
		let results;
		if (values) {
			results = await db.query(query, values);
		} else {
			results = await db.query(query);
		}
		await db.end();
		return results;
	} catch (error) {
		return { error };
	}
}