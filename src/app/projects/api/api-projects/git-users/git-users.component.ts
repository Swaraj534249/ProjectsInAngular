import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styles: [
  ]
})
export class GitUsersComponent implements OnInit {

  userList: any;
  constructor(
    private http: HttpClient
  ) {
    this.userList = []
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers = async () => {
    this.http.get('https://api.github.com/users').subscribe((result: any) => {
      this.userList = result
    })
  }

}
