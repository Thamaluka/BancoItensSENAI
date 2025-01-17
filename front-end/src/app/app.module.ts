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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    MenuHeaderComponent,
    CreateItemComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule,
    TooltipModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
