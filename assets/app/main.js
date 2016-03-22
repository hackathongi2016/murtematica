System.register(['angular2/platform/browser', './login.component'], function(exports_1) {
    var browser_1, login_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(login_component_1.LoginComponent);
        }
    }
});
//# sourceMappingURL=main.js.map