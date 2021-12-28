import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  
  apiUrl = 'http://localhost:8082/api/transactions/';
  getTransactions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getTransaction(id: number): Observable<any> {
    return this.http.get(this.apiUrl+id);
  }

  editTransaction(transaction: Transaction): Observable<any> {
    return this.http.patch(this.apiUrl+transaction.id, transaction);
  }

  delTransaction(id: number): Observable<any> {
    return this.http.delete(this.apiUrl+id);
  }

  addTransaction(transaction: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, transaction);
  }


  
}
