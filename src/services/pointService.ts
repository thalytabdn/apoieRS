import Point from "../domain/point";
import IPoint from "../interfaces/IPoint";
import PointODM from "../models/pointODM";

export default class PointService {
  private pointODM = new PointODM();

  private createPoint(point: IPoint) {
    return new Point(point);
  }

  public create = async (point: IPoint) => {
    const existingPoint = await this.pointODM.findPointByAddress(
      point.rua,
      point.numero,
      point.bairro,
      point.cidade,
      point.uf
    );

    if (existingPoint) {
      return;
    }

    const createdPoint = await this.pointODM.create(point);
    return this.createPoint(createdPoint);
  };

  getPoints = async (
    uf: string,
    cidade: string,
    page: number = 1,
    limit: number = 15
  ) => {
    const totalElements = await this.pointODM.countPoints(uf, cidade);
    const totalPages = Math.ceil(totalElements / limit);
    const points = await this.pointODM.getPoints(uf, cidade, page, limit);
    return {
      totalPages,
      totalElements,
      data: points.map(this.createPoint),
    };
  };

  getAllPoints = async (page: number = 1, limit: number = 10) => {
    const totalElements = await this.pointODM.countAllPoints();
    const totalPages = Math.ceil(totalElements / limit);
    const points = await this.pointODM.getAllPoints(page, limit);
    return {
      totalPages,
      totalElements,
      data: points.map(this.createPoint),
    };
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
