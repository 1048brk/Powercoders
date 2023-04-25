// find ul in DOM to add list item to it
// check for click event on button
// call function to add new lsit item
// todo: check for duplicates before adding new favourite
//

const list = document.querySelector("ul");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const body = document.body

// btn.onclick = addFavourite;
btn.addEventListener("click", addFavourite);

function addFavourite() {
    if (input.value.length > 0) {
        if (isDuplicate()) {
            //do not add, give message instead
            console.log("Duplicate was found");
            //create element p
            let msg = document.createElement("p");
            //find the place where to add it
            body.appendChild(msg);
            //use some method, like innerHTML, to add the message
            msg.textContent = "Duplicates will not be added to the list."
        } else {
            // create element li, 
            let li = document.createElement("li");
            // add input value to it
            li.textContent = input.value;
            // add list item to our list in the DOM
            list.appendChild(li);
        }
    } else {
        console.log("the value is empty, why?")
    }
}



function isDuplicate() {
    let result = false;
    // loop through list items and check is equal to our input value
    // find the list items, use for each to find value of each item

    list.querySelectorAll("li").forEach(function(item){
        if (item.textContent.toLocaleLowerCase().trim() === input.value.toLocaleLowerCase().trim()) {
            result = true;
        }
    });



    return result;
}