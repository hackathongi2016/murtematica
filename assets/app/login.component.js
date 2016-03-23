System.register(['angular2/core', './directives/MaterialDesignLiteUpgradeElement', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, MaterialDesignLiteUpgradeElement_1, http_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MaterialDesignLiteUpgradeElement_1_1) {
                MaterialDesignLiteUpgradeElement_1 = MaterialDesignLiteUpgradeElement_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(http) {
                    this.http = http;
                    this.login = function () {
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        this.http.post('login', JSON.stringify({ email: this.email, password: this.password }), { headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            null; //no cal fer res
                        }, function (err) { return console.log(err); }, //exectuar si no OK
                        function () {
                            window.location.href = '/dashboard';
                        });
                    };
                }
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [MaterialDesignLiteUpgradeElement_1.MDL],
                        templateUrl: 'app/html/login.component.html',
                        styleUrls: ['app/style/login.component.css']
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map