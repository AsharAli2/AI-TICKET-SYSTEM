import { NextResponse } from 'next/server';
// const db=require('../../../models/index')
import db from '../../../models/index'
export async function POST(request: Request,res:Response) {
  try {
    db.sequelize.sync()
  .then(() => {
    console.log("Database Connected.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
 const body = await request.json(); 
    const { username, user_id, category, description,fileUrl } = body;
// console.log(request);

    const createTicket = await db.Ticket.create({ user_id, category, description,Document:fileUrl,username });

     NextResponse.json(createTicket )
  } catch (err) {
    NextResponse.json({ error: 'failed to fetch data' })
  }
}