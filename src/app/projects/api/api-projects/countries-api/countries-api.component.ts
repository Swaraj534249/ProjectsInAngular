import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-api',
  templateUrl: './countries-api.component.html',
  styles: [
  ]
})
export class CountriesApiComponent implements OnInit {

  countriesList: any;
  isCollapsed: boolean = true;
  constructor(
    private http: HttpClient
  ) {
    this.countriesList = []
  }

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.getCountries()
  }

  private api = 'https://restcountries.com/v2'

  getCountries = async () => {
    this.http.get(`${this.api}/all`).subscribe((result: any) => {
      this.countriesList = result
    })
  }

  // getDetails = async () => {
  //   this.http.get(`${this.api}/alpha3Code`).subscribe((result: any) => {
  //     this.countriesList = result
  //   })
  // }

}
