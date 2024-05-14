import Point from "../domain/point";
import IPoint from "../interfaces/IPoint";
import PointODM from "../models/pointODM";

export default class PointService {
  private pointODM = new PointODM();

  private createPoint(point: IPoint) {
    return new Point(point);
  }

  create = async (point: IPoint) => {
    const newPoint = await this.pointODM.create(point);
    return this.createPoint(newPoint);
  };

  getPoints = async (
    uf: string,
    cidade: string,
    page: number = 1,
    limit: number = 15
  ) => {
    const points = await this.pointODM.getPoints(uf, cidade, page, limit);
    return points.map(this.createPoint);
  };

  getAllPoints = async (page: number = 1, limit: number = 10) => {
    const points = await this.pointODM.getAllPoints(page, limit);
    return points.map(this.createPoint);
  };

  update = async (id: string, point: IPoint) => {
    const updatedPoint = await this.pointODM.update(id, point);
    if (updatedPoint) {
      return this.createPoint(updatedPoint);
    }
    throw new Error("Failed to update point");
  };

  delete = async (id: string) => {
    await this.pointODM.delete(id);
  };
}
