import {bootstrap}    from 'angular2/platform/browser'
import {LoginComponent} from './login.component'
import {HTTP_PROVIDERS} from "angular2/http";
bootstrap(LoginComponent, [HTTP_PROVIDERS]);
