import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  declarations: [  
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],exports:[
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
