import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  public getRate(coins) {
    return this.http.get<{ value: number }>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)

  }
  public getMarketPrice() {
    let monthMap = {}
    let data = []
    return this.http.get<{ values }>(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`).pipe(map
      (res => {
        monthMap = res.values.reduce((acc, curr) => {
          let month = moment(+`${curr.x}000`).format('MMM')

          acc[month] = acc[month] ?
            { total: acc[month].total + curr.y, count: acc[month].count + 1 } : { total: curr.y, count: 1 };
          return acc;

        }, {})

        Object.keys(monthMap).map(month => {
          let avg = Math.floor(monthMap[month].total / monthMap[month].count)
          let currMonth = [month, avg]
          data = [...data, currMonth]
        })
        return data

      }))


  }

  public getConfirmedTransactions() {
    let monthMap = {}
    let data = []
    return this.http.get<{ values }>(`https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`).pipe(map
      (res => {
        monthMap = res.values.reduce((acc, curr) => {
          let month = moment(+`${curr.x}000`).format('MMM')

          acc[month] = acc[month] ?
            { total: acc[month].total + curr.y, count: acc[month].count + 1 } : { total: curr.y, count: 1 };
          return acc;

        }, {})

        Object.keys(monthMap).map(month => {
          let avg = Math.floor(monthMap[month].total / monthMap[month].count)
          let currMonth = [month, avg]
          data = [...data, currMonth]
        })
        return data
      }
    ))
  }
}
