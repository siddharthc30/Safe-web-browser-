console.log('We are ready to replace the images!'); 
chrome.runtime.onMessage.addListener(replace); 
function replace() 
{
let filename = "pikachu.png"

let imgs = document.getElementsByTagName('img'); 
for(imgElt of imgs) 
{ 
let file = 'images/' + filename; 
let url = chrome.extension.getURL(file); 
imgElt.src = url; 
console.log(url); 
} 
}