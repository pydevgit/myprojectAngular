import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 public name: string ="Employee";
 public employees = [
  {"id": 1, "name": "Nitin", "age": 22},
  {"id": 2, "name": "Ramesh", "age": 30},
  {"id": 3, "name": "Mishra", "age": 23},
  {"id": 5, "name": "Nitin", "age": 24}
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
