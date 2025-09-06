import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Simulate IoT device sending power usage, etc.
    const { deviceId, metric, value } = req.body;
    // TODO: Store or process data, update tokens, etc.
    return res.status(200).json({ status: "received", deviceId, metric, value });
  }
  res.status(405).json({ error: "Method not allowed" });
}