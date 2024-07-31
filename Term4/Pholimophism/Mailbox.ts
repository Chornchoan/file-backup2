class Mailbox {
    private name: string;
    private mail: Mailbox[]= [];
    constructor(name: string) {
         this.name = name;
     }
    addMail(mail: Mailbox){
        this.mail.push(mail);
    }

}
abstract class Mail {
    private title: string;
    private body: string;
    user: User;
    constructor(title: string, body: string) {
        this.title = title;
        this.body = body;
    }
}
class ReceivedMail extends Mail {
    private receivedDate: string;
    constructor(title:string,body:string,receivedDate: string){
        super(title,body);
        this.receivedDate=receivedDate; 
    }
    fromUser(user: User){
        this.user=user;
    }
}

class SentMail extends Mail{
    private sentDate: string;
    user: User;
    constructor(title:string,body:string,senDate: string){
        super(title,body);
        this.sentDate=senDate;
    }
    toUser(user: User){
        this.user=user;
    }
}
class User{
    Fname: string;
    Lname: string;
    constructor(Fname: string, Lname: string){
        this.Fname = Fname;
        this.Lname = Lname;
    }
}

let user1 = new User("John", "Doe");

