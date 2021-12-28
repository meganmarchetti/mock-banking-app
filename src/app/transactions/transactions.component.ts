import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }
  transactions: Transaction[] = [];
  sum: number = 0;
  
  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(payload => {
      this.transactions = payload;
      
      
      this.sum = payload.reduce((acc: number, curr: { amount: number; }) => acc + curr.amount, 0);
      
    })

    
    
  }

}