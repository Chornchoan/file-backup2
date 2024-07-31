var webAlumni = /** @class */ (function () {
    function webAlumni(Experience_in_VueJS, Experience_in_NodeJS, can_code_oop) {
        this.Experience_in_VueJS = Experience_in_VueJS;
        this.Experience_in_NodeJS = Experience_in_NodeJS;
        this.can_code_oop = can_code_oop;
    }
    webAlumni.prototype.getSalary = function () {
        var saLary = 250;
        if (this.Experience_in_VueJS >= 1) {
            saLary += 100;
        }
        ;
        if (this.Experience_in_NodeJS >= 1) {
            saLary += 100;
        }
        if (this.can_code_oop == true) {
            saLary += 250;
        }
        return saLary;
    };
    return webAlumni;
}());
;
var alumno1 = new webAlumni(0.5, 0.5, false);
var alumno2 = new webAlumni(1, 0.5, false);
var alumno3 = new webAlumni(2, 2, false);
var alumno4 = new webAlumni(2, 2, true);
console.log('Less than a year', alumno1.getSalary());
console.log(alumno2.getSalary());
console.log(alumno3.getSalary());
console.log(alumno4.getSalary());
