import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { Transaction } from './transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction: Transaction = {
    chargeTitle: '',
    amount: 0,
    chargeDate: '',
    description: '',
    category: '',
    status: '',
    chargeType: '',
    id: 0
  };


  constructor(private route: ActivatedRoute, private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const tID = +params['id'];
      this.transactionService.getTransaction(tID).subscribe(payload => {
        this.transaction = payload;
      })
    })
  }

  editTrans(): void {
    this.router.navigateByUrl(`/transactions/${this.transaction.id}/edit`);
  }

  deleteTrans(): void {
    this.transactionService.delTransaction(this.transaction.id).subscribe(() => {
      this.router.navigateByUrl("/transactions");
    })
  }

}
