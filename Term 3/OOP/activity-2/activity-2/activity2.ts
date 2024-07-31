class House {
  bedroom: Room
  livingRoom: Room
  constructor() {
      this.bedroom = new Room();
      this.livingRoom = new Room();
  }
}
class Room {
  windows: Windows[]

  constructor() {
      this.windows = [];
  }
}
class Windows {
  color: string
  constructor(color: string) {
      this.color = color;
  }
}

// create the House name sophanaHouse
const sophanaHouse = new House();
sophanaHouse.bedroom.windows.push(new Windows("blue"));
console.log(sophanaHouse);


// Complete this code to get the color of the first window  of the living room
function getFirstWindowColor(house: House): string | undefined{
   if (house.livingRoom.windows.length == 0){
     return "There are no windows in the Living Room.";
   }else{
    return house.livingRoom.windows[0].color;
   }
};

console.log(getFirstWindowColor(sophanaHouse));


