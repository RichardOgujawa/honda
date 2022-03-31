/*MOBILE VIEW MENU SCROLL*/
function menuScrollFunc(){
const menuScroll = document.querySelector('.scroll-ul');

menuScroll.classList.toggle('scroll-active');

}


/*CAROUSEL*/
const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const interval = 3000;

let slides = document.querySelectorAll('.slide'); 
let index = 1; 
let slideId;

//Creating clones
//FirsClone grabs the first image and clones it, lastClone, grabs the lastimage and clones it.
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length-1].cloneNode(true);

//settting id's for the clones
firstClone.id = "first-clone"; 
lastClone.id = "last-clone"; 

//This is the first step to creating the infinite scroll effect, as it appends the first image to the end, and prepends the last image to the start. 
slide.append(firstClone);
slide.prepend(lastClone);

//This finds the width of the image (client)
const slideWidth = slides[index].clientWidth;

//This pushes the slides back so that the first slide is actually first
//the backquotes are called Template literals or template strings, it's what allows you to use variables in the code. 
slide.style.transform = `translateX(${-slideWidth * index}px)`;

//These are called arrow functions
//Here we're setting the variable to be a function, and that functino is the setInterval function, which takes in two things, 1. a set of instructions to execute, and 2. how long it should wait before executing it again.
const startSlide = ()=> {
    slideId = setInterval(() => {
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '0.7s';
    }, interval);
};


//this event listeners listens for the event of the transition ending, and it runs the set of instructions in the curly brackets. 
//The code tells it to check if the ids of the current slide being displayed is the same as the first clone, if so stop the animation.
slide.addEventListener('transitionend', ()=>{
    slides = document.querySelectorAll('.slide'); 
    if(slides[index].id === firstClone.id){
        //If you comment out this next line of code, you'll see how the effect really works, it basically just moves back to the first image, but becasue transition is set to none we don't see it
        slide.style.transition = 'none';
        //this resets the index value to one.
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

startSlide();