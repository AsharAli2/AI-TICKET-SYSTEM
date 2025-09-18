import type { NextApiRequest, NextApiResponse } from 'next'
const db=require('../../../models/index')
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
  //   db.sequelize.sync()
  // .then(() => {
  //   console.log("Database Connected.");
  // })
  // .catch((err) => {
  //   console.log("Failed to sync db: " + err.message);
  // });

    const { username, user_id, category, description,fileUrl } = req.body;
console.log(req.body);

    // const createTicket = await db.Ticket.create({ user_id, category, description,Document:fileUrl,username });

    // res.status(200).send({ createTicket })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}