// select player and add them on list
const selectButtons = document.getElementsByClassName('select_btn');
const selectedPlayer = document.getElementById('selected_player');
for(const selectButton of selectButtons){
    selectButton.addEventListener('click', function(event){
        const playerName = event.target.parentNode.childNodes[1].innerText;
        const li = document.createElement('li');
        li.innerText = playerName;
        li.classList.add('mb-3')
        // condition to add no more than five players
        if(selectedPlayer.childElementCount > 4){
            return alert("You can't add more than five name")
        }
        selectedPlayer.appendChild(li);
        // disable button on click
        event.target.disabled = true;
        const playerCount = document.getElementById('player_count');
        playerCount.innerText = selectedPlayer.childElementCount;
    })
}



// calculating player Expenses

// function to get input value
function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    inputValue.value = '';
    return inputValueNumber;
}
// calculating five player cost
document.getElementById('calc_player_cost').addEventListener('click', function(){
    const playerCost = getInputValue('player_cost')
    const playerTotal = document.getElementById('player_total');
    if( isNaN(playerCost) ){
        return alert('Please insert number')
    }
    playerTotal.innerText = playerCost * selectedPlayer.childElementCount;
})
// calculating total cost
document.getElementById('tatal_cost').addEventListener('click', function(){
    const managerCost = getInputValue('manager');
    const coachCoast = getInputValue('coach');
    if( isNaN(managerCost) || isNaN(coachCoast) ){
        return alert('Please insert number')
    }
    const playerTotal = parseFloat(document.getElementById('player_total').innerText);
    const newTotalCost = managerCost + coachCoast + playerTotal;
    const PrevTotalCost = document.getElementById('total_cost');
    PrevTotalCost.innerText = newTotalCost;
})


