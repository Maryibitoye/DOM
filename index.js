const titleElement = document.getElementById("page-title");
titleElement.style.color = "blue";
console.log(titleElement);

const famContacts = document.getElementsByClassName("family");
console.log(famContacts);

console.log(famContacts[0]);
console.log(famContacts[1]);
console.log(famContacts[2]);

const allContacts = document.getElementsByTagName("p");
console.log(allContacts);

const firstWorkContact = document.querySelector(".work");
console.log(firstWorkContact);

const allFirstWorkContact = document.querySelectorAll(".work");
console.log(allFirstWorkContact);

const thirdBtn = document.querySelector("div button:nth-child(2)");
console.log(thirdBtn);

const allBtns = document.querySelectorAll("button");
console.log(allBtns);

const topicElement = document.querySelector("#topic");

console.log(topicElement.innerHTML);

const topic = document.getElementById("topic");

// topic.innerHTML = "<p>This is the "
console.log(topic);

const paragraph = document.querySelector("p");
console.log(paragraph.innerText);
console.log(paragraph.textContent);

const innerText = document.getElementById("inner-text");
const textContent = document.getElementById("textContent");
console.log(textContent, innerText);

let address = `
  ABC Street,
  Spintex Road,
  Accra,
  Ghana.
`;
textContent.textContent = address;
innerText.innerText = address;

const imageElement = document.querySelector("img");
console.log(imageElement.getAttribute("src"));
console.log("BEFORE:", imageElement.getAttribute("src"));
imageElement.setAttribute("src", "new-image.jpg");
imageElement.setAttribute("height", "200");

console.log("AFTER:", imageElement.getAttribute("src"));

const header = document.querySelector("h1");
header.style.backgroundColor = "lightgreen";
header.style.fontsize = "2rem";
header.style.padding = "1rem";
header.style.border = "1px solid black";
header.style.textAlign - "center";
header.style.textTransform = "uppercase";
console.log(header.style);

console.log(header.className);

const jollofParagraph = document.getElementById("jollof");

console.log(jollofParagraph.classList);
const italicizedText = document.getElementById("italics");
console.log(italicizedText);
console.log(italicizedText.parentNode);
console.log(italicizedText.parentNode.parentNode);

const container = document.getElementById("container");
console.log(container);

const containerChildren = container.children;
console.log(containerChildren);

const myButton = document.getElementById("myButton");
console.log(myButton);

myButton.addEventListener("click", () => {
  alert("Button Clicked");
});

// jollofParagraph.classList.toggle("jollof");
// console.log(jollofParagraph.classList);
