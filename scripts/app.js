function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    inputValue.value = '';
    return inputValueNumber;
}


document.getElementById('calc_player_cost').addEventListener('click', function(){
    const playerCost = getInputValue('player_cost')
    const playerTotal = document.getElementById('player_total');
    if( isNaN(playerCost) ){
        return alert('Please insert number')
    }
    playerTotal.innerText = playerCost * 5;
})

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


const selectButtons = document.getElementsByClassName('select_btn');
for(const selectButton of selectButtons){
    selectButton.addEventListener('click', function(event){
        const playerName = event.target.parentNode.childNodes[1].innerText;
        const selectedPlayer = document.getElementById('selected_player');
        const li = document.createElement('li');
        li.innerText = playerName;
        li.classList.add('mb-3')
        if(selectedPlayer.childElementCount > 4){
            return alert("You can't add more than five name")
        }
        selectedPlayer.appendChild(li);
    })
}