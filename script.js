people = [
  "Ruben Synergia",
"Maarten Robert Wulp, van der Wulp, van der",
"Seraphin Rodriguez Rodriguez"
]

removeStickers = 1;

function removeStuff(){
  people.forEach(function(person){
    elements = getAllMessageFrom(person);
    elements.forEach(element => element.remove());
  }) 
  if(removeStickers){
    removeAllStickers()
  }

}

function removeAllStickers(){
  document.querySelectorAll('._2et95.urabC').forEach(sticker => sticker.remove())
}

function getAllMessageFrom(person){
  messages = document.querySelectorAll('.FMlAw.FdF4z._3Whw5');
  elements = [];
  for (i = 0; i < messages.length; i++) {
      if(messages[i].innerText == person){
        wholeMsg = messages[i].closest(".message-in")
        elements.push(wholeMsg);
        while(wholeMsg.nextElementSibling && !wholeMsg.nextElementSibling.lastElementChild.classList.contains('_1dvTE')){
          elements.push(wholeMsg.nextElementSibling);
          wholeMsg = wholeMsg.nextElementSibling;
        }
      }
    }
    return elements;
}
setInterval(removeStuff,1000);
