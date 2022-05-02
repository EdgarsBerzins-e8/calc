let clearOutput = false; // mainīgais regulē kad ir jānotīra izvades ekrāns
let calcOperations = []; // masīvā tiek saglabātas iepriekšējās operācijas

// surprise
const emojis = [
"😆", "😅", "🤣", "😂", "😀", "🤑", "🤨", "🙂",
"😊", "😗", "😛", "😏", "🤥", "😴", "🥺", "😧",
"🤗", "🤩", "😎", "🥳", "😍", "😱", "🤓", "😷",
"🥴", "😳", "🤯", "🤫", "🤑", "😪", "😴", "😵"
];

function display(pressedButton) {

  // iegūst nospiesto pogu
  let pressedButtonValue = pressedButton.textContent;
  
  // ir nospiests kāds cipars
  if(
    (pressedButtonValue.charCodeAt(0) >= 48 && pressedButtonValue.charCodeAt(0) <= 57)
   || pressedButtonValue.charCodeAt(0) == 46
   || pressedButtonValue.charCodeAt(0) == 40 
   || pressedButtonValue.charCodeAt(0) == 41
  ) {
    // ja pēc rezultāta iegūšanas ir nospiesta ne-cipara poga, tad notīra ekrānu
    if(clearOutput) document.getElementById("output").innerHTML = '';
  }
  
  clearOutput = false;
  // izvada nospiesto pogu
  document.getElementById("output").innerHTML += pressedButtonValue;

}

function calc() {
  
  // iegūst ievadīto izteiksmi
  let expression = document.getElementById("output").innerHTML;
  
  // aprēķinu veic, ja ir ievadīta izteiksme
  if(expression != '') {

    // aprēķina izteiksi
    let result = eval(expression);
    
    // attēlo rezultātu
    document.getElementById("output").innerHTML = result;
    
    // ievieto izteiksi masīvā, iepriekšējos pabīdot uz leju
    calcOperations.unshift(expression += "=" + result);
    
    // noformē Memory saturu
    let memoryOutput = "";
    for(let operationRow in calcOperations) {
      memoryOutput += calcOperations[operationRow]+"<br>";
    }
    
    // attēlo Memory saturu
    document.getElementById("memory").innerHTML = memoryOutput;
    
    // iestata, ka ir jānotīra izvades ekrāns
    clearOutput = true;
  }
}

// surprise
function emoji(elem) {
  elem.innerText = emojis[Math.floor(Math.random() * emojis.length)];
};
