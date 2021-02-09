import { Component, OnInit, ViewChild  } from '@angular/core';
import { Subscription } from 'rxjs'
import { Router } from '@angular/router';
import { BitcoinService } from '../../services/bitcoin.service';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';


@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})

export class StatisticPageComponent implements OnInit {
  public charts: {
    title: string;
    type: ChartType;
    data: any[][];
    columns?: Column[];
    options?: {};
  }[] = [];
  tradeSubscription: Subscription;
  marketSubscription: Subscription;
  @ViewChild('chart', { static: true })
  public chart!: GoogleChartComponent;
  constructor(private router: Router, private bitcoinService: BitcoinService) { }
 

  public onError(error: ChartErrorEvent) {
    console.error('Error: ' + error.message.toString());
  }

  public onSelect(event: ChartSelectionChangedEvent) {
    console.log('Selected: ' + event.toString());
  }

  public onMouseEnter(event: ChartMouseOverEvent) {
    console.log('Hovering ' + event.toString());
  }

  public onMouseLeave(event: ChartMouseLeaveEvent) {
    console.log('No longer hovering ' + event.toString());
  }

  ngOnInit() {
    this.marketSubscription = this.bitcoinService.getMarketPrice().subscribe(res => {
      this.charts.push({
        title: 'Market Price Fluctuation',
        type: ChartType.ColumnChart,
        columns: [
          'Month',
          'Price'
        ],
        data: res
      });
    })
    this.tradeSubscription = this.bitcoinService.getConfirmedTransactions().subscribe(res => {
      this.charts.push({
            title: 'Trade Volume Changes',
            type: ChartType.Histogram,
            columns: [
              'Month',
              'Price'
            ],
            options: {   
              legend:'none',
              colors:['green']
           },
            data: res
          });
    })
   
  }



  

}
