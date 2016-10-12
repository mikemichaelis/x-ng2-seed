import { NgModule, OpaqueToken } from '@angular/core';

export let AUTH_TOKEN = new OpaqueToken('AuthToasbken');

import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { WindowService }        from 'x-common-lib';
import { OAuthService, OAUTHSERVICE_CONFIG_TOKEN } from 'x-oauth-lib';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, Ng2BootstrapModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
  AUTH_PROVIDERS,
  WindowService,
      { provide: AUTH_TOKEN, useClass: OAuthService },
      { provide: OAUTHSERVICE_CONFIG_TOKEN, useValue: {
  "mode": "TEST",

  "clientId": "cprd-next-mgmt",
  "scopes": "openid profile",

  "implicitGrantUrl": "https://elw12dauth01.dow.com/SSO_Dev/connect/authorize?redirect_uri=__callbackUrl__&response_type=id_token%20token&client_id=__clientId__&scope=__scopes__&state=14527175907790.5554039004418658&nonce=xyz",
  "callbackUrl": "http://localhost:5555/main",

  "userInfoUrl": "https://elw12dauth01.dow.com/SSO_Dev/connect/userinfo",
  "userInfoNameField": "sub",

  "logoutUrl": "https://elw12dauth01.dow.com/SSO_Dev/connect/endsession?id_token_hint=__token__&post_logout_redirect_uri=__logoutCallbackUrl__",
  "logoutCallbackUrl": "http://localhost:5555/logout"
} }
    // {provide: AUTH_TOKEN, useValue: Auth0}],
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
