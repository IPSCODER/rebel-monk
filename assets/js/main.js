function Hamburger(x) {
    x.classList.toggle("change");
    var ham = document.querySelector(".drawer");
    ham.classList.toggle('drawerDown')
    var overflow = document.querySelector("body");
    overflow.classList.toggle('overflow')
    var hamNav = document.querySelector(".userLogo svg");
    hamNav.classList.toggle('hamstroke')
    var hamNav2 = document.querySelector(".cartLogo svg");
    hamNav2.classList.toggle('hamstroke')
    var hamNav3 = document.querySelector(".logo svg");
    hamNav3.classList.toggle('hamfill')
    var hamNav4 = document.querySelector(".hamburger");
    hamNav4.classList.toggle('moonLine')
  }
  function ripple(){
    var ripple = document.querySelector(".jquery-ripples");
    ripple.classList.toggle('ri-pple')
  }

  $(function() {
    $("input[name='numonly']").on('input', function(e) {
      $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
  });

  $("main").ripples({
    resolution: 1000,
    perturbance: 0.4,
  });
  $("footer").ripples({
    resolution: 1000,
    perturbance: 0.4,
  });

// accordion start



// for accordion


let accHeading = document.querySelectorAll(".accordi-on");
let accPanel = document.querySelectorAll(".accordi-on-panel");

for (let i = 0; i < accHeading.length; i++) {
    // Execute whenever an accordion is clicked 
    accHeading[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
           hidePanels();     // Hide All open Panels 
        } else {
           showPanel(this);  // Show the panel
        } 
    };
}

// Function to Show a Panel
function showPanel(elem) {
  hidePanels();
  elem.classList.add("activeted");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
}

// Function to Hide all shown Panels
function hidePanels() {
  for (let i = 0; i < accPanel.length; i++) {
      accPanel[i].style.maxHeight = null;
      accHeading[i].classList.remove("activeted");
  }
}

// accordion end

// tabcontent start

function tab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" act", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " act";
  } 


// tabcontent end




const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }   
});

let theme = localStorage.getItem('data-theme');
const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
    localStorage.setItem("data-theme", "dark") // save theme to local storage
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light") // set theme light
    localStorage.setItem("data-theme", 'light') // save theme to local storage
}

// magnetic button


var magnetss = document.querySelectorAll('.bt')
  
var strengths = 50
magnetss.forEach( (magneti) => {
  magneti.addEventListener('mousemove', moveMagnet );
  magneti.addEventListener('mouseout', function(event) {
    TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});

function moveMagnet(event) {
  var magnetButtons = event.currentTarget
  var bounding = magnetButtons.getBoundingClientRect()
  TweenMax.to( magnetButtons, 1, {
    x: ((( event.clientX - bounding.left)/magnetButtons.offsetWidth) - 0.5) * strengths,
    y: ((( event.clientY - bounding.top)/magnetButtons.offsetHeight) - 0.5) * strengths,
    ease: Power4.easeOut
  })
}


// magnetic button

