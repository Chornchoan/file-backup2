class DomElement {
    private parent: DomElement | null;
    private children: DomElement[];
  
    constructor() {
      this.parent = null;
      this.children = [];
    }
  
    public setParent(parent: DomElement): void {
      this.parent = parent;
    }
  
    public addChild(child: DomElement): void {
      child.setParent(this);
      this.children.push(child);
    }
  }
  
  // Creating the DOM tree
  const root = new DomElement();
  const html = new DomElement();
  const head = new DomElement();
  const title = new DomElement();
  const body = new DomElement();
  const a = new DomElement();
  const h1 = new DomElement();
  
  root.addChild(html);
  html.addChild(head);
  html.addChild(body);
  head.addChild(title);
  body.addChild(a);
  a.addChild(h1);

  console.log(root, html, head, body,a);
  