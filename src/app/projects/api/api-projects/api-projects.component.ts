import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-projects',
  templateUrl: './api-projects.component.html',
  styles: [
  ]
})
export class ApiProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardsAPI = [
    { name: "Git Users", content: "Fetch git users info", routerLink: "git-users" },
    { name: "Countries API", content: "Fetch countries info", routerLink: "countries-api" },
    { name: "Other", content: "Currently Empty", routerLink: "" },
    { name: "Other", content: "Currently Empty", routerLink: "" },
  ]
}
