// 1. Grab input value from form input ex:  http://www.google.com
// 2. create a HTML injection to append towards the page
// 3. implement html injection towards linkArr to display multiple links
// 4. grab obj's from linkArr to display
const infoContainer = document.querySelector('.info-container');
const shortLinkBtn = document.getElementById("link-btn");
const linkInput = document.getElementById("url");
const linkArr = [];

storeLinks = () => {
  const obj = {
    orginalLink: linkInput.value,
    newLink: "Working on it !!",
  };

  linkArr.push(obj);
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
  button.innerText = 'Copy';

  console.log(linkArr);

  for (let i = 0; i < linkArr.length; i++) {
    p.innerText = linkArr[i].orginalLink;
    p2.innerText = linkArr[i].newLink;
    infoContainer.prepend(div)
  }
};

shortLinkBtn.addEventListener("click", () => injectHTML());
