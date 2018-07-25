import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import { VoteComponent } from './setup-and-teardown/vote/vote.component';


@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
