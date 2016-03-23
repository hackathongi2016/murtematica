import {Component} from 'angular2/core';
import {MDL} from './directives/MaterialDesignLiteUpgradeElement';
import {Http, Response, Headers} from 'angular2/http';

//for map
import 'rxjs/Rx';

@Component({
  selector: 'login',
  directives : [MDL],
  templateUrl : 'app/html/login.component.html',
  styleUrls: ['app/style/login.component.css']
})
export class LoginComponent {
  public email:string;
  public password:string;

  constructor(private http:Http) {
  }

  public login = function () {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('login', JSON.stringify({email: this.email, password: this.password}), {headers: headers})
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          null //no cal fer res
        },
        err => console.log(err), //exectuar si no OK
        () => { //executar si OK
          window.location.href = '/dashboard'
        }
      );
  }
}
