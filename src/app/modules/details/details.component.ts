import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/service/http-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  employee: any;

  constructor(
    private http:HttpServicesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.getDetailEmployee(params.id);
      console.log(params.id);
    });
  }

  getDetailEmployee(id:any) {
    this.http.get(this.http.url + '/employee/' + id).subscribe((res: any) => {
      this.employee = res;
      console.log(res);
    });
  }

}
