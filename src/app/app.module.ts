import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeCardComponent } from './components/home-card/home-card.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialLibraryModule
  ],
  declarations: [AppComponent, HomeCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
