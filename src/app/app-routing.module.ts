import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { APIComponent } from './projects/api/api.component';
import { GitUsersComponent } from './projects/api/api-projects/git-users/git-users.component';
import { MainComponent } from './projects/main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { ApiProjectsComponent } from './projects/api/api-projects/api-projects.component';
import { CountriesApiComponent } from './projects/api/api-projects/countries-api/countries-api.component';

const apiRoutes = [
  { path: 'git-users', component: GitUsersComponent },
  { path: 'countries-api', component: CountriesApiComponent },
  { path: 'api-projects', component: ApiProjectsComponent },
  { path: '**', redirectTo: 'api-projects' }
]

const projectRoutes = [
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'main', component: MainComponent },
  { path: 'api', component: APIComponent, children: apiRoutes },
  // {path: 'cards', components:CardsComponent},
  { path: '**', redirectTo: 'main' }
]

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent, children: projectRoutes },
  { path: '**', redirectTo: 'home' },
  { path: '', redirectTo: '/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const mainRouting = [MainComponent, APIComponent]
