import { Component, OnDestroy } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'bttn-cell-renderer',
  template: `
    <button (click)="btnClickedHandler($event)">Edit</button>
  `
})
export class BtnCellRenderer implements ICellRendererAngularComp, OnDestroy {
  refresh(params: any): boolean {
    throw new Error('Method not implemented.');
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(val) {
    this.params.clicked(this.params.value);
  }

  ngOnDestroy() {
    // no need to remove the button click handler
  }
}
