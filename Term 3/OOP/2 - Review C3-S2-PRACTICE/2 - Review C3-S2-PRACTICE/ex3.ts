class DomElement{
    private name: string
    parent?: DomElement
    childrens:DomElement[]=[]
    constructor(name: string) {
        this.name=name
    }
    isRoot():boolean {
        return this.parent==undefined
    }
    setParent(parent: DomElement) {
        this.parent=parent
    }
    addChildren(child: DomElement) {
        this.childrens.push(child)
    }
}

let html = new DomElement('html');
let head = new DomElement('head');
let body = new DomElement('body');
let title = new DomElement('title');
let a = new DomElement('a');
let h1 = new DomElement('h1');

html.addChildren(head);
html.addChildren(body);
head.setParent(html);
body.setParent(html);
title.setParent(head);
a.setParent(body);
h1.setParent(body);

console.log(html);
