import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs'; // for asynchronous request and later our component can subscribe to it


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = "https://localhost:7277";

  constructor(private http : HttpClient) {}

  getBooks() : Observable<Book[]>  {
    return this.http.get<Book[]> (this.apiUrl);
  }
}
