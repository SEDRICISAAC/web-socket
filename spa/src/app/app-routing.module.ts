import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  //{ path: 'home', component: HomeComponent},
  // canActivate: [LoginGuard]
  { path: 'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule), },
  { path: 'menu',loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule), },
  // { path: 'error',loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)},
  { path: 'error', component: ErrorComponent},
   { path: '**', redirectTo: '/error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
