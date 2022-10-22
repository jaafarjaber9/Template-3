//check if there's localstorage color option
let mainColors = localStorage.getItem("color-option");
if(mainColors !== null){

    document.documentElement.style.setProperty('--mainColor', mainColors);
    
    document.querySelectorAll(".colors-list li").forEach(function(element){

      element.classList.remove("active");
 
      if(element.dataset.color === mainColors){
       element.classList.add("active");
     }

    });
}

// random  background  option
let backgroundOption = true;

// variable to control interval 
let backgroundInterval;

//chech if there's localstorage random background item
let backgroundLocalItem = localStorage.getItem("background_option");

//check if random background localstorage is not empty
if(backgroundLocalItem !== null){

  if(backgroundLocalItem === 'true'){
  
    backgroundOption = true;
   
  }
  else
  {
    backgroundOption = false;
  }

  document.querySelectorAll(".random-backgrounds span").forEach(function(element){
    element.classList.remove("active");
});

 if(backgroundLocalItem === 'true'){
  document.querySelector(".random-backgrounds .yes").classList.add("active");
 }
 else{

  document.querySelector(".random-backgrounds .no").classList.add("active");
 }

}

// remove active class from all span 

//toggle spin class on icon
document.querySelector(".toggle-settings .icon").onclick = function(){
    this.classList.toggle("fa-spin");

//toggle setting box 

document.querySelector(".setting-box").classList.toggle("open");

}

    //switch colors

   const colorLi =  document.querySelectorAll(".colors-list li");
  
   // loop in all list items
   colorLi.forEach(function(li)
   {
       //click on every list items
       li.addEventListener("click", function(e){
               
        //set color in root
            document.documentElement.style.setProperty('--mainColor',e.target.dataset.color);

        
        //set color in localstorage
         localStorage.setItem("color-option",e.target.dataset.color);

        //            ul               li      //remover class active from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach(elemet =>{

          //remover class active from all childrens
        elemet.classList.remove("active");
       })
       //className = 'active'
       //or classList.add("active")
       //add class active on self
       e.target.classList.add("active");
       //or this.classlist.add("active")
     });
   });

    //switch random background-option
    const randomBackEl =  document.querySelectorAll(".random-backgrounds span");
    // loop in all span
    randomBackEl.forEach(function(span)
    {
        //click on every span
        span.addEventListener("click" , function(e){
         // handleActive(e);
            //remover class active from all childrens
          e.target.parentElement.querySelectorAll(".active").forEach(elemet =>{
             //remover class active from all childrens
            console.log(elemet)
           elemet.classList.remove("active");
          });
          //add class active on self
          e.target.classList.add("active"); 

          //or this.classlist.add("active")
          if(e.target.dataset.background === 'yes'){
            backgroundOption = true;
            randomize();
            localStorage.setItem("background_option",true);
          }
          else {   
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option",false);
            
          }
        });
      });

//select landing page //

var landingPage = document.querySelector(".landing-page");

//get array of image//

let imgsArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];


// setInterval(function, milliseconds, param1, param2, ...)

//funtion to random img
 function randomize(){
  if(backgroundOption === true){
 backgroundInterval = setInterval(
   function(){
        //get random number // 
        let randomNumber = Math.floor(Math.random() * imgsArray.length);

         /* change background image */
      //landingPage.style.backgroundImage = 'url("imgs/' +imgsArray[randomNumber]+ '")';
        landingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
    },2000);
  } 
}
randomize();

// select skills selector

let ourskills = document.querySelector(".skills");

window.onscroll = function(){
// skills offset top
let skillsoffsettop = ourskills.offsetTop;
//skills outer height
let outerSkills = ourskills.offsetHeight;
//window height
let windowheight = window.innerHeight;
//window scroll top
let windowscrolltop = window.pageYOffset;

console.log(windowheight );
if(windowscrolltop > (skillsoffsettop )){

 
  
 let allSkills = document.querySelectorAll(".skills .skill-box .skill-progress span");
 
  allSkills.forEach(function(skill){

   skill.style.width = skill.dataset.progress;
  
  })
 
}
else{
  let allSkills = document.querySelectorAll(".skills .skill-box .skill-progress span");
 
  allSkills.forEach(function(skill){

   skill.style.width = 0;

});

}
}


//create popup with image
let ourIamge = document.querySelectorAll(".gallery img");
ourIamge.forEach(function(img){

  img.addEventListener("click",function(e){

    //create overlay element
    let overlay = document.createElement('div');
    //add class to overlay div
    overlay.className = 'popup-overlay';
    //classList.add("active")
    //className = 'active';
    //append overlay to the body
    document.body.appendChild(overlay);

    //create popup box
    let popupbox = document.createElement("div");

    popupbox.className='popup-box';

         // img alt name 
            if(img.alt !== null){
              //create heading
            let imgHeading = document.createElement("h3");
            //create text for heading
            let imgText = document.createTextNode(img.alt);
            //apend text to the heading
            imgHeading.appendChild(imgText);
            // apend the heading to popup box
            popupbox.appendChild(imgHeading);
          }

    //create image popup

    let popupImage = document.createElement('img');
 
    //set image source

    popupImage.src = img.src;
    
    //add image to popup box 
    popupbox.appendChild(popupImage);

    //append the popupbox to the body

    document.body.appendChild(popupbox);
  

    //create the close span
    let closebutton = document.createElement("span");
    //create close button text
    let closebuttontext = document.createTextNode("X");
    //apend text to close button
    closebutton.appendChild(closebuttontext);
    // add class to close button
    closebutton.className='close-button';
    
    //add close button to the popup box

    popupbox.appendChild(closebutton);

  })
})

//close popup

document.addEventListener('click', e => {

  if (e.target.className === 'close-button'){

  e.target.parentElement.remove();

   // or  document.querySelector(".popup-box").remove();

    document.querySelector(".popup-overlay").remove();

  }
});


/* select all bullets */

const allbullets = document.querySelectorAll(".nav-bullets .bullet");

/* select all links */


const allinks = document.querySelectorAll(".list-items a");

//FUNCTION TO MAKE IT SMOOTH
function makebehavior(element){

  element.forEach(function(ele){
    ele.addEventListener('click', function(e){
   
       
      e.preventDefault();
                     // .about-us .gallery .timeline.....
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior:'smooth'
      });
      
    });
  
  });
}
makebehavior(allinks);
makebehavior(allbullets);



function handleActive(ev){

  ev.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active");
  });

  ev.target.classList.add("active");
}

