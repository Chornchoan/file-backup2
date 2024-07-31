class Trip{
    bussName: string;
    ToId: string;
    FromId: string;
    customers: customer[] = [];
    constructor( bussName:string,ToId:string, FromId:string){
        this.bussName = bussName;
        this.ToId= ToId;
        this.FromId= FromId;
    }
    addCustomer(customer:customer) : void {
        this.customers.push(customer);
         
    }
   
}


class customer{
    FirstName:string;  
    LastName:string;
    Address:address[]=[];
    constructor( firstname:string , lastname:string, ) { 
        this.FirstName = firstname ; 
        this.LastName = lastname ;
    
    } 
    addr(Address: address):void{
        this.Address.push(Address);
    }
}

class address{
    street: string; 
    city: string;  
    constructor( street1:string ,city1:string ){ 
        this.street = street1 ; 
        this.city = city1 ; 
    } 
}

//create customers
let John = new customer("John","Doe");
let Tony = new customer("Tony","Stark");
let Jake = new customer("Jake","Smith");


//create addr
let johnAddr = new address("12 PP", "BD");
let tonyAddr = new address("456 Central .", "BCH");
let  jakeAddr = new address("789 RD.", "KT");

//add addr to the customer's list of addresses
John.addr(johnAddr)
Tony.addr(tonyAddr);
Jake.addr(jakeAddr);

//create trips
let Trips= new Trip('DDK',"SR","PP");
Trips.addCustomer(John);
Trips.addCustomer(Tony);
Trips.addCustomer(Jake);

console.log(Trips); 

