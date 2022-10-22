import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { HttpServicesService } from 'src/app/service/http-services.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {

  employee: any;
  employeeJob: any;

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels = [];

  barChartType: ChartType = 'bar';

  barChartLegend = true;

  barChartData: ChartDataset[] = [
    // { data: [100], label: 'designer' },
  ];
  employeeTypeJobTotal: any;

  constructor(
    private http: HttpServicesService
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.http.get(this.http.url + '/employee').subscribe((res: any) => {
      console.log(res);
      this.employee = res;
      this.employeeJob = new Set(this.employee.map((item: any) => item.job))
      this.barChartLabels = Array.from(this.employeeJob);
      // this.barChartData = this.barChartLabels.map((item: any) => {
      //   return {
      //     data: [this.employee.filter((i: any) => i.job === item).length],
      //     label: item
      //   }
      // })
      this.barChartData = [{data: this.barChartLabels.map((item: any) => this.employee.filter((i: any) => i.job === item).length), label: 'job'}]
      console.log('xxx',this.barChartData);
    });
  }
  
}
