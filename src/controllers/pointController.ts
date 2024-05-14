import { NextFunction, Response, Request } from "express";
import IPoint from "../interfaces/IPoint";
import PointService from "../services/pointService";

export default class PointController {
  private res: Response;
  private req: Request;
  private next: NextFunction;
  private pointService: PointService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.res = res;
    this.req = req;
    this.next = next;
    this.pointService = new PointService();
  }

  public create = async () => {
    try {
      const point: IPoint = { ...this.req.body };

      const createdPoint = await this.pointService.create(point);

      return this.res
        .status(201)
        .json({ message: "Point created", point: createdPoint });
    } catch (error: any) {
      return this.res
        .status(500)
        .json({ message: "Error creating point", error: error.message });
    }
  };

  public getPoints = async () => {
    try {
      const { uf, cidade } = this.req.params;
      const { page, limit } = this.req.body;

      const points = await this.pointService.getPoints(uf, cidade, page, limit);

      return this.res.status(200).json(points);
    } catch (error: any) {
      return this.res
        .status(500)
        .json({ message: "Error getting points", error: error.message });
    }
  };

  public getAllPoints = async () => {
    try {
      const points = await this.pointService.getAllPoints();
      return this.res.status(200).json(points);
    } catch (error: any) {
      return this.res
        .status(500)
        .json({ message: "Error getting all points", error: error.message });
    }
  };

  public update = async () => {
    try {
      const { id } = this.req.params;
      const point: IPoint = { ...this.req.body };

      const updatedPoint = await this.pointService.update(id, point);

      return this.res
        .status(200)
        .json({ message: "Point updated", point: updatedPoint });
    } catch (error: any) {
      return this.res
        .status(500)
        .json({ message: "Error updating point", error: error.message });
    }
  };

  public delete = async () => {
    try {
      const { id } = this.req.params;

      await this.pointService.delete(id);

      return this.res.status(200).json({ message: "Point deleted" });
    } catch (error: any) {
      return this.res
        .status(500)
        .json({ message: "Error deleting point", error: error.message });
    }
  };
}
