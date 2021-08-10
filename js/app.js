"use strict"
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
// start nav functionality

const navList = document.getElementById("navbar__list");
const div = document.createElement("div");
const arrList = ["How It Works" , "Categories" , "Playlist" ," About"];
const section = document.querySelectorAll("section");
const arrSection = ["section1" , "section2" , "section3" , "section4"]
const menuLink = document.querySelector(".links");


function addNav(){
     for(let i=0; i<4 ; i++){
        let anchorList = document.createElement("a");
        let createList = document.createElement("li");
        anchorList.textContent = arrList[i];
        anchorList.setAttribute("data-link" , arrSection[i]);
        createList.appendChild(anchorList);
        createList.setAttribute("class" , "menu__link");
        div.setAttribute("class" , "container");
        div.appendChild(createList);
    }


    if(window.matchMedia("(max-width:600px)").matches) {
        menuLink.appendChild(div);

        const miniLists = menuLink.children[1].children;

        // highlight the nav links whenever it gets clicked!
        function miniActive (){ 
            for(var x = 0 ; x < miniLists.length ; x++) { 
                miniLists[x].addEventListener("click" , function () {
                    for(let y = 0 ; y < miniLists.length ; y++){
                        miniLists[y].classList.remove("active");
                        this.classList.add("active");
                    }
                });
            }

    };

    miniActive();

        //scroll to the right section whenever we click on a nav link!
        function scrollToMiniSection() {
            for(let a = 0 ; a< 4 ; a++){
                miniLists[a].firstElementChild.addEventListener("click" , function (){
                    let access = document.getElementById(miniLists[a].firstElementChild.getAttribute("data-link"));
                    access.scrollIntoView({block: 'end', behavior: 'smooth'});
                });
    
            }
        }
    scrollToMiniSection();



    }else{
        navList.appendChild(div);

        const lists = navList.children[0].children;

        // highlight the nav links whenever it gets clicked!
        function addActive (){ 
            for(var x = 0 ; x < lists.length ; x++) { 
                lists[x].addEventListener("click" , function () {
                    for(let y = 0 ; y < lists.length ; y++){
                        lists[y].classList.remove("active");
                        this.classList.add("active");
                    }
                });
            }

        };

    addActive();
        
    //scroll to the right section whenever we click on a nav link!
    function scrollToSection() {
        for(let a = 0 ; a< 4 ; a++){
            let access = document.getElementById(lists[a].firstElementChild.getAttribute("data-link"));
                lists[a].firstElementChild.addEventListener("click" , function (){
                access.scrollIntoView({block: 'end', behavior: 'smooth'});
            });
                    
        

        }



            window.addEventListener("scroll", () => {

                if(window.scrollY >= 600 && window.scrollY < 1120) {
                        lists[0].classList.add("active");
                    }else{
                        lists[0].classList.remove("active");
                    };

                    if(window.scrollY >= 1120 && window.scrollY < 1732) {
                        lists[1].classList.add("active");
                    }else{
                        lists[1].classList.remove("active");
                    };
                    
                    if(window.scrollY >= 1732 && window.scrollY < 2333) {
                        lists[2].classList.add("active");
                    }else{
                        lists[2].classList.remove("active");
                    };

                    if(window.scrollY >= 2333 && window.scrollY < 10000) {
                        lists[3].classList.add("active");
                    }else{
                        lists[3].classList.remove("active");
                    };
            });
        };


        scrollToSection();

    };



};

document.body.onload = addNav;

// End nav Functionalities



// Start Form Functionalities

const myForm = document.querySelector("form");
const signupButton = document.querySelector(".show");
const closeIcon = document.querySelector(".close");
let formClass = myForm.classList;

function showForm() {
    formClass.remove("remove");
    formClass.add("form");
}

function hideForm() {
    formClass.add("remove");
}

signupButton.addEventListener("click" , showForm);
closeIcon.addEventListener("click" , hideForm);

// End Form Functionalities

// Start Top Scroll Functionalities
const Top = document.querySelector(".top");
let topClass = Top.classList;

function scrollShow() { 
    if(window.scrollY > 700) {
        topClass.remove("remove");
    }else {
        topClass.add("remove");
    }
}

function goUp() {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
}

window.addEventListener("scroll" , scrollShow);
Top.addEventListener("click" , goUp);

// End Top Scroll Functionalities


// start adding and removing the menu bar

const menu = document.querySelector(".menu");
const linksContainer = document.querySelector(".links");
const linksContainerClasses = linksContainer.classList;
const redClose = document.querySelector(".links img");

function showMenu() {
    linksContainerClasses.remove("remove"); 
}

function hideMenu() {
    linksContainerClasses.add("remove"); 
}

menu.addEventListener("click" , showMenu);
redClose.addEventListener("click" , hideMenu);

// end adding and removing the menu bar






