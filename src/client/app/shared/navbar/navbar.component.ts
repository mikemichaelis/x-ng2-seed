import { Component } from '@angular/core';
import { Auth0 }      from '../auth/auth0.service';
import { OAuth }      from '../auth/oauth.service';

//import { OAuthService } from 'angular2-oauth2/oauth-service';


/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {

  constructor(private auth0: Auth0, private oauth: OAuth ) {
  }

  public login(): void {
    this.oauth.login();
    // this.auth0.login();
  }

  public logout(): void {
    this.oauth.logout();
    // this.auth0.logout();
  }

  public authenticated(): boolean {
    return this.oauth.authenticated();
    //return this.auth0.authenticated();
  }
}
