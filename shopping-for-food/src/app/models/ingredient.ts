export enum Measurement {
  kilogram = 'kg',
  gram = 'g',
  litre = 'l',
  millilitre = 'ml',
  pieces = 'pcs',
}
export class Ingredient {
  constructor(
    public name: string,
    public amount: number,
    public measurement: Measurement
  ) {}
}
