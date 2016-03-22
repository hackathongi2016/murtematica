import {provide} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
bootstrap(AppComponent, [ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue : '/' })]
);
