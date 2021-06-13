import { registerImage } from "./lazy";

const MIN = 1;
const MAX = 122;
const randomNumber = () => parseInt(Math.random() * (MAX - MIN)) + MIN;

const makeImageNode = () => {

  const container = document.createElement("div");
  container.className = "p-4";
  container.style.transition = "opacity 1s ease-in-out";

  
  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = '320';
  image.dataset.src = `https://randomfox.ca/images/${randomNumber()}.jpg`; //TODO

  const wrapper = document.createElement("div");
  wrapper.style.minHeight = "100px";
  wrapper.style.display = "inline-block";
  wrapper.className = 'bg-gray-300 wrapper'
  // wrapper.style.backgroundImage = "url(../public/assets/fox.png)";

  container.appendChild(wrapper);
  wrapper.appendChild(image);

  // container.appendChild(image)
  
  return container;
  
};

const firstImage = makeImageNode()
const mountNode = document.querySelector('#images');

const action = () => {
  const newImage = makeImageNode();
  mountNode.appendChild(newImage);
  registerImage(newImage);
}

const removeAction = () => {
  // Making the delet algorithm
}

const addButton = document.querySelector('#addImage')
addButton.addEventListener('click', action);


