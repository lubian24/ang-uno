import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DataRta } from '../DataRta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  //quotes:any[]=[];
  currency:DataRta;
  moneda:string;
  constructor(private dataSvc : DataService) {
    this.showCurrency();
  }

  showCurrency(){
    this.dataSvc.getCurrency(this.moneda = 'ARS')
    .subscribe((data:DataRta) => {
      console.log(data);
      this.currency = data;
    }
      
    );
  }


}
