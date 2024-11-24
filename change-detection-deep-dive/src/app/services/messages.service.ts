import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({

    providedIn:'root'

})
export class MessagesService{

    private messages = signal<string[]>([]);

    // private messages: string[] = [];

    // public messages$: BehaviorSubject<string[]> = new BehaviorSubject <string[]> ([]);

    public allMessages = this.messages.asReadonly();

    get AllMessages(){
        return[...this.messages()];
    }

    constructor(){}

    public addMessage(message: string){

        this.messages.update((prevMessages)=>[...prevMessages,message]);
        
        // this.messages = [...this.messages,message];

        // this.messages$.next(this.messages);

    }


}