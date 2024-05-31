console.log('This is the start of the random messages!')


//Message generator for jokes

//Lists of various parts of the random message
const tarotImage = ['The Fool', 'The Devil','The Empress','The Magician','The Emperor','The Wheel of Fortune','The High Priestess','Death', 'The Sun','The Moon']
const luck = ['Good','Bad','Somewhat Okay','Somewhat Bad','Could be better','Could be worse','the BESTTT :)', 'the Worstt:(']
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]


//Function to get random item from each list and return fortune prediction, takes arrays as params
function mixedMessages(tarotImage, luck, fortunes) {
    //picks an item from each list and assigns it to a variable
    const randTarotImage = tarotImage[Math.floor(Math.random() * tarotImage.length)];
    const randLuck = luck[Math.floor(Math.random() * luck.length)];
    const randFortunes = fortunes[Math.floor(Math.random() * fortunes.length)];

    return `Your tarot card that watches over you is : ${randTarotImage}.
    Your luck for today is ${randLuck} !!!
    Last of all, your fortune message is ${randFortunes}.
    Best of luck to you and may fortune smile on you :)
    `    
}

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');
function showFortune(){
    fortune.innerHTML = mixedMessages();
    button.innerHTML = "Test your fortune again???";
    button.style.cursor = "default";
}

button.addEventListener('click',showFortune)
