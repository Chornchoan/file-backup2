
class Door{
    numberDoor:number;
    constructor(numberDoor:number){
        this.numberDoor = numberDoor;
    }
}
class Room{
    numberRoom:number;
    doors:Door []= [];
    constructor(numberRoom:number){
        this.numberRoom = numberRoom;
    }
    addDoor(door:Door):void {
        this.doors.push(door);
    }
}
class House{
    owner:string;
    rooms:Room[]=[];
    constructor(owner:string){
        this.owner=owner;
    }
    
    addRoom(room:Room):void {
        this.rooms.push(room)
    }
  
}

let myHouse = new House("John");
let  newRoom = new Room(2);
myHouse.addRoom(new Room(1));
myHouse.addRoom(new Room(2));
newRoom.addDoor(new Door(1));
newRoom.addDoor(new Door(2));
console.log(myHouse,newRoom);