//GLOBAL VARIABLE
X = 83
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();

//LOCAL VARIABLE
function Add_numbers_3() {
    var Y = 18;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}

Add_numbers_3();
Add_numbers_4();

//IF STATEMENTS
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//IF STATEMENT ASSIGNMENT
function if_Stmt() {
    if (81 > 79) {
        document.write("The left is larger than the right.")
    }
}

//ELSE STATEMENTS
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You  are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

// ELSE IF STATEMENTS
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}