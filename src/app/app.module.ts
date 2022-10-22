import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { AddComponent } from './modules/add/add.component';
import { HttpServicesService } from './service/http-services.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './modules/details/details.component';
import { EditComponent } from './modules/edit/edit.component';
import { ChartComponent } from './components/chart/chart.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { ListComponent } from './modules/list/list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AddComponent, NavbarComponent, DetailsComponent, EditComponent, ChartComponent, ListTableComponent, ListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'add', component: AddComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'list', component: ListComponent },
    ]),
  ],
  providers: [HttpServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
