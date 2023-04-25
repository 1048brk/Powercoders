
// Create an array/object for my classmates
const classMates = [

    {
        fistName: "Anastasiia",
        lastName: "S.",
        fullName: function () {
            return this.fistName + " " + this.lastName;
        },
        age: 26,
        eyeColor: "Brown",
        hobbies: ["Hiking", "Reading", "Coding"],
        photoPath: "img/anastasiia.jpg",
        canton: "Valais",
    },

    {
        fistName: "Medhane",
        lastName: "H.",
        fullName: function () {
            return this.fistName + " " + this.lastName;
        },
        age: 26,
        eyeColor: "Black",
        hobbies: ["Basketball", "Coding", "Video Games"],
        photoPath: "img/medhane.jpg",
        canton: "Lausanne",
    },
    {
        fistName: "Engin",
        lastName: "B.",
        fullName: function () {
            return this.fistName + " " + this.lastName;
        },
        age: 39,
        eyeColor: "Green",
        hobbies: ["Sport", "Reading", "Video Games"],
        photoPath: "img/engin.jpg",
        canton: "Geneva",
    },


    {
        fistName: "Hüseyin",
        lastName: "S.",
        fullName: function () {
            return this.fistName + " " + this.lastName;
        },
        age: 28,
        eyeColor: "Brown",
        hobbies: ["Music", "Football", "Video Game"],
        photoPath: "img/huseyin.jpg",
        canton: "Aurau",
    },

    {
        fistName: "Melek",
        lastName: "A.",
        fullName: function () {
            return this.fistName + " " + this.lastName;
        },
        age: 33,
        eyeColor: "Brown",
        hobbies: ["Hiking", "Reading", "Video game"],
        photoPath: "img/melek.jpg",
        canton: "Aurau",
    },

    {
        fistName: "Caner",
        lastName: "E.",
        fullName: function () {
            return this.fistName + " " + this.lastName;
        },
        age: 29,
        eyeColor: "Braun",
        hobbies: ["Hiking", "Football", "Video game"],
        photoPath: "img/caner.jpg",
        canton: "Geneva",
    },

    {
        fistName: "Hamdi",
        lastName: "Y.",
        fullName: function () {
            return this.fistName + " " + this.lastName;
        },
        age: 30,
        eyeColor: "Braun",
        hobbies: ["Hiking", "Reading", "Boxing"],
        photoPath: "img/hamdi.jpg",
        canton: "Geneva",
    },

    {
        fistName: "Ivan",
        lastName: "F.",
        fullName: function () {
            return this.fistName + " " + this.lastName;
        },
        age: 25,
        eyeColor: "braun",
        hobbies: ["Hiking", "Boxing", "Yoga"],
        photoPath: "img/ivan.jpg",
        canton: "Bern",
    },

    {
        fistName: "Omer",
        lastName: "O.",
        fullName: function () {
            return this.fistName + " " + this.lastName;
        },
        age: 33,
        eyeColor: "braun",
        hobbies: ["Hiking", "Boxing", "Yoga"],
        photoPath: "img/omer.jpg",
        canton: "Valais",
    },

    {
        fistName: "Denys",
        lastName: "B.",
        fullName: function () {
            return this.fistName + " " + this.lastName;
        },
        age: 22,
        eyeColor: "braun",
        hobbies: ["Hiking", "Judo", "Video Games"],
        photoPath: "img/denys.jpg",
        canton: "Aurau",
    },
];


const article = document.querySelector("article");
const cart_all = document.createElement("ul");
const head = document.querySelector("h1");

article.appendChild(cart_all);

classMates.forEach(function (friend) {

    updatePage(friend);
})

function updatePage(friend){
    const li = document.createElement("li");
    cart_all.appendChild(li);

    let img = document.createElement("img");
    img.setAttribute("src", friend.photoPath);
    // img.setAttribute("alt", product.p_desc);
    li.appendChild(img);


    let fullName = document.createElement("h4");
    fullName.textContent = friend.fullName();
    li.appendChild(fullName);

    let canton = document.createElement("h2");
    canton.textContent = friend.canton;
    li.appendChild(canton);

    let activity = document.createElement("p");
    activity.textContent = friend.hobbies.join(",");
    li.appendChild(activity);
}


head.addEventListener("click",function(){
    classMates.forEach(function (friend) {

        updatePage(friend);
    });
})


function filterByCanton(canton) {
    const filteredClassMates = classMates.filter(function (friend) {
        return friend.canton === canton;
    });

    // Clear the current list
    cart_all.innerHTML = "";

    // Add the filtered list to the page
        filteredClassMates.forEach(function (friend) {
        updatePage(friend);
    });
}





// Event listeners

const btnGeneva = document.getElementById("btn-geneva");
btnGeneva.addEventListener("click", function () {
    filterByCanton("Geneva");
});



const btnLausanne = document.getElementById("btn-lausanne");
btnLausanne.addEventListener("click", function () {
    filterByCanton("Lausanne");
});

const btnAurau = document.getElementById("btn-aurau");
btnAurau.addEventListener("click", function () {
    filterByCanton("Aurau");
});

const btnValais = document.getElementById("btn-valais");
btnValais.addEventListener("click", function () {
    filterByCanton("Valais");
});




