/**
 * Created by Llorenç on 20/03/2016.
 */
/**
 * Created by Llorenç on 14/03/2016.
 */
import {Component} from "angular2/core";
import {OnInit} from "../../node_modules/angular2/src/core/linker/interfaces";
import {Message} from "./message";

@Component({
    selector: "chat",
    template: `
        <div class="chatContainer">
            <div class="chatHeader">
                <h3>Chat</h3>
            </div>
            <div class="chatMessages">
                 <ul>
                    <li
                      *ngFor = "#message of mMessages"
                     >
                        {{message.name}}
                    </li>
                 </ul>
            </div>
            <div class="chatBottom">
                <input type="text" #inputMessage>
                <button (click)="onSendMessage(inputMessage)">Send</button>
            </div>
        </div>

  `,
    styleUrls:["app/style/chat.css"]
})
export class ChatComponent implements OnInit{
    public mMessages = [
        {name: "hola"},
        {name: "k tal"}
    ];

    ngOnInit():any {
        return undefined;
    }

    onSendMessage(message){
        this.mMessages.push({name: message.value});
    }


}
