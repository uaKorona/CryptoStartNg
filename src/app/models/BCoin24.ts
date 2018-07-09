export class BCoin24 {
  symbol: string; // BNBBTC,
  priceChange: number; // -94.99999800,
  priceChangePercent: number; // -95.960,
  weightedAvgPrice: number; // 0.29628482,
  prevClosePrice: number; // 0.10002000,
  lastPrice: number; // 4.00000200,
  lastQty: number; // 200.00000000,
  bidPrice: number; // 4.00000000,
  askPrice: number; // 4.00000200,
  openPrice: number; // 99.00000000,
  highPrice: number; // 100.00000000,
  lowPrice: number; // 0.10000000,
  volume: number; // 8913.30000000,
  quoteVolume: number; // 15.30000000,
  openTime: number; // 1499783499040,
  closeTime: number; // 1499869899040,
  fristId: number; // 28385,   // First tradeId
  lastId: number; // 28460,    // Last tradeId
  count: number; // 76

  constructor (item = {}) {
    Object.assign(this, item);
  }
}
