
console.log("Background running"); 
chrome.browserAction.onClicked.addListener(buttonClicked); 
function buttonClicked(tab) 
{ 
let msg = { 
txt : "Hi" 
} 
chrome.tabs.sendMessage(tab.id,msg); 
} 
