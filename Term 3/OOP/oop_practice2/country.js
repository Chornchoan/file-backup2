var Countris = /** @class */ (function () {
    function Countris(name, population, capitalName, corrency) {
        this.name = name;
        this.population = population;
        this.capitalName = capitalName;
        this.corrency = corrency;
    }
    Countris.prototype.getInformation = function () {
        return "welcome to ".concat(this.name, ", ").concat(this.population, "  millions people, cpital ").concat(this.capitalName, "   and  corrency ,").concat(this.corrency);
    };
    return Countris;
}());
var france = new Countris("france", 70, "paris", "Euro");
console.log(france);
var cambodia = new Countris("cambodia", 17, "Phnom Penh", "Riel");
console.log(cambodia);
var UK = new Countris("UK", 80, "London", "Pound");
console.log(UK);
var information = france.getInformation();
console.log(information);
