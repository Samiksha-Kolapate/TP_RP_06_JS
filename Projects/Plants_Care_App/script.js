/* var plantList = document.getElementById("list");

var listId = 0;


function showPlants(){
    plantList.innerHTML += `
    <div id="div-${listId}">
    <li id="list-${listId}"><button onClick="showIndoor()">Indoor Plants</button> </li>
    </div>`;
    listId++;
    plantList.innerHTML += `
    <div id="div-${listId}">
    <li id="list-${listId}"><button onClick="showOutdoor()">Outdoor Plants</button></li>
    </div>`;
    listId++;
}

function showIndoor(){
    plantList.innerHTML += `
    <div id="div-${listId}">
    <li id="list-${listId}"><button onClick="showIndoor()">Money</button> </li>
    </div>`;
    listId++;
}
 */


let plants = ["Indoor Plants","Outdoor Plants"];
let indoor = ["Golden fern plant","Lemon twisted netted","Money plant","Fittonia pink plant","Aloe pepe"];
let outdoor = ["Rose","Petunias","Hostas","Snake Plant","Peace lilly","Marigold","Desert rose"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");

let para = document.getElementById("para");

var indoor_array = [
    {
        id : 0,
        image : `<img src="img/indoor.webp">`,
        title : "Golden fern plant",
        description : "Ferns are plants that do not have flowers. Ferns generally reproduce by producinspores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern ibotanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike manplants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect tbright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organimanures and         slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep thehealthy        and dust free",
        propagation  : "Spores or runners",
            
    },
    {
        id : 1,
        title : "Lemon twisted netted",
        description : "22Ferns are plants that do not have flowers. Ferns generally reproduce by producing spores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern is botanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike many plants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect to bright sunlight and temperature of 18 to 27oc.",
        soil : "Lemon Twist does best in well-draining soil. A good soil will contain lots of organic matter such as coco coir as well as perlite or vermiculite to help with drainage. Adding a handful of perlite to regular store-bought potting soil should do the trick!",
        water : "Lemon Twist needs 0.8 cups of water every 9 days when it doesn't get direct sunlight and is potted in a 5.0 pot",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "-",
        fertilizers  : "Lemon Twist should be repotted after it doubles in size or once a year, whichever comes first. Fresh potting soil has all the nutrients your plant needs, so as long as it’s refreshed yearly, you shouldn’t need to use fertilizer. Remember, plants get their energy from sunlight, not fertilizer!",
        humidity   : "Lemon Twist doesn’t require additional humidity. Plants absorb most water through their root system rather than their leaves, so the best way to provide humidity for your plants is through watering the soil.",
        propagation  : "-",
        image : `<img src="img/indoor.webp">`,

    },
    {
        id : 2,
        title : "Money plant",
        description : "33Ferns are plants that do not have flowers. Ferns generally reproduce by producing spores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern is botanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike many plants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect to bright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organic manures and slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep them healthy and dust free",
        propagation  : "Spores or runners",
        image : `<img src="img/indoor.webp">`,

    },
    {
        id : 3,
        title : "Fittonia pink plant",
        description : "44Ferns are plants that do not have flowers. Ferns generally reproduce by producing spores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern is botanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike many plants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect to bright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organic manures and slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep them healthy and dust free",
        propagation  : "Spores or runners",
        image : `<img src="img/indoor.webp">`,

    },
    {
        id: 4,
        title : "Aloe pepe",
        description : "55Ferns are plants that do not have flowers. Ferns generally reproduce by producing spores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern is botanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike many plants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect to bright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organic manures and slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep them healthy and dust free",
        propagation  : "Spores or runners",
        image : `<img src="img/indoor.webp">`,

    },
];

var outdoor_array = [
    {
        id : 0,
        title : "Rose",
        description : "Ferns are plants that do not have flowers. Ferns generally reproduce by producinspores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern ibotanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike manplants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect tbright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organimanures and         slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep thehealthy        and dust free",
        propagation  : "Spores or runners",
        image : `<img src="img/indoor.webp">`,
            
    },
    {
        id : 1,
        title : "Petunias",
        description : "22Ferns are plants that do not have flowers. Ferns generally reproduce by producing spores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern is botanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike many plants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect to bright sunlight and temperature of 18 to 27oc.",
        soil : "Lemon Twist does best in well-draining soil. A good soil will contain lots of organic matter such as coco coir as well as perlite or vermiculite to help with drainage. Adding a handful of perlite to regular store-bought potting soil should do the trick!",
        water : "Lemon Twist needs 0.8 cups of water every 9 days when it doesn't get direct sunlight and is potted in a 5.0 pot",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "-",
        fertilizers  : "Lemon Twist should be repotted after it doubles in size or once a year, whichever comes first. Fresh potting soil has all the nutrients your plant needs, so as long as it’s refreshed yearly, you shouldn’t need to use fertilizer. Remember, plants get their energy from sunlight, not fertilizer!",
        humidity   : "Lemon Twist doesn’t require additional humidity. Plants absorb most water through their root system rather than their leaves, so the best way to provide humidity for your plants is through watering the soil.",
        propagation  : "-",
        image : `<img src="img/indoor.webp">`,
    },
    {
        id : 2,
        title : "Hostas",
        description : "33Ferns are plants that do not have flowers. Ferns generally reproduce by producing spores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern is botanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike many plants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect to bright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organic manures and slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep them healthy and dust free",
        propagation  : "Spores or runners",
        image : `<img src="img/indoor.webp">`,

    },
    {
        id : 3,
        title : "Snake Plant",
        description : "44Ferns are plants that do not have flowers. Ferns generally reproduce by producing spores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern is botanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike many plants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect to bright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organic manures and slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep them healthy and dust free",
        propagation  : "Spores or runners",
        image : `<img src="img/indoor.webp">`,

    },
    {
        id: 4,
        title : "Peace lilly",
        description : "55Ferns are plants that do not have flowers. Ferns generally reproduce by producing spores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern is botanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike many plants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect to bright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organic manures and slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep them healthy and dust free",
        propagation  : "Spores or runners",
        image : `<img src="img/indoor.webp">`,

    },
    {
        id: 5,
        title : "Marigold",
        description : "55Ferns are plants that do not have flowers. Ferns generally reproduce by producing spores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern is botanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike many plants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect to bright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organic manures and slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep them healthy and dust free",
        propagation  : "Spores or runners",
        image : `<img src="img/indoor.webp">`,

    },
    {
        id: 6,
        title : "Desert rose",
        description : "55Ferns are plants that do not have flowers. Ferns generally reproduce by producing spores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern is botanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike many plants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect to bright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organic manures and slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep them healthy and dust free",
        propagation  : "Spores or runners",
        image : `<img src="img/indoor.webp">`,

    },
];
plants.forEach(function addPlants(item){
    let option = document.createElement("option");
    option.text = item;
    //option.value = item;
    slct1.appendChild(option);
});

slct1.onchange = function(){
    slct2.innerHTML = "<option></option>";
    if(this.value == "Indoor Plants"){
        addtoSlct2(indoor);
    }
    if(this.value == "Outdoor Plants"){
        addtoSlct2(outdoor);
    }
}

function addtoSlct2(arr){
    arr.forEach(function (item){
        let option = document.createElement("option");
        option.text = item;
        //option.value = item;
        slct2.appendChild(option);
    });
}

slct2.onchange = function(){
    let index = this.value;
    for(let i=0;i<indoor_array.length;i++){
        if(this.value == indoor_array[i].title){
            //console.log(indoor_array[i]);
            addtoPara(indoor_array[i]);
        }
    }

    for(let i=0;i<outdoor_array.length;i++){
        if(this.value == outdoor_array[i].title){
            //console.log(indoor_array[i]);
            addtoPara(outdoor_array[i]);
        }
    }
}

function addtoPara(arr){
    
    //let P = document.createElement("p");
    let P = document.createElement("option");
        P.text += arr.image + arr.description + " " + arr.soil + " " + arr.water + " " + arr.sunlight + " " + arr.temperature + " " + arr.fertilizers + " " + arr.humidity + " " + arr.propagation ;
       // indoorP.value = arr.description;
        para.appendChild(P);
        console.log(para);

}
 


let time = document.getElementById("time");
let dateInput = document.getElementById("alarmDate");
let tInput = document.getElementById("alarmTime");
let btn = document.getElementById("setAlarm");
let contan = document.getElementById("alarms");
let interVal;
let maxValue = 3;
let cnt = 0;
let almTimesArray = [];
function timeChangeFunction() {
    let curr = new Date();
    let hrs = curr.getHours();
    let min = String(curr.getMinutes()).padStart(2, "0");
    let sec = String(curr.getSeconds()).padStart(2, "0");
    let period = "AM";
    if (hrs >= 12) {
        period = "PM";
        if (hrs > 12) {
            hrs -= 12;
        }
    }
    hrs = String(hrs).padStart(2, "0");
    time.textContent = `${hrs}:${min}:${sec} ${period}`;
}
function alarmSetFunction() {
    let now = new Date();
    let selectedDate = new Date(dateInput.value + "T" + tInput.value);
    if (selectedDate <= now) {
        alert(`Invalid time. Please select 
      a future date and time.`);
        return;
    }
    if (almTimesArray.includes(selectedDate.toString())) {
        alert(`You cannot set multiple 
      alarms for the same time.`);
        return;
    }
    if (cnt < maxValue) {
        let timeUntilAlarm = selectedDate - now;
        let alarmDiv = document.createElement("div");
        alarmDiv.classList.add("alarm");
        alarmDiv.innerHTML = `
            <span>
              ${selectedDate.toLocaleString()}
            </span>
            <button class="delete-alarm">
              Delete
            </button>
        `;
        alarmDiv
            .querySelector(".delete-alarm")
            .addEventListener("click", () => {
                alarmDiv.remove();
                cnt--;
                clearTimeout(interVal);
                const idx = almTimesArray.indexOf(selectedDate.toString());
                if (idx !== -1) {
                    almTimesArray.splice(idx, 1);
                }
            });
        interVal = setTimeout(() => {
            alert("Its time to water a plant!");
            alarmDiv.remove();
            cnt--;
            const alarmIndex = almTimesArray.indexOf(selectedDate.toString());
            if (alarmIndex !== -1) {
                almTimesArray.splice(alarmIndex, 1);
            }
        }, timeUntilAlarm);
        contan.appendChild(alarmDiv);
        cnt++;
        almTimesArray.push(selectedDate.toString());
    } else {
        alert("You can only set a maximum of 3 alarms.");
    }
}
function showAlarmFunction() {
    let alarms = contan.querySelectorAll(".alarm");
    alarms.forEach((alarm) => {
        let deleteButton = alarm.querySelector(".delete-alarm");
        deleteButton.addEventListener("click", () => {
            alarmDiv.remove();
            cnt--;
            clearTimeout(interVal);
            const alarmIndex = almTimesArray.indexOf(selectedDate.toString());
            if (alarmIndex !== -1) {
                almTimesArray.splice(alarmIndex, 1);
            }
        });
    });
}
showAlarmFunction();
setInterval(timeChangeFunction, 1000);
btn.addEventListener("click", alarmSetFunction);
timeChangeFunction();