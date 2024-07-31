class DateTime{
    date:string;
    time:string;
    
    constructor(date: string,time: string){
        this.date = date;
        this.time = time;
    }
}
class Address{
    city:string;
    street:string;

    constructor(city: string,street: string) {
        this.city=city;
        this.street=street;
    }
 
;
}
class Customers{
    Fname:string;
    Lname:string;
    address?:Address;
    constructor(Fname: string ,Lname:string ){
        this.Fname = Fname ; 
        this.Lname = Lname
    }
    setAddress(address:Address){
        this.address = address;
    }
}
class Tript{
    BusName:string;
    ToAddr:string;
    FromAddr:string;
    customers:Customers[]=[];
    ToDate:DateTime;
    FromDate:DateTime;

    constructor(busName:string,ToAddr:string,FromAddr:string,ToDate:DateTime,FromDate:DateTime) {
        this.BusName = busName;
        this.ToAddr = ToAddr;
        this.FromAddr = FromAddr;
        this.ToDate = ToDate;
        this.FromDate = FromDate;
    }
    addCustomer(customer:Customers){
        this.customers.push(customer);
    }
}

// create customers
let Jok = new Customers("John","Doe");
let Jane = new Customers("Jane","Smith");
let jav = new  Customers("Java", "Poro");

//create Address for customer john
let JohnAdrr = new Address ("12","SR");
let JaneAddr = new  Address ("345","SEC");
let javAddr = new    Address ("67","SW");

// create date 
let  Date1=new DateTime ('10,8,2021', '01,44,23');
let  Date2=new DateTime ('15,9,2021','08,10,24')

// create a trip
let Trip1 = new Tript('DDR',"KS","KB",Date1,Date2);

Trip1.addCustomer(Jok);
Trip1.addCustomer(Jane);
Trip1.addCustomer(jav);
console.log(Trip1);
