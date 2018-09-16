import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataRta } from '../DataRta';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  currency:DataRta[];
  moneda:string;
  cotizacion: any;
  index:any;
  currencies: any[];
  arrayCurrency: { type: string; value: any; }[];
  paises: any[];
  clave: string[];
  param: any;
  constructor(private dataSvc : DataService) {
  }
  
  ngOnInit(){
    this.showCurrency();
  }
  
  showCurrency(){
    this.dataSvc.getCurrency(this.moneda = 'ARS')
    .subscribe((data:DataRta[]) => {
      console.log(data);
      this.currency = data;
      this.cotizacion = (this.currency['quotes']);
    });
  }

/*   showList(){
    this.dataSvc.getList().subscribe((data:any[])=> {
      this.currencies = data['currencies'];
      this.paises = Object.values(this.currencies);
      console.log(this.paises);
    });
  } */
}
