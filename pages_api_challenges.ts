import type { NextApiRequest, NextApiResponse } from "next";

const challenges = [
  { title: "Bike to Work", description: "Ditch your car for a day!", reward: 10 },
  { title: "Segregate Waste", description: "Sort your trash into recyclables and compost.", reward: 5 },
  { title: "Reduce Power Usage", description: "Keep your electricity use below 8kWh today.", reward: 8 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(challenges);
}