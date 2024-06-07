let plants = ["Indoor Plants","Outdoor Plants"];
let guide = ["Your Complete Plant Care Guide for Gardening Enthusiasts","Choosing the Right Plants","Essential Plant Care Tasks","Understanding Plant Needs","Troubleshooting Common Plant Problems"]
let waterRem = ["Please water a plant"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");
let slct3 = document.getElementById("slct3");


plants.forEach(function addPlants(item){
    let option = document.createElement("option");
    option.text = item;
    //option.value = item;
    slct1.appendChild(option);
});

slct1.onchange = function(){
    let link1 = document.getElementById("link1");

    if(this.value == "Indoor Plants"){
        link1.innerHTML = `<a href="indoor.html" target="_blank">Here are some Indoor plants for you</a>`
    }
    if(this.value == "Outdoor Plants"){
        link1.innerHTML = `<a href="outdoor.html" target="_blank">Here are some Outdoor plants for you</a>`
    }
}

guide.forEach(function guidelines(item){
    let option = document.createElement("option");
    option.text = item;
    slct2.appendChild(option);
});

slct2.onchange = function(){
    let link2 = document.getElementById("link2");
    if(this.value == "Your Complete Plant Care Guide for Gardening Enthusiasts"){
        link2.innerHTML = `<a href="guide.html#guide" target="_blank">Your Complete Plant Care Guide for Gardening Enthusiasts</a>`
    }
    if(this.value == "Choosing the Right Plants"){
        link2.innerHTML = `<a href="guide.html#guide1" target="_blank">Choosing the Right Plants</a>`
    }
    if(this.value == "Essential Plant Care Tasks"){
        link2.innerHTML = `<a href="guide.html#guide2" target="_blank">Essential Plant Care Tasks</a>`
    }
    if(this.value == "Understanding Plant Needs"){
        link2.innerHTML = `<a href="guide.html#guide3" target="_blank">Understanding Plant Needs</a>`
    }
    if(this.value == "Troubleshooting Common Plant Problems"){
        link2.innerHTML = `<a href="guide.html#guide4" target="_blank">Troubleshooting Common Plant Problems</a>`
    }
}



waterRem.forEach(function setReminder(item){
    let option = document.createElement("option");
    option.text = item;
    //option.value = item;
    slct3.appendChild(option);
});

slct3.onchange = function(){
    let link3 = document.getElementById("link3");

    if(this.value == "Please water a plant"){
        link3.innerHTML = `<a href="water.html" target="_blank">Please take care of me</a>`
    }
}