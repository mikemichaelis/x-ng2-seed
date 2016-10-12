import './operators';
import { Component, OpaqueToken, OnInit } from '@angular/core';
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
  constructor() {
    console.log('Environment config', Config);
  }

  ngOnInit() {}
}
