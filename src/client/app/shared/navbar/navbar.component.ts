import { Component, Inject, OpaqueToken } from '@angular/core';

import { IAuthService } from 'x-common-lib';
import { AUTH_TOKEN } from '../../app.module';

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

  constructor(@Inject(AUTH_TOKEN) private authService: IAuthService ) {

  }

  public login(): void {
    this.authService.login();
    // this.auth0.login();
  }

  public logout(): void {
    this.authService.logout();
    // this.auth0.logout();
  }

  public authenticated(): boolean {
    return this.authService.authenticated();
    //return this.auth0.authenticated();
  }
}
