import React, { useState } from "react";
import YourThesaurusComponent from "./Synonyms";

export let User = {
    name: "Ann",
    profession: "nurse",
};

let cimg = {
    name: "dummy",
    path: "dummy",
};

let formatNum_ = -1;

let imgNum = -1;

const GoodGreen = `rgba(25, 77, 51, 0.88)`;

const BadRed = `rgba(220, 0, 0, 0.6)`;

/*

Compliment formats:
-------------------
(all properties in <> are to be randomly assigned)
1) <adjective>, <adjective>, <behavior> <cute/strong animal>
2) <adjective> <ecosystem>-<mythical being>
3) <adjective>, <behavior> <inanimate object> come to life
4) <adjective>, <adjective> <profession>
5) <adjective>, <adjective>, <flower>
6) <infuser>-infused <infusee/dessert>
7) Analagous comparisons:
    Lord of the Rings is the <person> of novels. 
    Waffles are the <person> of breakfast foods.

Where appropriate, <person> is prefixed/suffixed/inserted.

*/

// General adjective list to be used as seed words for Merriam Webster Thesaurus API
const seedAdjectives = ["strong", "opalescent", "sassy", "noble", "tricky", "sophisticated", "elegant", "powerful", "brilliant", "talented", "sweet", "glowing", "thoughtful", "cute", "intelligent", "funny", "dutiful", "loyal", "clever", "hard-working", "wily", "silly"];

// Behaviors
const behaviors = ["rule-breaking", "rebellion-starting", "good-trouble-making"];

// Cute/strong animals
const animals = ["red panda", "quokka", "sand cat", "raccoon", "koala bear", "humming bird", "baby-eating dingo", "miniature pig", "labrador-in-training", "honey badger", "musk ox", "elephant", "grizzly bear", "tiger", "lion", "leafcutter ant", "jaguar", "hippopotamus", "gorilla"];

// Ecosystems
const ecosystems = ["forest", "land", "ocean", "desert", "tundra"];

// Mythical Beings
const mythicalBeings = ["mermaid", "unicorn", "sunfish", "goddess", "lioness", "samurai", "phoenix", "minx", "sun-goddess", "dragon", "Chimaera"];

const inanimateObjects = ["marble statue", "suit of armor", "oil painting"];

const flowers = ["sunflower", "daffodil", "lily", "snapdragon"];

const infusees = ["nectar", "syrup", "fruit puree", "liquor", "honey", "popsicle", "French pastry"];

const infusers = ["berry", "citrus", "basil", "lavender", "vanilla", "chocolate"];

const images = ["april_gif.gif", "gif_01.gif", "gif_02.gif", "gif_03.gif", "gif_04.gif",
 "image_01.jfif", "image_02.webp", "image_03.jpg", "image_04.jpg",
 "april_gif.gif", "jamm_gif.gif", "jerry_gif.gif", "april_gif.gif", "jamm_gif.gif", "jerry_gif.gif"];

const analogyCategories = ["novels", "breakfast foods", "seasons"];

const goodAnalogyPairs = {
    "novels": "Lord of the Rings",
    "breakfast foods": "A waffle",
    "seasons": "Summer",    
}

const badAnalogyPairs = {
    "novels": "Twilight",
    "breakfast foods": "A plate of cold eggs",
    "seasons": "Flu",    
}

const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};

// 1) <adjective>, <adjective>, <behavior> <cute/strong animal>    
function CompFormatOne() {
    let adj1Num = randomNumberInRange(0, seedAdjectives.length-1);
    let adj2Num = randomNumberInRange(0, seedAdjectives.length-1);
    let behaviorNum = randomNumberInRange(0, behaviors.length-1);
    let animalNum = randomNumberInRange(0, animals.length-1);

    let adj1 = <span className="random-words-adj">{seedAdjectives[adj1Num]}</span>;
    let adj2 = <span className="random-words-adj">{seedAdjectives[adj2Num]}</span>;
    let behavior = <span className="random-words">{behaviors[behaviorNum]}</span>;
    let animal = <span className="random-words">{animals[animalNum]}</span>;

    document.getElementById("word-replacer").click = true;

    return (
        <div>
            <h2 className='Comp-text'>
                {User.name}, you {adj1}, {adj2}, {behavior} {animal}. </h2>
        </div>
    );
}

// 2) <adjective> <ecosystem>-<mythical being>
function CompFormatTwo() {
    let adjNum = randomNumberInRange(0, seedAdjectives.length-1);
    let ecosystemNum = randomNumberInRange(0, ecosystems.length-1);
    let beingNum = randomNumberInRange(0, mythicalBeings.length-1);

    
    let adj = <span className="random-words-adj">{seedAdjectives[adjNum]}</span>;
    let ecosystem = <span className="random-words">{ecosystems[ecosystemNum]}</span>;
    let being = <span className="random-words">{mythicalBeings[beingNum]}</span>;

    document.getElementById("word-replacer").click = true;

    return (
        <div>
            <h2 className='Comp-text'>
                {User.name}, you {adj}, {ecosystem}-{being}.</h2>
        </div>
    );
}

// 3) <adjective>, <behavior> <inanimate object> come to life.
function CompFormatThree() {
    let adjNum = randomNumberInRange(0, seedAdjectives.length-1);
    let behaviorNum = randomNumberInRange(0, behaviors.length-1);
    let objNum = randomNumberInRange(0, inanimateObjects.length-1);

    let adj = <span className="random-words-adj">{seedAdjectives[adjNum]}</span>;
    let behavior = <span className="random-words">{behaviors[behaviorNum]}</span>;
    let obj = <span className="random-words">{inanimateObjects[objNum]}</span>;

    document.getElementById("word-replacer").click = true;

    return (
        <div>
            <h2 className='Comp-text'>
                {User.name}, you {adj}, {behavior} {obj} come to life. </h2>
        </div>
    );
}

// 4) <adjective>, <adjective> <profession>
function CompFormatFour() {
    let adj1Num = randomNumberInRange(0, seedAdjectives.length-1);
    let adj2Num = randomNumberInRange(0, seedAdjectives.length-1);

    
    let adj1 = <span className="random-words-adj">{seedAdjectives[adj1Num]}</span>;
    let adj2 = <span className="random-words">{seedAdjectives[adj2Num]}</span>;
    let profession = <span className="random-words">{User.profession}</span>;

    return (
        <div>
            <h2 className='Comp-text'>
                {User.name}, you {adj1}, {adj2} {profession}. </h2>
        </div>
    );
}

// 5) <adjective>, <adjective>, <flower>
function CompFormatFive() {
    let adj1Num = randomNumberInRange(0, seedAdjectives.length-1);
    let adj2Num = randomNumberInRange(0, seedAdjectives.length-1);
    let flowerNum = randomNumberInRange(0, flowers.length-1);

    let adj1 = <span className="random-words-adj">{seedAdjectives[adj1Num]}</span>;
    let adj2 = <span className="random-words-adj">{seedAdjectives[adj2Num]}</span>;
    let flower = <span className="random-words">{flowers[flowerNum]}</span>;

    return (
        <div>
            <h2 className='Comp-text'>
                {User.name}, you {adj1}, {adj2} {flower}. </h2>
        </div>
    );
}

// 6) <infuser>-infused <infusee/dessert>
function CompFormatSix() {
    let infuserNum = randomNumberInRange(0, infusers.length-1);
    let infuseeNum = randomNumberInRange(0, infusees.length-1);

    let infuser = <span className="random-words">{infusers[infuserNum]}</span>;
    let infusee = <span className="random-words">{infusees[infuseeNum]}</span>;

    return (
        <div>
            <h2 className='Comp-text'>{User.name}, you {infuser}-infused {infusee}. </h2>
        </div>
    );
}

// 7) Analagous comparisons:
//    Lord of the Rings is the <person> of novels. 
//    Waffles are the <person> of breakfast foods.
function CompFormatSeven() {
    let analogyCatNum = randomNumberInRange(0, analogyCategories.length-1);
    let analogyKey = analogyCategories[analogyCatNum];

    return (
        <div>
            <h2 className='Comp-text'> <span className="random-words">{goodAnalogyPairs[analogyKey]}</span> is the <span className="random-words">{User.name}</span> of <span className="random-words">{analogyKey}</span>. </h2>
        </div>
    );
}

function CompFormatJerry() {
    let analogyCatNum = randomNumberInRange(0, analogyCategories.length-1);
    let analogyKey = analogyCategories[analogyCatNum]

    return (
        <div>
            <h2 className='Comp-text'> You got a Jerry GIF so here's an insult instead! <br/>
            <span className="random-bad-words">{badAnalogyPairs[analogyKey]}</span> is the <span className="random-bad-words">{User.name}</span> of <span className="random-bad-words">{analogyKey}</span>. </h2>
        </div>
    );
}

function CompFormatJamm() {
    return (
        <div>
            <h2 className='Comp-text'> You've been JAMMED! </h2>
        </div>
    );
}

function CompFormatApril() {
    return (
        <div>
            <h2 className='Comp-text'> Keep trying... nothing to see here.</h2>
        </div>
    );
}

function ComplimentGenerator() {

    let div_ = document.getElementById("compliment-container");
    let genButton = document.getElementById("generate-button");
    if (div_ == undefined) {
        return (<p></p>)
    }
    

    // The Jerry flow
    if (images[imgNum] == "jerry_gif.gif") {
        div_.style.background = BadRed;
        genButton.innerText = "Try Again!";

        return(
            <CompFormatJerry />
        );
    } else if (images[imgNum] == "jamm_gif.gif") {
        div_.style.background = BadRed;
        genButton.innerText = "Try Again!";
        
        return(
            <CompFormatJamm />
        );
    } else if (images[imgNum] == "april_gif.gif") {
        div_.style.background = BadRed;
        genButton.innerText = "Try Again!";
        
        return(
            <CompFormatApril />
        );
    }


    div_.style.background = GoodGreen;
    genButton.innerText = "Click to get compliment!";        

    switch(formatNum_) {
        case 0:
            return(
                <CompFormatOne />
            );
        case 1:
            return(
                <CompFormatTwo />
            );
        case 2:
            return(
                <CompFormatThree />
            );
        case 3:
            return(
                <CompFormatFour />
            );
        case 4:
            return(
                <CompFormatFive />
            );
        case 5:
            return(
                <CompFormatSix />
            );
        case 6:
            return(
                <CompFormatSeven />
            );
    }
}

function SetImage() {

    cimg.name = require("./image_set/"+images[imgNum]);

    return(
        <div className='column'>
          <img src={cimg.name} alt="img" />
        </div>
    );
}

export function BuildCompliment() {
    const [formatNum, setFormatNum] = useState(0);
    const handleClick = () => {
        setFormatNum(randomNumberInRange(0, 6));
        document.getElementById("word-replacer").hidden = true;
    };

    const handleWordReplacer = () => {
        // if adjectives are present, allow replace feature.
        let adj_word_set = document.getElementsByClassName("random-words-adj");
        if (adj_word_set.length > 0) {
            document.getElementById("word-replacer").hidden = false;
        }
    }
    formatNum_ = formatNum;

    imgNum = randomNumberInRange(0, images.length-1);

    return (
        <div className='Compliment-container' id="compliment-container" onMouseOver={handleWordReplacer}>
            <div className="column">

                <YourThesaurusComponent />
                
                <ComplimentGenerator />
                <div>
                    <button className="button" onClick={handleClick} id="generate-button">
                        Click to get compliment!
                    </button>
                </div>

            </div>
            
            <div className="column">
                <SetImage />
            </div>
        </div>
    );
}