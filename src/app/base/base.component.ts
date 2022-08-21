import { Component, OnInit } from '@angular/core';
// import { pageTransitionAnimation } from '../utils/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  template: ``,
  // animations: [pageTransitionAnimation],
  // host: {
  //   '[@pageTransition]': ''
  // },
})
export class BaseComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
