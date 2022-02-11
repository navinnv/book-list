import { Router } from '@angular/router';
import { DialogsComponent } from './../dialogs/dialogs.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from './../service/service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from './../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartDatas: any = ''
  form: FormGroup
  books: any

  constructor(public fb: FormBuilder, public dialog: MatDialog,
    public router: Router, public bookData: ServiceService, public api: ApiService) {
    this.form = this.fb.group({
      quantity: ['']
    })
    this.books = bookData.booksList
  }

  ngOnInit(): void {
    this.getCart()
  }

  getCart() {
    const dialogRef = this.dialog.open(DialogsComponent, {
      disableClose: true,
      data: {
        reason: "loader",
        text: "Fetching Cart Data...",
      }
    })
    this.api.service("post", "cart-data", "1").subscribe((val: any) => {
      this.cartDatas = val.data
      dialogRef.close()
    })
    console.log(this.cartDatas)
  }

  delete(id: any) {
    const dialogRef2 = this.dialog.open(DialogsComponent, {
      disableClose: true,
      data: {
        reason: "remove-dialog",
        text: "Do You Agree to remove?",
        icon: "priority_high"
      }
    })
    dialogRef2.afterClosed().subscribe((dat: any) => {
      if (dat) {
        const dialogRef = this.dialog.open(DialogsComponent, {
          disableClose: true,
          data: {
            reason: "loader",
            text: "Deleting Data...",
          }
        })
        this.api.get("delete", "delete-data", {
          id: id,
        }).subscribe((val: any) => {
          if (val.msg) {
            dialogRef.close()
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/cart']);
          }
        })
      }
    })
  }

  udpate(id: any, e: any, price: any) {
    const dialogRef = this.dialog.open(DialogsComponent, {
      disableClose: true,
      data: {
        reason: "loader",
        text: "Updating Cart Value...",
      }
    })
    this.api.service("put", "update-data", {
      id: id,
      price: price,
      quantity: e.target.value,
      total: (parseFloat(price) * parseInt(e.target.value))
    }).subscribe((val: any) => {
      if (val.msg) {
        dialogRef.close()
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/cart']);
      }
    })
  }

  back() {
    this.router.navigate([''])
  }
}