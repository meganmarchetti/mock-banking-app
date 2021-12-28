import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:"transactions", component: TransactionsComponent},
  {path:"transactions/:id", component: TransactionComponent},
  {path:"transactions/:id/edit", component: EditComponent},
  {path:"home", component: HomeComponent},
  {path:"", pathMatch:"full", redirectTo:"home"},
  {path:"add", component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
