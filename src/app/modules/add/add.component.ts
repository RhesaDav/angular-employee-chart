import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServicesService } from '../../service/http-services.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  postData = this.formBuilder.group({
    name: [''],
    job: [''],
    gender: [''],
    email: [''],
    phone: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  post() {
    this.http.post(this.http.url + '/employee', this.postData.value).subscribe((res: any) => {
      this.router.navigate(['/list']);
    });
  }

}
