import IPoint from "../interfaces/IPoint";

export default class Point {
  readonly id: string | undefined;
  protected nome: string;
  protected cidade: string;
  protected uf: string;
  protected rua: string;
  protected numero: string;
  protected bairro: string;
  protected telefone: string;

  constructor(point: IPoint) {
    this.id = point.id;
    this.nome = point.nome;
    this.cidade = point.cidade;
    this.uf = point.uf;
    this.rua = point.rua;
    this.numero = point.numero;
    this.bairro = point.bairro;
    this.telefone = point.telefone;
  }
}
