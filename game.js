// let age = 100

// if (age < 100){
//     console.log("not eligible")
// } else if (age === 100){ // === (strict comaprison) data type must be same when comparing
//     console.log("heres the card from da king")
// }   else {
//     console.log("not eligible, already got it")
// }

let firstCard = 1
let secondCard = 11
let card = [firstCard, secondCard] // array
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") // queryselector same as getelementbyid, need to add #. works the same as CSS selector based on ID or Class (# or .) 
let cardsEl = document.getElementById("cardsEl")


function startgame(){
    rendergame() 
}



function rendergame(){
    
    sumEl.textContent = "sum: " + sum
    cardsEl.textContent ="Cards: " + card[0] + "," + card[1] 
    
    if( sum <= 20){
        message = "want to draw another card?"
    } else if (sum === 21) {
        message = "youve got blackjack"
        hasBlackJack = true
    }  else {
        message = "youre out of the game "
        isAlive = false
    } 

    console.log(message)
    messageEl.textContent = message

}

function nextCard(){
     console.log("drawign neew card form deck")
     
     let card = 7
     sum = sum + card
     rendergame()
}