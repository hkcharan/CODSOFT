let item = document.getElementsByClassName("item");
let images = document.querySelector('.images');
let container = document.querySelector('.container');
let name = document.querySelector('.name');
let text = document.querySelector('.text');
let icon = document.querySelector('.icon');
let ab = document.querySelector('.ab');
let currentValue = 1;

icon.addEventListener('click', ()=>{
    ab.classList.toggle('showdata');
});


function activeItem(){
    for(l of item){
        l.classList.remove("active");
    }

    event.target.classList.add("active");
    currentValue = event.target.value;

    if(currentValue === 1){
        images.style.background = "url(images/1.png)" ;
        images.style.backgroundSize = "cover" ;
        container.style.backgroundColor = "#0C0C0C"
        name.innerText = "Leopard"
        text.innerText = "This is one cat that doesn't need any help getting down from a tree. The leopard is so comfortable up there that it often stalks prey and even hauls its kills up into the branches."
    }

    else if(currentValue === 2){
        images.style.background = "url(images/2.png)" ;
        images.style.backgroundSize = "cover" ;
        container.style.backgroundColor = "#040404"
        name.innerText = "Lion"
        text.innerText = "For all of their roaring, growling, and ferociousness, lions are family animals and truly social in their own communities. They usually live in groups of 15 or more animals called prides."
    }

    else if(currentValue === 3){
        images.style.background = "url(images/3.png)" ;
        images.style.backgroundSize = "cover" ;
        container.style.backgroundColor = "#0A0A0A"
        name.innerText = "Tiger"
        text.innerText = "Easily recognized by its coat of reddish-orange with dark stripes, the tiger is the largest wild cat in the world. The big cat's tail is three feet long. On average the big cat weighs 450 pounds."
    }

    else if(currentValue === 4){
        images.style.background = "url(images/4.png)" ;
        images.style.backgroundSize = "cover" ;
        container.style.backgroundColor = "#030303"
        name.innerText = "Snow leopard"
        text.innerText = "A snow leopard peers down from a craggy rock ledge high in the peaks of Mongolia, a country in Asia.They can mew, growl and puff but they can't roar.They have powerful legs and can jump as far as 50 feet."
    }

    else if(currentValue === 5){
        images.style.background = "url(images/5.png)" ;
        images.style.backgroundSize = "cover" ;
        container.style.backgroundColor = "#030303"
        name.innerText = "Jaguar"
        text.innerText = "Jaguars are the largest of South America's big cats and the third largest cats in the world. Their fur is usually tan or orange with black spots.Some jaguars are so dark they don't seem to have spots."
    }
};

    