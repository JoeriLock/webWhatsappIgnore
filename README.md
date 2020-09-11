# webWhatsappIgnore
Removes message from people you dislike in group chats

# How to use
Download a plugin to inject the javascript into the webpage.
I use https://chrome.google.com/webstore/detail/javascript-injector/ejnccfcackblkelbafbolcpjfpcmbplg

Click the icon while on the https://web.whatsapp.com/ and insert the code from `script.js`
Update the list of persons on the top of file with the names of your contacts.

> people = [
	"Person1",
  "Person2"
]

This script also removes stickers, you can turn this on or off
> removeStickers = 1; // remove all stickers <br />
> removeStickers = 0; // Keep stickers 

Click update and relax


# TODO:
Sometimes removes alle messages after running into an error
Remove messages that are reactions on removed message
