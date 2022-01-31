import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormsComponent } from './pages/users/users-forms/users-forms.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent},
  { path: 'form', component: UsersFormsComponent },
  { path: 'form/:id', component: UsersFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
