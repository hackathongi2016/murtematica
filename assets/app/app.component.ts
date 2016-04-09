/**
 * Created by Llorenç on 09/04/2016.
 */

import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {TopicComponent} from "./topic.component";
@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
})


@RouteConfig([
  {path: '/:id', name: 'Topic', component: TopicComponent, useAsDefault: true},
])
export class AppComponent { }
