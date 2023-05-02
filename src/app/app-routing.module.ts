import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './pages/componente1/componente1.component';
import { Guard1Guard } from './guard/guard1.guard';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    canActivate:[Guard1Guard],
    canMatch:[Guard1Guard]
  },
  { path: 'cambioTextos', component: Componente1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
