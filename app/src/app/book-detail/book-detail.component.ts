import { DialogsComponent } from './../dialogs/dialogs.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './../api/api.service';
import { ServiceService } from './../service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  form: FormGroup;
  id: any
  book: any

  constructor(private fb: FormBuilder, public dialog: MatDialog, public api: ApiService, public router: Router, public books: ServiceService) {

    this.form = fb.group({
      bookId: [""],
      quantity: ["10"],
      price: [""],
      total: [""]
    })

    if (this.router.getCurrentNavigation() != null)
      this.id = this.router.getCurrentNavigation()

    if (this.id["extras"]["state"] != undefined) {
      this.id = this.id["extras"]["state"]["bookId"]
      this.api.service("post","add-recent",{
        bookId: this.id
      }).subscribe((vare:any)=>{
        console.log(vare)
      })
    } else {
      this.router.navigate([''])
    }
    this.book = books.booksList
  }

  ngOnInit(): void {
  }

  submit() {

    const dialogRef = this.dialog.open(DialogsComponent, {
      disableClose: true,
      data: {
        reason: "loader",
        text: "Adding Room...",
      }
    })
    let price, total
    this.book.forEach((ele: any) => {
      if (ele.id == this.id) {
        price = ele.price
        total = (price * this.form.value["quantity"])
      }
    });

    this.api.service("post", "add-cart", {
      bookId: this.id,
      price: price,
      quantity: this.form.value["quantity"],
      total: total
    }).subscribe((val:any) => {
      if(val.msg){
        dialogRef.close()
      }
    })
  }
}
