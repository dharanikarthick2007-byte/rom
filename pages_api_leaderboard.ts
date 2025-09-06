import type { NextApiRequest, NextApiResponse } from "next";

const leaderboard = [
  { name: "Alice", tokens: 150 },
  { name: "Bob", tokens: 120 },
  { name: "You", tokens: 90 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(leaderboard);
}