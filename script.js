(function(){
        "use strict";
        // get the form element
        const detailsForm = document.querySelector("#destination_details_form");
        //Adding the event Listener
detailsForm.addEventListener('submit', handleSubmit);
// Function for handling the submit data and clearing the form value after submitting.
function handleSubmit(event){
    //Prevent from reloading.
    event.preventDefault();
    // Getting the input values
    const destName = event.target.elements["name"].value;
    const destLocation = event.target.elements["location"].value;
    const destPhoto = event.target.elements["photo"].value;
    const destDescription = event.target.elements["description"].value;

    for(let i=0; i<detailsForm.length; i++){
        detailsForm.elements[i].value="";
    }
    //Create a destination card
    const destCard = createDestinationCard(destName, destLocation, destPhoto, destDescription);

    // Change the heading if you are adding the data to cart

    const wishlistContainer = document.getElementById('destinations_container');
    
    if(wishlistContainer.children.length ===0){
        document.getElementById('title').innerHTML="My WishList";
    }


    // Add card to the container
    document.querySelector("#destinations_container").appendChild(destCard)
}

// Create a div tag/ cart for the customer

function createDestinationCard(name, location, photoURL, description){
    const card = document.createElement("div");
    card.className='card';

    const img = document.createElement('img');
    img.setAttribute('alt', name);

    const constantPhotoUrl = "images/signpost.jpg";

    if(photoURL.length === 0){
        img.setAttribute("src", constantPhotoUrl);
    }
    else{
        img.setAttribute("src",photoURL);
    }

    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className="card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);


    const cardLocation = document.createElement("h4");
    cardLocation.innerText = location;
    cardBody.appendChild(cardLocation);        

    if(description.length!==0){
        const cardText = document.createElement("p");
        cardText.className="card-text";
        cardText.innerText=description;
        cardBody.appendChild(cardText);
    }

    // Create a remove button 

    const removeButton = document.createElement('button');
        removeButton.innerText="Remove";

        removeButton.addEventListener('click', removeDestination);
        cardBody.appendChild(removeButton);

        card.appendChild(cardBody);

        return card;
}
    // To remove the card
function removeDestination(event){
    const card = event.target.parentElement.parentElement;
    card.remove();
}

})();

