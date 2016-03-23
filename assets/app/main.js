System.register(['angular2/platform/browser', './login.component', "angular2/http", './app.component'], function(exports_1) {
    var browser_1, login_component_1, http_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
            browser_1.bootstrap(login_component_1.LoginComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map