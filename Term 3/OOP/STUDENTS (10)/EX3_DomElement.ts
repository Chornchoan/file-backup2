class DomElement{
    private parent?:DomElement;
    private children:DomElement[] = [];

    constructor(private name:string){}

    getName(): string{
        return this.name;
    }
    isRoot() : boolean {
        return !this.parent;
    }
    setParent(parent:DomElement) {
        this.parent= parent;
    }
    addChild(child:DomElement) {
        this.children.push(child);
    }
}

// create child  elements
let html = new  DomElement("html");
let  head = new DomElement("head");
let body = new DomElement("body");
let title = new  DomElement("title");
let  h1 = new DomElement("h1");
let a = new  DomElement("a");

// add child elements
html.addChild(head);
html.addChild(body);

head.setParent(html);
head.setParent(title);

title.setParent(head);

body.setParent(html);
body.addChild(h1);
body.addChild(a);

h1.setParent(body);
a.setParent(body);


console.log(html, head, body, title, h1, a.isRoot);
