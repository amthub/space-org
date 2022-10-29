

const content = document.querySelector(".content")
const body = document.body
const li = document.querySelectorAll(".li");
const amit = document.querySelector(".amit");
const img = document.querySelector(".img");
const month = document.querySelector(".month")
const km = document.querySelector(".km")
const arr = [
    {
        planet:"MOON",
        img: "moon.jpg",
        time: "8 MONTH",
        distance: "40 MIL. KM",
    },
    {
       planet: "MARS",
        img: "mars1.png",
        time: "12 MONTH",
        distance: "100 MIL. KM",
    },
    {
       planet: "JUPITOR",
        img: "jupitor.jpg",
        time: "4 MONTH",
        distance: "10 MIL. KM",
    },
    {
       planet: "EUROPA",
        img: "europa.jfif",
        time: "18 MONTH",
        distance: "400 MIL. KM",
    },
];
Array.from(li).forEach(li => {
    li.addEventListener('click', (e) => {
        console.log("AMIT")
        amit.innerText = arr[e.target.id].planet;
        img.src = arr[e.target.id].img;
        month.innerText = arr[e.target.id].time;
        km.innerText = arr[e.target.id].distance;
    })
})


// crew 
const circle = document.querySelectorAll(".circle");
const mem_pics = document.querySelector(".mem-pics");
const mem_name = document.querySelector(".mem_name");
const work = document.querySelector(".work");
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const crew = [
    {
        name:"DR. HARISSON SMITH",
        img:"second pilot.jpg",
        work:"COMMANDER"
        
    },
    {
        name:"ANOUSHEH ANSARI",
        img:"ansari edit.png",
        work:"FLIGHT ENGINEER"
    },
    {
        name:"STEVE KOERNOR",
        img:"commander.jfif",
        work:"FLIGHT PILOT"
    },
    {
        name:"EILEEN MARIN",
        img:"pilot.jpg",
        work:"SECOND PILOT"
    },
]
Array.from(circle).forEach(circle => {
    circle.addEventListener('click', (e) => {
        mem_name.innerText = crew[e.target.id -4].name;
        mem_pics.src = crew[e.target.id-4].img;
        work.innerText = crew[e.target.id-4].work;
        circle.style.backgroundColor = "white";
       
        if(e.target.id==4)
        {
            five.style.backgroundColor ="gray";
            six.style.backgroundColor ="gray";
            seven.style.backgroundColor ="gray";
        }
        if(e.target.id==5)
        {
            four.style.backgroundColor ="gray";
            six.style.backgroundColor ="gray";
            seven.style.backgroundColor ="gray";
        }
        if(e.target.id==6)
        {
            five.style.backgroundColor ="gray";
            four.style.backgroundColor ="gray";
            seven.style.backgroundColor ="gray";
        }
        if(e.target.id==7)
        {
            five.style.backgroundColor ="gray";
            six.style.backgroundColor ="gray";
            four.style.backgroundColor ="gray";
        }
    })
})


// technology
const no = document.querySelectorAll(".no");
const v_name = document.querySelector(".vehicle-name");
const vehicle_img = document.querySelector(".vehicle_image");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

let vehicle = [
    {
        vname:"LAUNCH VEHICLE",
        img: "vehicle.jfif"
    },
    {
        vname:"SATELLITE",
        img: "satellite.jpg"
    },
    {
        vname:"SPACE SHIP",
        img: "spaceship.jfif"
    },
];

Array.from(no).forEach(no => {
    no.addEventListener('click', (e) => {
        one.style.backgroundColor = "transparent";
        one.firstChild.style.color = "white";
        two.style.backgroundColor = "transparent";
        two.firstChild.style.color = "white";
        three.style.backgroundColor = "transparent";
        three.firstChild.style.color = "white";

        v_name.innerText = vehicle[e.target.id-8].vname;
        vehicle_img.src = vehicle[e.target.id-8].img;
        no.firstChild.style.color = "black";
        no.style.backgroundColor = "white";
        
    })
})
