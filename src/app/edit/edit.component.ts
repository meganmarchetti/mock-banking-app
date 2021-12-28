import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction/transaction.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
    this.route.params.subscribe(params => {
      const tID = +params['id'];
      this.transactionService.getTransaction(tID).subscribe(payload => {
        this.transaction = payload;
      })
    })
  }

  patchTrans(): void {
    this.transactionService.editTransaction(this.transaction).subscribe(payload => {
      if(payload)
        this.router.navigateByUrl("/transactions/"+this.transaction.id);
    })
  }



}
