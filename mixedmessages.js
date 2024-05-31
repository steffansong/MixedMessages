console.log('This is the start of the random messages!')
const messages = []
const tarotImage = ['The Fool', 'The Devil','The Empress','The Magician','The Emperor','The Wheel of Fortune','The High Priestess','Death', 'The Sun','The Moon']
const luck = []

//Message generator for jokes

//Lists of various parts of the random message
const things = ['polar bear', 'tree', 'butterfly', 'elephant', 'bear', 'coral reef','blue whale','octopus', 'panda', 'flower','president', 'bald eagle'];
const emotions = ['sad', 'happy', 'frustrated', 'depressed', 'excited', 'angry', 'surprised', 'worried', 'confused', 'bored', 'lonely'];
const action = ['cross the road', 'drop out of school', 'eat 12 bananas', 'turn red', 'turn blue', 'go to the doctor', 'stand up', 'blush', 'close their eyes']
const reason = ["Because they can't keep a straight face!","Because they can't stop cracking up!","Because they take things too literally!","Because it's too far to walk!","Because they couldn't find the remote!","Because they saw the salad dressing!","Because they're always in stitches!","Because they had too many squares in their diet!", "Because they were feeling a bit crumby!", "Because they were grape at it!"] 


//Function to get random item from each list and return joke, takes arrays as params
function mixedMessages(things, emotions, acts, reas) {
    //picks a thing from each list and assigns it to a variable
    const randThing = things[Math.floor(Math.random() * things.length)];
    const randEmote = emotions[Math.floor(Math.random() * emotions.length)];
    const randAction = acts[Math.floor(Math.random() * acts.length)];
    const randReason = reas[Math.floor(Math.random() * reas.length)];

    //determines joke type between 2 types
    const jokeType = Math.floor(Math.random() * 2);
    if (jokeType === 0) {
        return `Why was the ${randThing} ${randEmote}? ${randReason}`;
    } else {
        return `Why did the ${randThing} ${randAction}? ${randReason}`;
    }
}

console.log(mixedMessages(things,emotions,action,reason));
//joke possiblities:
//why was the ${thing} ${emotion}? ${random reason}
//why did the ${thing} ${random action}? ${random reason}