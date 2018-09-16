import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataRta } from '../DataRta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  //quotes:any[]=[];
  currency:DataRta[];
  moneda:string;
  coutrysList:never[];
  cotizacion: any;
  index:any;
  currencies: any[];
  arrayCurrency: { type: string; value: any; }[];
  paises: any[];
  constructor(private dataSvc : DataService) {
  }
  
  ngOnInit(){
    this.showCurrency();
    this.showList();
  }
  
  showCurrency(){
    this.dataSvc.getCurrency(this.moneda = 'ARS')
    .subscribe((data:DataRta[]) => {
      this.currency = data;
      this.index=this.currency['source']+this.moneda;
      console.log(this.index);
      this.cotizacion = (this.currency['quotes']);
    });
  }

  showList(){
    this.dataSvc.getList().subscribe((data:any[])=> {
      this.currencies = data['currencies'];
      this.paises = Object.values(this.currencies);
      console.log(this.paises);
    });
  }


}
