import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  booksList:any

  constructor() {
    this.booksList = [
      {
        id: "1",
        title: "The Name of the Wind",
        price: "50.00",
        author: {
          first_name: "Patrick",
          last_name: "Rothfuss",
        },
        published_at: "27 March 2007",
        pages: "664",
        rating: "4.5",
        genre: ["Heroic Fantasy"],
        img: "https://images-na.ssl-images-amazon.com/images/I/71jJcPTGd3L.jpg"
      },
      {
        id: "2",
        title: "Harry Potter and the sorcerer's stone",
        price: "50.00",
        author: {
          first_name: "J.K",
          last_name: "Rowlings",
        },
        published_at: "26 June 1997",
        pages: "223",
        rating: "4.4",
        genre: ["Fantasy","Adventure"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnxhzcx6GD-WFx_9Mx2ZlOKytMqoxd5njGOJ5mjvIUKfPoHJ9asDDZsxxibcfbBi5FGQ&usqp=CAU"
      },
      {
        id: "3",
        title: "Harry Potter and the Chamber of Secrets ",
        price: "50.00",
        author: {
          first_name: "J.K",
          last_name: "Rowlings",
        },
        published_at: "2 July 1998",
        pages: "251",
        rating: "4.4",
        genre: ["Fantasy Novel"],
        img: "https://images-na.ssl-images-amazon.com/images/I/51mFoFmu0EL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
      },
      {
        id: "4",
        title: "Harry Potter and the Prisoner of Azkaban",
        price: "50.00",
        author: {
          first_name: "J.K",
          last_name: "Rowlings",
        },
        published_at: "8 July 1999",
        pages: "317",
        rating: "4.5",
        genre: ["Fantasy Novel"],
        img: "https://images-eu.ssl-images-amazon.com/images/I/51WMfnxFXaL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
      },
      {
        id: "5",
        title: " Harry Potter and the Goblet of Fire",
        price: "50.00",
        author: {
          first_name: "J.K",
          last_name: "Rowlings",
        },
        published_at: "8 July 2000",
        pages: "636",
        rating: "4.5",
        genre: ["Fantasy Novel"],
        img: "https://images-eu.ssl-images-amazon.com/images/I/516SzpxSeML._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
      },
      {
        id: "6",
        title: "Harry Potter and the Order of the Phoenix ",
        price: "50.00",
        author: {
          first_name: "J.K",
          last_name: "Rowlings",
        },
        published_at: "21 June 2003",
        pages: "766",
        rating: "4.4",
        genre: ["Fantasy Novel"],
        img: "https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg"
      },
      {
        id: "7",
        title: "Harry Potter and the Half-Blood Prince",
        price: "50.00",
        author: {
          first_name: "J.K",
          last_name: "Rowlings",
        },
        published_at: "16 July 2005",
        pages: "607",
        rating: "4.5",
        genre: ["Fantasy Novel"],
        img: "https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png"
      },
      {
        id: "8",
        title: "Harry Potter and the Deathly Hallows",
        price: "50.00",
        author: {
          first_name: "J.K",
          last_name: "Rowlings",
        },
        published_at: "14 July 2007",
        pages: "607",
        rating: "4.6",
        genre: ["Fantasy Novel"],
        img: "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg"
      },
      {
        id: "9",
        title: "Alice's Adventures in Wonderland",
        price: "50.00",
        author: {
          first_name: "Lewis",
          last_name: "Carroll",
        },
        published_at: "27 March 2005",
        pages: "664",
        rating: "4.5",
        genre: ["Drama","Fantasy Fiction" ],
        img: "https://images-na.ssl-images-amazon.com/images/I/51bDmmnouCL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
      },
      {
        id: "10",
        title: "Charlotte's Web",
        price: "50.00",
        author: {
          first_name: "E. B.",
          last_name: "White",
        },
        published_at: "15 October 1952",
        pages: "192",
        rating: "4.2",
        genre: ["Children's literature","Novel","Fiction"],
        img: "https://images-na.ssl-images-amazon.com/images/I/71jJcPTGd3L.jpg"
      },
      {
        id: "11",
        title: "Little Women",
        price: "50.00",
        author: {
          first_name: "Louisa May",
          last_name: "Alcott",
        },
        published_at: "1868",
        pages: "664",
        rating: "4.5",
        genre: ["Heroic Fantasy"],
        img: "https://m.media-amazon.com/images/M/MV5BMTg5NTg3ODA1OV5BMl5BanBnXkFtZTgwODgzNjk5NDM@._V1_FMjpg_UX1012_.jpg"
      },
      {
        id: "12",
        title: "The Cat in the Hat",
        price: "50.00",
        author: {
          first_name: "Dr.",
          last_name: "Seuss",
        },
        published_at: "12 March 1957",
        pages: "62",
        rating: "4.2",
        genre: ["Children's literature","Picture book","Fiction"],
        img: "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL.jpg"
      },
      {
        id: "13",
        title: "The Hobbit, or There and Back Again",
        price: "50.00",
        author: {
          first_name: "J. R. R.",
          last_name: "Tolkien",
        },
        published_at: "21 September 1937",
        pages: "310",
        rating: "4.3",
        genre: ["Novel","Fantasy Fiction","Children's literature","High fantasy","Epic"],
        img: "https://images-na.ssl-images-amazon.com/images/I/51BtzIuChOL._SX326_BO1,204,203,200_.jpg"
      },
      {
        id: "14",
        title: "The Jungle Book",
        price: "50.00",
        author: {
          first_name: "Rudyard",
          last_name: "Kipling",
        },
        published_at: "1894",
        pages: "664",
        rating: "3.9",
        genre: ["Children's literature", "Fiction", "Manga"],
        img: "https://rukminim1.flixcart.com/image/416/416/jqfinww0/book/3/7/3/the-jungle-book-original-imafcf4j2tcjycrg.jpeg?q=70"
      },
      {
        id: "15",
        title: "Adventures of Huckleberry Finn",
        price: "50.00",
        author: {
          first_name: "Mark",
          last_name: "Twain",
        },
        published_at: "1884",
        pages: "366",
        rating: "3.8",
        genre: ["Novel","Satire", "Humor", "Children's literature", "Adventure fiction", "Picaresque novel", "Robinsonade"],
        img: "https://images2.penguinrandomhouse.com/cover/9780143105947"
      }
    ]
  }
}