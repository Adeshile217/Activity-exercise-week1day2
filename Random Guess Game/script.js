let userInput = document.getElementById('userinput');
let guessButton = document.getElementById('guessbutton');
let resultParagraph = document.getElementById('result');

userInput.addEventListener('input', handleUserInput);
guessButton.addEventListener('click', handleGuessButton);

function handleUserInput(event){
 value = event.target.value;
}
function handleGuessButton(event){
    let inputNumber = parseInt(userInput.value);
    let result = Math.floor(Math.random() * 10);

    resultParagraph.innerHTML = 'Generated Number : {result}';

   

    if (inputNumber == result) {
        resultParagraph.innerHTML += 'You win!';
      } 
      else {
        resultParagraph.innerHTML += 'You lose!';
      }
}

