/**
 * Created by Jogui on 23/03/2016.
 */
import {Directive, AfterViewInit} from 'angular2/core';
declare var componentHandler;

@Directive({
  selector: '[mdl]'
})
export class MDL implements AfterViewInit {
  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }
}
