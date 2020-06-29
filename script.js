people = [
	"Ruben Synergia"
]

function removePeople(){
	people.forEach(function(person){
		elements = getAllMessageFrom(person);
		elements.forEach(element => element.remove());
	}) 
}


function getAllMessageFrom(person){
	messages = document.querySelectorAll('.FMlAw.FdF4z._3Whw5');
	elements = [];
	for (i = 0; i < messages.length; i++) {
      if(messages[i].innerText == person){
      	wholeMsg = messages[i].closest(".message-in")
      	elements.push(wholeMsg);
      	while(!wholeMsg.nextElementSibling.lastElementChild.classList.contains('_1dvTE')){
      		elements.push(wholeMsg.nextElementSibling);
      		wholeMsg = wholeMsg.nextElementSibling;
      	}
      }
    }
    return elements;
}
setInterval(removePeople,1000);
