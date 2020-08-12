import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { Route,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { PnfComponent } from './components/pnf/pnf.component';

const routeConfig: Array<Route> = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'contact-list',
      component: ContactListComponent
    },
    {
      path: 'contact-details/:id',
      component: ContactDetailsComponent
    },
    {
      path: 'add-contact',
      component: AddContactComponent
    },
    {
      path: 'edit-contact/:id',
      component: EditContactComponent
    },
    {
      // this is the default route handler; must be the last one.
      path: '**',
      component: PnfComponent
    }

];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ContactDetailsComponent,
    FullnamePipe,
    AgePipe,
    ContactListComponent,
    AddContactComponent,
    EditContactComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
