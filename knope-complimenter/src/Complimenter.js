import React, { useState } from "react";
import axios from 'axios';

let user = {
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

const BadRed = `rgba(220, 0, 0, 0.88)`;

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
const behaviors = ["rule-breaking", "rebellion-starting", "noise-making"];

// Cute/strong animals
const animals = ["red panda", "quokka", "sand cat", "raccoon", "koala bear", "humming bird", "baby-eating dingo", "miniature pig", "labrador-in-training", "honey badger", "musk ox", "elephant", "grizzly bear", "tiger", "lion", "leafcutter ant", "jaguar", "hippopotamus", "gorilla"];

// Ecosystems
const ecosystems = ["forest", "land", "ocean", "desert", "tundra"];

// Mythical Beings
const mythicalBeings = ["mermaid", "unicorn", "sunfish", "goddess", "lioness", "samurai", "phoenix", "minx", "sun-goddess", "dragon", "Chimaera"];

const inanimateObjects = ["marble statue", "suit of armor", "Academy Award"];

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

    return (
        <div>
            <h2 class='Comp-text'>
                {user.name}, you {seedAdjectives[adj1Num]}, 
                 {seedAdjectives[adj2Num]}, {behaviors[behaviorNum]} {animals[animalNum]}. </h2>
        </div>
    );
}

// 2) <adjective> <ecosystem>-<mythical being>
function CompFormatTwo() {
    let adjNum = randomNumberInRange(0, seedAdjectives.length-1);
    let ecosystemNum = randomNumberInRange(0, ecosystems.length-1);
    let beingNum = randomNumberInRange(0, mythicalBeings.length-1);

    return (
        <div>
            <h2 class='Comp-text'>
                {user.name}, you {seedAdjectives[adjNum]}, {ecosystems[ecosystemNum]}-{mythicalBeings[beingNum]}. </h2>
        </div>
    );
}

// 3) <adjective>, <behavior> <inanimate object> come to life.
function CompFormatThree() {
    let adjNum = randomNumberInRange(0, seedAdjectives.length-1);
    let behaviorNum = randomNumberInRange(0, behaviors.length-1);
    let objNum = randomNumberInRange(0, inanimateObjects.length-1);

    return (
        <div>
            <h2 class='Comp-text'>
                {user.name}, you {seedAdjectives[adjNum]}, {behaviors[behaviorNum]}
                  {inanimateObjects[objNum]} come to life. </h2>
        </div>
    );
}

// 4) <adjective>, <adjective> <profession>
function CompFormatFour() {
    let adj1Num = randomNumberInRange(0, seedAdjectives.length-1);
    let adj2Num = randomNumberInRange(0, seedAdjectives.length-1);

    return (
        <div>
            <h2 class='Comp-text'>
                {user.name}, you {seedAdjectives[adj1Num]}, {seedAdjectives[adj2Num]} {user.profession}. </h2>
        </div>
    );
}

// 5) <adjective>, <adjective>, <flower>
function CompFormatFive() {
    let adj1Num = randomNumberInRange(0, seedAdjectives.length-1);
    let adj2Num = randomNumberInRange(0, seedAdjectives.length-1);
    let flowerNum = randomNumberInRange(0, flowers.length-1);

    return (
        <div>
            <h2 class='Comp-text'>
                {user.name}, you {seedAdjectives[adj1Num]}, {seedAdjectives[adj2Num]} {flowers[flowerNum]}. </h2>
        </div>
    );
}

// 6) <infuser>-infused <infusee/dessert>
function CompFormatSix() {
    let infuserNum = randomNumberInRange(0, infusers.length-1);
    let infuseeNum = randomNumberInRange(0, infusees.length-1);

    return (
        <div>
            <h2 class='Comp-text'>{user.name}, you {infusers[infuserNum]}-infused {infusees[infuseeNum]}. </h2>
        </div>
    );
}

// 7) Analagous comparisons:
//    Lord of the Rings is the <person> of novels. 
//    Waffles are the <person> of breakfast foods.
function CompFormatSeven() {
    let analogyCatNum = randomNumberInRange(0, analogyCategories.length-1);
    let analogyKey = analogyCategories[analogyCatNum]

    return (
        <div>
            <h2 class='Comp-text'> {goodAnalogyPairs[analogyKey]} is the {user.name} of {analogyKey}. </h2>
        </div>
    );
}

function CompFormatJerry() {
    let analogyCatNum = randomNumberInRange(0, analogyCategories.length-1);
    let analogyKey = analogyCategories[analogyCatNum]

    return (
        <div>
            <h2 class='Comp-text'> You got a Jerry GIF so no compliments here! <br/>
                {badAnalogyPairs[analogyKey]} is the {user.name} of {analogyKey}. </h2>
        </div>
    );
}

function CompFormatJamm() {
    let analogyCatNum = randomNumberInRange(0, analogyCategories.length-1);
    let analogyKey = analogyCategories[analogyCatNum]

    return (
        <div>
            <h2 class='Comp-text'> You've been JAMMED! </h2>
        </div>
    );
}

function CompFormatApril() {
    let analogyCatNum = randomNumberInRange(0, analogyCategories.length-1);
    let analogyKey = analogyCategories[analogyCatNum]

    return (
        <div>
            <h2 class='Comp-text'> You are the cross between Werner Herzog and Wednesday Addams that we've been waiting for. </h2>
        </div>
    );
}

function ComplimentGenerator() {

    let div_ = document.getElementById("compliment-container");
    if (div_ == undefined) {
        return (<p></p>)
    }
    

    // The Jerry flow
    if (images[imgNum] == "jerry_gif.gif") {
        div_.style.background = BadRed;
        return(
            <CompFormatJerry />
        );
    } else if (images[imgNum] == "jamm_gif.gif") {
        div_.style.background = BadRed;
        return(
            <CompFormatJamm />
        );
    } else if (images[imgNum] == "april_gif.gif") {
        div_.style.background = BadRed;
        return(
            <CompFormatApril />
        );
    }


    div_.style.background = GoodGreen;

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
    };
    formatNum_ = formatNum;

    imgNum = randomNumberInRange(0, images.length-1);

    return (
        <div className='Compliment-container' id="compliment-container">
            <div className="column">
                
                <ComplimentGenerator />
                <div>
                    <button className="button" onClick={handleClick}>
                        Generate compliment here!
                    </button>
                </div>

            </div>
            
            <div className="column">
                <SetImage />
            </div>
        </div>
    );
}