let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");
console.log(firstInput);
console.log(secondInput);

let setCard = ()=>{
    const shapeOfCard = document.getElementById(firstInput.value);
    const colorOfCard = secondInput.value;
    console.log(shapeOfCard);
    console.log(colorOfCard);
    shapeOfCard.style.color = colorOfCard;
    
}

let reset = ()=>{
    // assigns each "shape" to an variable, adds each variable to a new array "cardShapes"
    let diamonds = document.getElementById('diamonds');
    let clubs = document.getElementById('clubs');
    let hearts = document.getElementById('hearts');
    let spades = document.getElementById('spades');
    let cardShapes = [diamonds, clubs, hearts, spades];
    cardShapes.forEach((elem, i, arr)=>{
        elem.style.color = "gray";
    })

    // could also loop through each section tag and set elem.style.color to gray
    
}
