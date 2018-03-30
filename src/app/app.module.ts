import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MemberComponent,
    TodolistComponent,
    PipesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'member',
        component: MemberComponent
      },
      {
        path: 'product',
        component: ProductComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
