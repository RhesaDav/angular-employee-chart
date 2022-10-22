import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../../service/http-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Angular 11 CRUD';

  constructor(
  ) { }

  ngOnInit(): void {

  }


}
