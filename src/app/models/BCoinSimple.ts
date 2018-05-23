export class BCoinSimple {
  symbol: string; // "ETHBTC"
  price: string; // "0.08967100"

  constructor (item = {}) {
    Object.assign(this, item);
  }
}
