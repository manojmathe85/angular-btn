import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
// ag-grid
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';

import { BtnCellRenderer } from './btn-cell-renderer.component';

import { CheckboxRenderer } from './checkbox-renderer.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([BtnCellRenderer,CheckboxRenderer]),
  ],
  declarations: [AppComponent, BtnCellRenderer,CheckboxRenderer],
  bootstrap: [AppComponent],
})
export class AppModule {}
