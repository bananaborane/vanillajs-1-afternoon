let trackingArray = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

let play = (param)=>{
    let player = document.getElementById('player')
    let element = document.getElementById(param)


    // LOGIC BELOW DOES NOT TOGGLE X'S AND O'S AFTER SET
    if(element.innerText !== "X" && element.innerText !== "O"){
        if(player.innerText == "O"){
        player.innerText = "X";
        element.innerText = "O";
        trackingArray[param] = "O";
        }else {
        player.innerText = "O";
        element.innerText = "X"
        trackingArray[param] = "X"
        };
    }

    // LOGIC BELOW ALLOWS TO TOGGLE X'S AND O'S AFTER SET
    // if (player.innerText == "X"){
    //     player.innerText = "O";
    //     element.innerText = "X"
    //     trackingArray[param] = "X"
    // } else {
    //     player.innerText = "X";
    //     element.innerText = "O"
    //     trackingArray[param] = "O"
    // }

    console.log(trackingArray)



    if (trackingArray[0]!==undefined && trackingArray[0] == trackingArray[1] && trackingArray[1] == trackingArray[2]){
            window.alert(`Player ${trackingArray[0]} wins!`);
            reset();
    }
    if (trackingArray[3]!==undefined && trackingArray[3] == trackingArray[4] && trackingArray[4] == trackingArray[5]){
            window.alert(`Player ${trackingArray[3]} wins!`);
            reset();
    }
    if (trackingArray[6]!==undefined && trackingArray[6] == trackingArray[7] && trackingArray[7] == trackingArray[8]){
            window.alert(`Player ${trackingArray[6]} wins!`);
            reset();
    }
    if (trackingArray[0]!==undefined && trackingArray[0] == trackingArray[3] && trackingArray[3] == trackingArray[6]){
        window.alert(`Player ${trackingArray[0]} wins!`)
        reset();
    }
    if (trackingArray[1]!==undefined && trackingArray[1] == trackingArray[4] && trackingArray[4] == trackingArray[7]){
        window.alert(`Player ${trackingArray[1]} wins!`);
        reset();
    }
    if (trackingArray[2]!==undefined && trackingArray[2] == trackingArray[5] && trackingArray[5] == trackingArray[8]){
        window.alert(`Player ${trackingArray[2]} wins!`);
        reset();
    }
    if (trackingArray[0]!==undefined && trackingArray[0] == trackingArray[4] && trackingArray[4] == trackingArray[8]){
        window.alert(`Player ${trackingArray[0]} wins!`);
        reset();
    }
    if (trackingArray[2]!==undefined && trackingArray[2] == trackingArray[4] && trackingArray[4] == trackingArray[6]){
        window.alert(`Player ${trackingArray[2]} wins!`);
        reset();
    }



  let noEmptySpots = true
  for(let i = 0; i <= 8; i++){
    if(trackingArray[i] === undefined){
        noEmptySpots = false
    }
  }
  if(noEmptySpots === true){
    window.alert(`It's a draw! Try again.`)
    reset();
  }
};




function reset(){
    trackingArray = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    let element0 = document.getElementById(0);
    let element1 = document.getElementById(1);
    let element2 = document.getElementById(2);
    let element3 = document.getElementById(3);
    let element4 = document.getElementById(4);
    let element5 = document.getElementById(5);
    let element6 = document.getElementById(6);
    let element7 = document.getElementById(7);
    let element8 = document.getElementById(8);
    let elementsArray = [element0, element1, element2, element3, element4, element5, element6, element7, element8];
    // assigns each square to a variable, push them to a new array "elementsArray" and loop through said array
    for(let i = 0;i<elementsArray.length;i++){
        elementsArray[i].innerText = "";
    }

    // could also loop through an array of ids, and change .innerText to ""
}


