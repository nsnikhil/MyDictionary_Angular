import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DictionaryListComponent } from './dictionary-list/dictionary-list.component';
import {NetworkApiServiceService} from './network/network-api-service.service';
import {MyHttpInterceptor} from './network/MyHttpInterceptor';
import { DictionaryListItemComponent } from './dictionary-list/dictionary-list-item/dictionary-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryListComponent,
    DictionaryListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NetworkApiServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
