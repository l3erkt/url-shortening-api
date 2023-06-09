// 1. Grab input value from form input ex:  http://www.google.com
// 2. create a HTML injection to append towards the page
// 3. implement html injection towards linkArr to display multiple links
// 4. grab obj's from linkArr to display
const formContainer = document.querySelector(".link-form");
const infoContainer = document.querySelector(".info-container");
const shortLinkBtn = document.getElementById("link-btn");
const linkInput = document.getElementById("url");
const linkArr = [];

storeLinks = () => {
  const span = document.createElement("span");
  span.classList.add("error-msg");
  span.innerText = "Please add a link";

  if (linkInput.value === "") {
    linkInput.classList.add("error-bar");
    formContainer.append(span);
  } else {
    const obj = {
      orginalLink: linkInput.value,
      newLink: "Working on it !!",
    };
    linkArr.push(obj);
  }
};

injectHTML = () => {
  storeLinks();
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const button = document.createElement("button");

  div.classList.add("display-link");
  div2.classList.add("d-link-row-2");
  p.classList.add("orginal-link");
  p2.classList.add("new-link");
  button.classList.add("copy-btn");

  div.appendChild(p);
  div.appendChild(div2);
  div2.appendChild(p2);
  div2.appendChild(button);
  button.innerText = "Copy";

  for (let i = 0; i < linkArr.length; i++) {
    p.innerText = linkArr[i].orginalLink;
    p2.innerText = linkArr[i].newLink;
    infoContainer.prepend(div);
  }
};

shortLinkBtn.addEventListener("click", () => injectHTML());

// 1. burger btn
const burgerBtn = document.getElementById("burger");
const navContainer = document.querySelector(".nav-links");
const blackBkg = document.querySelector('.black-bkg');

dynamicNav = () => {
  if (!navContainer.classList.contains("d-show")) {
    navContainer.classList.add("d-show");
    blackBkg.style.display = 'block'
  } 
};

bkg = () => {
  blackBkg.style.display = '';
  navContainer.classList.remove("d-show");
  
}

blackBkg.addEventListener('click', ()  => bkg())
burgerBtn.addEventListener("click", () => dynamicNav());
