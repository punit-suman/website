// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import executeQuery from "../../lib/db";

export default async function handler(req, res) {
  try {
    const requestMethod = req.method;
    if (requestMethod == 'GET') {
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
      // const result = await executeQuery({
      //     query: 'select * from user_visits',
      //     // query: 'INSERT INTO users (id, createdAt, email, hash, salt) VALUES(?, ?, ?, ?, ?)',
      //     // values: [user.id, user.createdAt.toString(), user.email, user.hash, user.salt],
      // });
      await executeQuery({
        query: 'insert into user_visits(ip) values(?)',
        values: [ip],
    });
      res.status(200).json({ message: 'Welcome to the website' })
      return
    }
    res.status(200).json({ message: 'Welcome to API Routes!'})
  } catch(err) {
    console.log('Error: /api/hello', err.message)
    res.status(200).json({ error: 'API call error'})
  }
  
}
