import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: MenuComponent,
//   },
//   {
//     path: 'pagina1',
//     loadChildren: () => import('./value/value.module').then(m => m.ValueModule),
//   }
// ];

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
