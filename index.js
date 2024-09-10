import './index.css'
import IMAGE from './assets/img.png'

console.log("Hello world!");

const container = document.createElement('div');
container.className = 'container';
const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';
const img = document.createElement('img');
img.className = 'img';
img.src = IMAGE;
container.append(h1, img)
document.body.append(container)