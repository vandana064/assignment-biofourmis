import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { SidenavComponent } from './sidenav/sidenav.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { DetailsTableComponent } from './details-table/details-table.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SiteDetailsComponent,
    DetailsTableComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
