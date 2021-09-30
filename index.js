// Write your code here!
/* const mainElement = document.getElementById('main');

function removeElement(x) {
    x.remove();
}

removeElement(mainElement); */

// document.body.removeChild(main);
main.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute('id','victory');
newHeader.textContent = 'YOUR-NAME is the champion';

document.body.append(newHeader);