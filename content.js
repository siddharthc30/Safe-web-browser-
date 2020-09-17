console.log('We are ready to replace the images!'); 
chrome.runtime.onMessage.addListener(replace);

const Clarifai = require('clarifai')
const app = new clariafi.App({
    apiKey: 'my key'
});

function replace() 
{
    let filename = "pikachu.png"

    let imgs = document.getElementsByTagName('img'); 
    for(imgElt of imgs) 
    {
        let file = 'images/' + filename; 
        let url = chrome.extension.getURL(file);
        app.models.predict(clariafi.MODERATION_MODEL, imgElt.url)
        .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
   
        //imgElt.src = url; 
        //console.log(url); 
    } 
}
