import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';




const routes: Routes = [
  { path: '', component: MenuComponent},
  // { path: 'value', component: ValueComponent},
  // { path: 'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  // { path: 'menu',loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
  // { path: 'error',loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)}
  // { path: '**', redirectTo: '/error', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
