//1
let footer1 = document.getElementById('#footer1');
let footer2 = document.querySelector('footer');
//2
let element = document.querySelector('main');
const elementAjoute = document.createElement('p');
elementAjoute.innerHTML = 'Ceci est un contenu <strong>très important</strong>';
element.appendChild(elementAjoute);

//3
let pTags = document.querySelectorAll('p');

pTags.forEach(pTag => {
	pTag.style.color = '#FF0000';
	pTag.classList.replace('paragraph', 'text');
});

/*let rouges = document.querySelectorAll('p');
rouges.forEach(rouge => {
	rouge.style.color = '#FF0000';
	rouge.classList.replace('paragraph', 'text');
});*/
/*for (i = 0; i < rouges.length - 1; i++) {
	rouges[i].style.color = '#FF0000';
	rouges[i].classList.replace('paragraph', 'text');
}

//element.replaceChild(document.createElement('p'), textContent);
*/
let header = document.querySelector('header');
const AjouteUl = document.createElement('ul');
AjouteUl.classList = 'list';
AjouteUl.id = 'important-list';
let ul = header.appendChild(AjouteUl);

for (i = 0; i < 4; i++) {
	let li = document.createElement('li');
	li = ul.appendChild(li);
	li.addclassList = 'list__element';
	li.dataset.num = i;
	li.innerHTML += `Ceci est l'élément n°` + [i];
}
