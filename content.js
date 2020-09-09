console.log('Ready to replace the images!'); 
chrome.runtime.onMessage.addListener(replace); 
function replace() 
{
let filename = "pikachu.png"

let imgs = document.getElementsByTagName('img'); 
for(im of imgs) 
{ 
let file = 'images/' + filename; 
let url = chrome.extension.getURL(file); 
im.src = url; 
console.log(url); 
} 
}
