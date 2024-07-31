class House {
  private chairs: Chair[] = [];

  /**
   * Add a chair of given ID
   * @param chairID the chair ID
   * @return the created chair
   */
  addChair(chairID: number): Chair {
    const chair = new Chair(chairID, this);
    this.chairs.push(chair);
    return chair;
  }
}

class Chair {
  constructor(private chairId: number, private house: House) {}
}

// MAIN
let newHouse = new House();
let newChair = newHouse.addChair(45); // Add a chair of id 45
console.log( newChair);