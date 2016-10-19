import './operators';
import { Component, OpaqueToken, OnInit, ViewContainerRef } from '@angular/core';
import { Config } from './shared/index';



/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  providers: [
    ],
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {

  // taken from http://valor-software.com/ng2-bootstrap/#/modals\
  // however the below private variable is redundant since the constructor parameter auto creates the same private variable
  private viewContainerRef: ViewContainerRef;

  constructor(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    console.log('Environment config', Config);
  }

  ngOnInit() {}
}
