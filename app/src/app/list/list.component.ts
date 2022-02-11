import { ServiceService } from './../service/service.service';
import { ApiService } from './../api/api.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  book_list: any
  recent:Array<String> = []
  category: Array<string> = []

  constructor(public service: ApiService, public dialog: MatDialog, public books: ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.book_list = this.books.booksList

    this.book_list.forEach((ele: any) => {
      if ((ele.genre != '') && (Array.isArray(ele.genre))) {
        ele["genre"].forEach(gen => {
          this.category.push(gen)
        });
      }
    });
    this.category = this.category.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    })

    this.service.service("post","get-recent","").subscribe((val:any)=>{
      this.recent = val.data
    })
  }

  prev(str: String) {
    console.log(str)
  }

  next(str: String) {
    console.log(str)
  }

  async navigate(id:Number){
    this.router.navigate(['books/details'], { state: { bookId: id } })
  }

}