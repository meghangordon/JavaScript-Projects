function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('007') //isNaN 
}

function infinity_assignment() { // to display infinity
    var pos = (2e310);
    document.getElementById("positive").innerHTML = pos
}

function neg_infinity_assignment() { //to display -infinity
    var neg = (-3E310);
    document.getElementById("negative").innerHTML = neg
}


document.write(typeof 3); //typeof

console.log(3 + 10); // shows 13 in console

document.write(10 == 14); // double equal signs
document.write(10 == 10);

X = 13;
Y = 13;
document.write(X === Y); // same type and value

A = 3;
B = 17;
document.write(A === B); //same type, different value

C = "Cat";
D = 1;
document.write(C === D); //different type and value

E = "three";
F = 3;
document.write(E === f); // different type, same value

document.write(8 > 3 && 3 < 8); //and
document.write(7 < 2 || 4 > 1); // OR

function not_Function() { //Not
    document.getElementById("Not").innerHTML = !(100 > 200)
}