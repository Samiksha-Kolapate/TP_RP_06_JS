let indoor = ["Golden fern plant","Lemon twisted netted","Money plant","Fittonia pink plant","Aloe pepe"];

var indoor_array = [
    {
        id : 0,
        title : "Golden fern plant",
        description : "Ferns are plants that do not have flowers. Ferns generally reproduce by producinspores. Similar to flowering plants, ferns have roots, stems and leaves. Golden fern or pivla fern ibotanically called nephrolepis exaltata. Ferns are the unique plants propagated by spores unlike manplants. Golden fern is plant parents favorite due to it's golden fronds. 5 to 6 hours of indirect tbright sunlight and temperature of 18 to 27oc.",
        soil : "Soils with neutral pH, rich in organic matter and well drained nature",
        water : "Only water your fern plant, when the top layers of soil feels dry to touch",
        sunlight  : "5 to 6 hours of indirect to bright sunlight   .",
        temperature : "18 to 27`<sup>0</sup>`C",
        fertilizers  : "Use any well balanced liquid fertilizers once in 3 months, or add bulky organimanures and         slow realising fertilizers while repotting.",
        humidity   : "50 to 60 percent humidity is ideal, misting your plants once in a while will keep thehealthy        and dust free",
        propagation  : "Spores or runners",
        image : `<img src="img/indoor2.webp" width="100px" height="100px">`,
        
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
        image : `<img src="img/indoor2.webp" width="100px" height="100px">`,


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
        image : `<img src="img/indoor2.webp" width="100px" height="100px">`,


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
        image : `<img src="img/indoor2.webp" width="100px" height="100px">`,
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
        image : `<img src="img/indoor2.webp" width="100px" height="100px">`,

    },
    
];

let show_plantsList = document.getElementById("show_plantsList");
let indoor_array_title = document.getElementById("indoor_array_title");

function showPlants(indoor_array){
    for(let i=0;i<indoor_array.length;i++){
        show_plantsList.innerHTML += `<li><a href=indoor_plants.html target="_blank" > ${indoor_array[i].image}  ${indoor_array[i].title}  </a></li>`;
    }
}

showPlants(indoor_array);



function show_each_plant(item){
   // indoor_array_title = `<h1>${arr.title}</h1>`;

   indoor_array_title.innerHTML += item.title;

    /* let title = document.createElement("p");
    title.text = item;
    title.value = item;
    indoor_array_title.appendChild(title);
    console.log(indoor_array_title);
    console.log(title); */
}
