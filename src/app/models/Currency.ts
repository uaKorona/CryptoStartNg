/* eslint-disable */

export default class Currency {
  id: string; // bitcoin
  name: string; // Bitcoin
  symbol: string; // BTC
  rank: number; // 1
  price_usd: number; // 573.137
  price_btc: number; // 1.0
  ['24h_volume_usd']: number; // 72855700.0
  market_cap_usd: number; // 9080883500.0
  available_supply: number; // 15844176.0
  total_supply: number; // 15844176.0
  percent_change_1h: number; // 0.04
  percent_change_24h: number; // -0.3
  percent_change_7d: number; // -0.57
  last_updated; // 1472762067
  imageSrc: string = null;
  change24Dynamic = false;
  isOnBinance = false;

  constructor(item = {}) {
    Object.assign(this, item);
    this.percent_change_24h = this.convertStringToNumber(this.percent_change_24h);
    this.change24Dynamic = this.isDynamicPositive(this.percent_change_24h);
  }

  convertStringToNumber(str) {
    return +str;
  }

  isDynamicPositive(num) {
    return num > 0;
  }
}
