import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeModifiedComponent } from './employee-modified/employee-modified.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    FormComponent,
    FooterComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeModifiedComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
