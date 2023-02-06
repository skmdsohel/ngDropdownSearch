import { Component } from '@angular/core';
import { City } from '../City'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ddWithSearch';

  countries: any[];
  selectedCountry!: City;
  constructor() {

      this.countries = [
          {name: 'Australia', code: 'AU'},
          {name: 'Brazil', code: 'BR'},
          {name: 'China', code: 'CN'},
          {name: 'Egypt', code: 'EG'},
          {name: 'France', code: 'FR'},
          {name: 'Germany', code: 'DE'},
          {name: 'India', code: 'IN'},
          {name: 'Japan', code: 'JP'},
          {name: 'Spain', code: 'ES'},
          {name: 'United States', code: 'US'}
      ];
  }


  changeDDValue(){
    console.log(this.selectedCountry)
  }
}
