import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, mainRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { GitUsersComponent } from './projects/api/api-projects/git-users/git-users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BaseComponent } from './base/base.component';
import { ApiProjectsComponent } from './projects/api/api-projects/api-projects.component';
import { CountriesApiComponent } from './projects/api/api-projects/countries-api/countries-api.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GitUsersComponent,
    ProjectsComponent,
    mainRouting,
    BaseComponent,
    ApiProjectsComponent,
    CountriesApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
