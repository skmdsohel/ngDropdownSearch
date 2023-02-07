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

  selectedStates!: any


  constructor() {

    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
    ];

    this.selectedStates = this.countries;
  }


  changeDDValue() {
    console.log(this.selectedCountry)
  }


  ////////////////////////////////////////

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  // Initially fill the selectedStates so it can be used in the for loop** 


  // Receive user input and send to search method
  onKey(value: any) {
    let data = (value.target as HTMLInputElement).value
    this.selectedStates = this.search(data);
  }

  // Filter the states list and send back to populate the selectedStates
  search(value: string) {
    let filter = value.toLowerCase();
    return this.selectedStates.filter((option: any) => option.name.toLowerCase().startsWith(filter));
  }
}
