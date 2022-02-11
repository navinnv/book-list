import { CartComponent } from './cart/cart.component';
import { ListComponent } from './list/list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "books/details",
    component: BookDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
