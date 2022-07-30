// WHILE LOOP ASSIGNMENT
function Call_Loop() { 
    var Digit = "";
    var X = 1;
    while (X < 14) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//FOR LOOP ASSIGNMENT
var Video_games = ["The Last of Us", "Fallout 76", "Stray", "Dying Light 2"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Video_games.length; Y++) {
        Content += Video_games[Y] + "<br>";
    }
    document.getElementById("List_of_Instructions").innerHTML = Content;
}

//ARRARY ASSIGNEMENT
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "Fancy vintage cats";
    Cat_Picture[1] = "Cats with unbrellas";
    Cat_Picture[2] = "Cats sitting at a dinner table";
    document.getElementById("Array").innerHTML = "In this picture, it contains " +
        Cat_Picture[2] + "."
        
}

//CONST KEYWORD ASSIGNMENT

function constant_function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}


//LET KEYWORD ASSIGNMENT
var X = 73;
document.write(X);
{
    let X = 37;
    document.write("<br>" + X);
}

//OBJECT ASSIGNMENT
function catFunction() {
    let cat = {
        Name: "Oscar ",
        Breed: " American Short Haired Tabby ",
        age: "6 ",
        color: "orange",
        description: function () {
            return "The cat " + cat.Name + "is an " + this.color + "-colored" +this.Breed + "and is " + this.age + "years old. "
        }
    };
    document.getElementById("Cat_Object").innerHTML = cat.description();
}