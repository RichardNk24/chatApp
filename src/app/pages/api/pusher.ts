import type { NextApiRequest, NextApiResponse } from 'next';
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  useTLS: true
});

interface MessageBody {
  message: string;
  sender: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string }>
) {
  const { message, sender } = req.body as MessageBody;
  
  pusher.trigger('chat-channel', 'message-event', {
    message,
    sender
  });

  res.status(200).json({ status: 'Message sent' });
}