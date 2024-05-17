import { Request, Response, NextFunction } from "express";
import Access from "../models/Access";

export const incrementAccessCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const accessedAt = new Date();

  const lastAccess = await Access.findOne({ ip }).sort({ accessedAt: -1 });

  if (
    lastAccess &&
    lastAccess.accessedAt &&
    accessedAt.getTime() - lastAccess.accessedAt.getTime() < 10 * 60 * 1000
  ) {
    next();
    return;
  }

  const access = new Access({ ip, accessedAt, count: 1 });
  await access.save();

  next();
};

export const getTotalAccessCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessRecords = await Access.find();

  const totalAccessCount = accessRecords.reduce(
    (total, record) => total + (record.count ?? 0),
    0
  );

  res.json({ totalAccessCount });
};
