import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {Router} from "angular2/router";
import {OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
@Component({
  selector: 'topic',
  templateUrl: 'web/index.html'
})

export class TopicComponent implements OnInit {

  public id;

  constructor(private _router : Router, private _routeParams : RouteParams){}

  ngOnInit():any{
    this.id = this._routeParams.get('id');
  }


}
