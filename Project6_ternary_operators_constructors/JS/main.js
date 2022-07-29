//TERNARY OPERATOR
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}
//TERNARY OPERATOR CHALLENGE
function Voting_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("vote").innerHTML = Can_Vote + " to vote!";
}

//KEYWORDS CODING ASSIGNMENT
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2000, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Meghan = new Vehicle("Heybike", " Cityscape ", 2022, " White and Black ");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " Manufactured in " + Erik.Vehicle_Year;
}

function myNewFunction() { // NEW KEYWORD ASSIGNMENT
    document.getElementById("New_and_This").innerHTML = "Meghan drives a " + Meghan.Vehicle_Make +
    Meghan.Vehicle_Color + " -colored " + Meghan.Vehicle_Model + " Manufactured in " + Meghan.Vehicle_Year
}

//NESTED FUNCTIONS ASSIGNMENT
function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 2;
        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point;
    }
}