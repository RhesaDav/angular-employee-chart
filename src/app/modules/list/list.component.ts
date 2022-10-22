import { Component, OnInit, Input } from '@angular/core';
import { HttpServicesService } from '../../service/http-services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   employee: any;

  constructor(
    private http: HttpServicesService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.http.get(this.http.url + '/employee').subscribe((res: any) => {
      console.log(res);
      this.employee = res;
      
    });
  }

}
