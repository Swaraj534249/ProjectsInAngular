import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    { name: "Api", content: "Api Projects", routerLink: "api" },
    { name: "Other", content: "Currently Empty", routerLink: "" },
    { name: "Other", content: "Currently Empty", routerLink: "" },
    { name: "Other", content: "Currently Empty", routerLink: "" },
  ]

}
