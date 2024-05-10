import { Schema, Model, model, models } from "mongoose";
import IPoint from "../interfaces/IPoint";

export default class PointODM {
  private schema: Schema;
  private model: Model<IPoint>;

  constructor() {
    this.schema = new Schema<IPoint>({
      nome: { type: String, required: true },
      cidade: { type: String, required: true },
      uf: { type: String, required: true },
      rua: { type: String, required: true },
      numero: { type: String, required: true },
      bairro: { type: String, required: true },
      telefone: { type: String, required: true },
    });

    this.model = models.Points || model("Points", this.schema);
  }

  public async create(point: IPoint) {
    return this.model.create({ ...point });
  }

  async getPoints(uf: string, cidade: string, page: number, limit: number) {
    const offset = (page - 1) * limit;
    return this.model.find({ uf, cidade }).skip(offset).limit(limit);
  }

  async getAllPoints(page: number, limit: number) {
    const offset = (page - 1) * limit;
    return this.model.find().skip(offset).limit(limit);
  }

  async update(id: string, point: IPoint) {
    return this.model.findByIdAndUpdate(id, point, { new: true });
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
