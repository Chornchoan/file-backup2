class person {
    private name: string
    protected address: string
    constructor(name: string, address: string) {   
        this.name = name;
        this.address = address;
    }
}
class stuednt extends person {
    constructor(name: string, address: string) {
        super(name, address);
    }
    getAddr(){
        return this.address;
    }
}