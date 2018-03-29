import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
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
