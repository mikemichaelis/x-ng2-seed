import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NameListService } from '../shared/name-list/index';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

// angular2-bootstrap-confirm imports
import { ConfirmModule } from 'angular2-bootstrap-confirm';
import { ConfirmOptions, Position } from 'angular2-bootstrap-confirm';
import { PositionService as Positioning } from 'ng2-bootstrap/components/position';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

@NgModule({
  imports: [ CommonModule, SharedModule, ConfirmModule, Ng2BootstrapModule ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
  providers: [NameListService, AUTH_PROVIDERS, ConfirmOptions,
      { provide: Position, useClass: Positioning } ]
})
export class HomeModule { }
