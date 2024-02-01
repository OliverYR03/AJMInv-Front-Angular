import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BreadcumbsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
