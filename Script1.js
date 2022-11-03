// JavaScript source code

// Plan, what if I make a seperate function for reply instead of if/else/&&. So that another function filters my variables, wether true or false. Then based on trues and falses the other function constructs a reply.


//model
let textRecieved = ('');
const Hello = ['hello', 'greetings', 'hei', 'sup', 'whatsup', 'salutations', 'ave', 'salve', 'salvete','hey'];
let Reply = ('');
const Feeling = ['feeling', 'doing', 'okay', 'fine', 'habeo','feel','how','good'];
let booli = '';
let textgained;
let smaller = ("");
let splitrecieved = ("");
const Youdirected = ['you', 'thee', 'deg', 'du', 'thy', 'tu'];
const Dislike = ['dislike', 'hate', 'gross', 'disgusting', 'fuck', 'bad','depressing','demens','insanus','vacerrousus','bad','poorly','sick'];
const meMyselfandI = ['i', 'am', 'me', 'myself', 'meg', 'eg', 'min', 'mine', 'ego']



//view
updateView();
function updateView() {
    document.getElementById("base").innerHTML = `

<div  class="topdog"><div></div><br><br><br>
<div class="head"><div class="sprite" id="spritey"></div><div class="main" id="thereplybox"></div></div>
<div class="main"><input type="text" oninput="textRecieved = this.value"><br><br>
<button onclick="sendMessage()">Send Message</button></div>
<br><br><br>
<div class="fontsizeandspacing footer">Words/combinations the bot understands sorta:
<br><br><br> 
 Hello, Greetings, Hei, Sup, Whatsup, Salutations, Ave, Salve, Salvete, Hey.
<br>
Feeling, Doing, Okay, Fine, Habeo, Feel, How, Good.
<br>
You, Thee, Deg, Du, Thy, Tu.
<br>
Dislike, Hate, Gross, Disgusting, Fuck, Bad, Depressing, Demens, Insanus, Vacerrousus, Bad, Poorly, Sick.
<br>
I, Am, Me, Myself, Meg, Eg, Min, Mine, Ego.
<div>






</div> </div>






`
    document.getElementById("thereplybox").innerHTML = Reply;
}



//controller
function sendMessage() {
    smaller = textRecieved.toLowerCase();
    splitrecieved = smaller.split(" ");
    if (Hello.some(checkText) === true) {
        if (Youdirected.some(checkText) === true) {
            if (Feeling.some(checkText) === true) {
                Reply = "I am feeling good, how are you?";
                console.log(checkText);
                console.log(sendMessage);
                robotResponse();
                updateView();
            }
            else if (Dislike.some(checkText)) {
                Reply = "No U!"
                updateView();

            }
        }
        else Reply = "Salutations!";
        robotResponse();
        updateView();
        console.log(sendMessage);
    }
    else if (Youdirected.some(checkText) === true) {
        if (Feeling.some(checkText) === true) {
            Reply = "I am feeling good, how are you?";
            robotResponse();
            updateView();
            console.log(checkText);

        }
        else if (Dislike.some(checkText)) {
            Reply = "No U!"
            updateView();

        }
        else
            Reply = "I don't know what you are trying to say about me."
        updateView();




    }
    else if (meMyselfandI.some(checkText) === true) {
        if (Feeling.some(checkText) === true) {
            if (Dislike.some(checkText) === false) {
                Reply = "That's good to hear";
                updateView();
            }
            else if (Dislike.some(checkText) === true) {
                Reply = "I am sorry to hear that."
                updateView();

            }

        }
        else Reply = "I don't understand what you are trying to say about yourself";
        updateView();
        console.log(checkText)

    }
    else if (Feeling.some(checkText) === true) {
        Reply = "Don't quite understand."
        updateView();
    }
    else if (Dislike.some(checkText) === true) {
        Reply = "Vulgar."
        updateView();
    }
    else 
        Reply = "Now im really lost."
    updateView();
}

function robotResponse() {
    let thesprite = document.getElementById("spritey")
    if (Reply === "I am feeling good, how are you?" || Reply === "That's good to hear" || Reply === "Salutations!") {
        
        thesprite.style.backgroundPosition = "422px 7px";
        updateView();
        console.log(robotResponse);
    }//use classes instead make classes and change the sprites class instead to the positions you want. Remember this Midas.
}
function checkText(message) {

    return splitrecieved.includes(message);
}









