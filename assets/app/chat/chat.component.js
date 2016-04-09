System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ChatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChatComponent = (function () {
                function ChatComponent() {
                    this.mMessages = [
                        { name: "hola" },
                        { name: "k tal" }
                    ];
                }
                ChatComponent.prototype.ngOnInit = function () {
                    return undefined;
                };
                ChatComponent.prototype.onSendMessage = function (message) {
                    this.mMessages.push({ name: message.value });
                };
                ChatComponent = __decorate([
                    core_1.Component({
                        selector: "chat",
                        template: "\n        <div class=\"chatContainer\">\n            <div class=\"chatHeader\">\n                <h3>Chat</h3>\n            </div>\n            <div class=\"chatMessages\">\n                 <ul>\n                    <li\n                      *ngFor = \"#message of mMessages\"\n                     >\n                        {{message.name}}\n                    </li>\n                 </ul>\n            </div>\n            <div class=\"chatBottom\">\n                <input type=\"text\" #inputMessage>\n                <button (click)=\"onSendMessage(inputMessage)\">Send</button>\n            </div>\n        </div>\n\n  ",
                        styleUrls: ["app/style/chat.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChatComponent);
                return ChatComponent;
            }());
            exports_1("ChatComponent", ChatComponent);
        }
    }
});
//# sourceMappingURL=chat.component.js.map