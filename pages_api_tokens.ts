import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Mock tokens for this user
  res.status(200).json({ tokens: 90 });
}