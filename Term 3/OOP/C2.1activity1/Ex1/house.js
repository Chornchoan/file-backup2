var tree = /** @class */ (function () {
    function tree(size) {
        this.size = size;
    }
    return tree;
}());
var house = /** @class */ (function () {
    function house(owner) {
        this.trees = [];
        this.owner = owner;
    }
    house.prototype.addTree = function (tree) {
        this.trees.push(tree);
    };
    return house;
}());
var houseRonan = new house("Ronan"); //create object
var tree1 = new tree(10);
var tree2 = new tree(50);
var tree3 = new tree(100);
var tree4 = new tree(150);
// houseRonan.trees.push(tree1,);  //this use for duplecat values
houseRonan.addTree(tree1);
houseRonan.addTree(tree2);
houseRonan.addTree(tree3);
houseRonan.addTree(tree4);
console.log(houseRonan);
