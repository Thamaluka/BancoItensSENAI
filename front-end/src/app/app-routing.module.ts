import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateItemComponent } from './views/create-item/create-item.component';
import { SearchItemsComponent } from './views/search-items/search-items.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateItemComponent },
  { path: 'search', component: SearchItemsComponent },
  { path: 'forgot', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
