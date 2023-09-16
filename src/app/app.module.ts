import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './modules/beer-list/beer-list.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { BeerService } from './services/beer.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaDirective } from './shared/directives/media/media.directive';
import { PipeNamePipe } from './shared/pipes/pipe-name.pipe';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    MediaDirective,
    PipeNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    IonicModule.forRoot(),
    MatTableModule

  ],
  providers: [BeerService, PipeNamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
