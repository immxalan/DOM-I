const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// logo.setAttribute('src', siteContent["nav"]["img-src"])
//Nav
const navA = document.querySelectorAll("a");
navA[0].textContent = "Services";
navA[1].textContent = "Product";
navA[2].textContent = "Vision";
navA[3].textContent = "Features";
navA[4].textContent = "About";
navA[5].textContent = "Contact";

let nav = document.querySelector("nav");
navHeader = document.createElement("h4");
navFooter = document.createElement("h5")
nav.prepend(navHeader);
nav.appendChild(navFooter);

let navHSelector = document.querySelector("nav h4");
navHSelector.textContent = "Navigation";

let navHFooter = document.querySelector("nav h5");
navHFooter.textContent = "Company Motto Filler"

navA.forEach(element => element.style.color = "green")

const logoImg = document.querySelector("#logo-img");
logoImg.src = "img/logo.png"
let logo = document.getElementById("logo-img");

//Get Started
let headerSelector = document.querySelector(".cta-text h1");
headerSelector.textContent = "DOM Is Awesome";
let buttonSelector = document.querySelector(".cta-text button");
buttonSelector.textContent = "Get Started";
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = "img/header-img.png";
//Main Content
let featuresH4Selector = document.querySelector(".top-content .text-content h4")
featuresH4Selector.textContent = "Features"
let featuresPSelector = document.querySelector(".top-content .text-content p")
featuresPSelector.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let aboutH4Selector = document.querySelectorAll(".top-content .text-content h4")[1]
aboutH4Selector.textContent = "About"
let aboutPSelector = document.querySelectorAll(".top-content .text-content p")[1]
aboutPSelector.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let middleImgSelector = document.querySelector(".middle-img")
middleImgSelector.src = "img/mid-page-accent.jpg"

let servicesH4Selector = document.querySelector(".bottom-content .text-content h4")
servicesH4Selector.textContent = "Services"
let servicesPSelector = document.querySelector(".bottom-content .text-content p")
servicesPSelector.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let productH4Selector = document.querySelectorAll(".bottom-content .text-content h4")[1]
productH4Selector.textContent = "Product"
let productPSelector = document.querySelectorAll(".bottom-content .text-content p")[1]
productPSelector.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let visionH4Selector = document.querySelectorAll(".bottom-content .text-content h4")[2]
visionH4Selector.textContent = "Vision"
let visionPSelector = document.querySelectorAll(".bottom-content .text-content p")[2]
visionPSelector.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


//Contact
let contactH4Selector = document.querySelector(".contact h4")
contactH4Selector.textContent = "Contact"

let p1contactSelector = document.querySelector(".contact p")
p1contactSelector.innerHTML = "123 Way 456 Street" + "<br />" + "Somewhere, USA"
// linebreak = document.createElement("br");
// p1contactSelector.appendChild(linebreak);

// breakContactSelector = document.querySelector(".contact BR");
// breakContactSelector.textContent += "Somewhere, USA";

let p2contactSelector = document.querySelectorAll(".contact p")[1]
p2contactSelector.textContent = "1 (888)888-8888"

let p3contactSelector = document.querySelectorAll(".contact p")[2]
p3contactSelector.textContent = "sales@greatidea.io"
//Footer
let footerPSelector = document.querySelector("footer p")
footerPSelector.textContent = "Copyright Great Idea! 2018"