export default class Bhaskara {
  public calcular(a: number, b: number, c: number): number[] {
    // Calcula o discriminante (delta)
    const delta = b ** 2 - 4 * a * c;

    // Calcula as duas raízes
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Retorna as duas raízes em um array
    return [x1, x2];
  }
}
