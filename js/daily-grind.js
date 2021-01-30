/*


Here is the info we'll need to change for each coffee
pic - Image src
alt - Alt tag
day -Day of week
name - Name of coffee
color - Color
desc - Description


*/




let myDate = new Date();
let myDay = myDate.getDay();
let today = ""; 
let coffee = "";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


if(urlParams.has('day')) {
    myDay = urlParams.get('day');
}
else {
    myDay = myDate.getDay();
}

myDay = parseInt(myDay);

function coffeeTemplate(coffee){
    let myReturn = ""; 

    myReturn += `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee"/>
    <strong class="feature">${coffee.day}'s Coffee Special:</strong><br> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>${coffee.desc}
</p> `;
    
    return myReturn;

}






switch (myDay) {

    case 0:
        today = "Sunday";
        coffee = { color:"Purple",
            name:"Brew",
            pic:"images/cold-brew.jpg",
            alt: "A picture of cold brew",
            day:"Sunday",
            desc:`purple `
    
        };
    break;



    case 1:
    today = "Monday";
    coffee = { 
        color: "pink",
        name:"Bubble Tea",
        pic:"images/bubble-tea.jpg",
        alt: "A picture of a Drip coffee",
        day:"Wednesday",
        desc:`brown`

    };
break;

    case 2:
        today = "Tuesday";
        coffee = {
            color: "brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt: "A picture of a Drip coffee",
            day:"Wednesday",
            desc:`brown`

        };
    break;


    case 3:
        today = "Wednesday";
        coffee = { 
            color:"Yellow",
            name:"Caramel",
            pic:"images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day:"Wednesday",
            desc:`yellow`
    
        };
    break;

    case 4:
    today = "Thursday";
    coffee = { color:"Orange",
        name:"Pumpkin",
        pic:"images/pumpkin-spice-latte.jpg",
        alt: "A picture of pumpkin spice latte",
        day:"Thursday",
        desc:`orange `

    };
break;

        case 5:
            today = "Friday";
            coffee = { color:"Tan",
                name:"Mocha",
                pic:"images/mocha.jpg",
                alt: "A picture of a mocha",
                day:"Friday",
                desc:`tan`

            };
        break;


        case 6:
    today = "Saturday";
    coffee = { color:"Green",
        name:"Bucks",
        pic:"images/frappacino.jpg",
        alt: "A picture of a frappacino",
        day:"Saturday",
        desc:`green `

    };
break;

}
console.log(coffee);
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
document.getElementsByClassName("feature")[0].style.color = coffee.color;
document.getElementsByClassName("feature")[1].style.color = coffee.color;
document.body.style.backgroundColor = coffee.color;
//alert(today); 