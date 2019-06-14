import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './views/home/home.component';
import { MenuHeaderComponent } from './views/menu-header/menu-header.component';
import { CreateItemComponent } from './views/create-item/create-item.component';
import { SearchItemsComponent } from './views/search-items/search-items.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserTermComponent } from './components/user-term/user-term.component';
import { ItensComponent } from './components/itens/itens.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ValidationService } from './services/ValidationService';
import { ItemViewComponent } from './views/item-view/item-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    MenuHeaderComponent,
    CreateItemComponent,
    SearchItemsComponent,
    UserTermComponent,
    ForgotPasswordComponent,
    ItensComponent,
    ListComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
