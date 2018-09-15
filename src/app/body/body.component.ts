import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  data:any[]=[];
  constructor(private dataSvc : DataService) {
    this.data=dataSvc.data
  }


}
