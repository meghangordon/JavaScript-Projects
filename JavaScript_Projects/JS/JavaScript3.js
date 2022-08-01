//DATA ATTRIBUTE ASSIGNMENT
function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is one of the best female roles in " + character.innerHTML + " video game!");
}