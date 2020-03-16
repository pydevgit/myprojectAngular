import { Component, OnInit } from '@angular/core';
import {TableService} from '../table.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
getdata:any;
  constructor(
private table: TableService

  ) { }

  ngOnInit(): void {

   this.table.getAllgamelist().subscribe((data)=>{
    this.getdata = data;
    console.log(this.getdata);

   });
  }

}
