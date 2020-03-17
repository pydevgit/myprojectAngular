import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-modified',
  templateUrl: './employee-modified.component.html',
  styleUrls: ['./employee-modified.component.css']
})
export class EmployeeModifiedComponent implements OnInit {
  public modifiedName: string = " Modified";

  public employees = [
   {"id": 1, "name": "Roshim", "age": 23},
   {"id": 2, "name": "Hhame", "age": 32},
   {"id": 3, "name": "Tyaul", "age": 35},
   {"id": 1, "name": "Toshim", "age": 53},
   {"id": 2, "name": "Ohame", "age": 32},
   {"id": 3, "name": "Saul", "age": 65}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
