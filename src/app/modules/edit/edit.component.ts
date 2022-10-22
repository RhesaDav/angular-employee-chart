import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServicesService } from 'src/app/service/http-services.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee: any;
  formEdit = this.form.group({
    name: [''],
    gender: [''],
    job: [''],
    email: [''],
    phone: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private http: HttpServicesService,
    private router: Router,
    private form: FormBuilder
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

  editEmployee(event:any) {
    console.log(event);
    const data = {
      name: event.target[0].value,
      email: event.target[1].value,
      phone: event.target[2].value,
      job: event.target[3].value,
      gender: event.target[4].value,
    }
    console.log(data);
    this.http.put(this.http.url + '/employee/' + this.employee.id, data).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/list']);
    });
  }

}
