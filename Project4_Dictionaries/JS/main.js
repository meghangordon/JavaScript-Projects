function my_Dictionary() { //my dictionary 
    var Animal1 = { // animal 1
        Species: "Cat",
        Color: "Orange",
        Age: 6,
        FavActivity: "Sleeping",
    };
    var Animal2 = { // animal 2
        Species: "Cat",
        Color: "Black",
        Age: 5,
        FavActivity: "Watching Cat TV",
    };
    var Animal3 = { //animal 3
        Species: "Dog",
        Color: "Brindle",
        Age: 3,
        FavActivity: "Playing fetch",
    };
    delete Animal1.Color; // delete the color
    document.getElementById("Dictionary").innerHTML = Animal1.Color;
}