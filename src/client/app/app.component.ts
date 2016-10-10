import { Component } from '@angular/core';
import { Config } from './shared/index';

import { Auth0 }              from './shared/auth/auth0.service';
import { OAuth }              from './shared/auth/oauth.service';
import { WindowService }      from './shared/auth/window.service';
//import { OAuthService } from 'angular2-oauth2/oauth-service';

import './operators';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  providers: [ Auth0, OAuth, WindowService ],
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
