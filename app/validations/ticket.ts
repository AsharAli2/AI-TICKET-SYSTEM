import * as z from "zod"; 
 
export const Ticket = z.object({ 
  username: z.string(),
  xp: z.number()
});