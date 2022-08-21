import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent extends BaseComponent implements OnInit {

  constructor(public override router: Router) {
    super(router);
  }

  override ngOnInit(): void {

  }

}
