import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction/transaction.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newtrans: Transaction = {
    chargeTitle: '',
    amount: 0,
    chargeDate: '',
    description: '',
    category: '',
    status: 'pending',
    chargeType: '',
    id: 0
  };
  constructor(private route: ActivatedRoute, private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    
  }

  addTrans(newtrans: Transaction): void {
    this.transactionService.addTransaction(newtrans).subscribe(() => {
      this.router.navigateByUrl("/transactions");
    })
  }



}
