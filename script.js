people = [
	"Ruben Synergia"
]

function removePeople(){
	people.forEach(function(person){
		elements = getAllMessageFrom(person);
		elements.forEach(element => parentElement.parentElement.parentElement.parentElement.remove());
	}) 
}


function getAllMessageFrom(person){
	messages = document.querySelectorAll('._2a1Yw._1OmDL._3FXB1');
	elements = [];
	for (i = 0; i < messages.length; i++) {
      if(messages[i].innerText == person){
      	elements.push(messages[i]);
      	messages[i].parentElement.parentElement.parentElement.parentElement.remove()

      }
    }
    return elements;
}
setInterval(removePeople,1000);
