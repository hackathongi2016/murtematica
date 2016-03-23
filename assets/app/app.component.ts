/**
 * Created by Llorenç on 23/03/2016.
 */
import {Component} from 'angular2/core';
import {ChatComponent} from "./chat/chat.component";


@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>' +
  '<chat></chat>',
  directives: [ChatComponent]
})
export class AppComponent { }
