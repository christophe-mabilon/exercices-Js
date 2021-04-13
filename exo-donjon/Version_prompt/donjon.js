//L'aventurier possède 100 points de vie
let aventurierVie = 100;
//L'aventurier va avoir le choix entre 3 armes, chacune infligeant des dégâts plus ou moins élevés (bois: 2, fer: 5, magique: 10) et 3 armures, protégeant d'une certaine quantité de dégâts (bois : 1, fer: 3, magique: 5)
let attaqueAventurier = +prompt(
	'séléctionner votre arme : \nARME EN BOIS :  Attaque : 2\nARME EN FER :  Attaque : 5\nARME MAGIQUE :  Attaque : 10',
);

let defenseAventurier = +prompt(
	'séléctionner votre armure : \nARMURE EN BOIS :  Défense : 1\nARMURE EN FER :  Défense : 3\nARMURE MAGIQUE :  Défense : 5',
);

//Une fois l'équipement choisi, le combat avec le Maitre du Donjon commence.
//Le Maitre du Donjon a 150 points de vie, inflige 6 points de dégâts par tour et possède une armure le protégeant de 4 points de dégâts

// Le maitre du donjon possède 150 points de vie
let maitreDonjonVie = 150;
let attaquemaitreDonjon = 6;
let defensemaitreDonjon = 4;
//Les deux combattants s'attaquent mutuellement (le Maitre du Donjon commence) jusqu'à ce que les points de vie de l'un des deux atteigne 0
let i = 0;
while (aventurierVie > 0 && maitreDonjonVie > 0) {
	if (i == 0) {
		console.log(`TOUR : ${i + 1} :
    Le maitre du donjon commence : il attaque : 
    cela inflige 6 points de dégâts sur la vie de l aventurier
    les points de l'aventurier sont maintenant de ${(aventurierVie -=
			attaquemaitreDonjon - defenseAventurier)}`);
	} else if (i % 2 !== 0) {
		console.log(`TOUR : ${i + 1} :
    Au tour de L'aventurier : il attaque  : 
    cela inflige ${attaqueAventurier} points de dégâts sur la vie du maitre du donjon
    les points du du maitre du donjon sont maintenant de ${(maitreDonjonVie -=
			attaqueAventurier - defensemaitreDonjon)}`);
	} else if (i % 2 == 0) {
		console.log(`TOUR : ${i + 1} :
    Au tour du maitre du donjon : il attaque : 
    cela inflige 6 points de dégâts sur la vie de l aventurier
    les points du du maitre du donjon sont maintenant de ${(aventurierVie -=
			attaquemaitreDonjon - defenseAventurier)}`);
	}
	i++;
}

if (maitreDonjonVie > 0 && aventurierVie <= 0) {
	console.log(`Le maitre du donjon a Gagné !`);
} else if (aventurierVie > 0 && maitreDonjonVie <= 0) {
	console.log(`L'aventurier' a Gagné !`);
} else {
	console.log(`Aucun vainqueur c 'est l'egalité parfaite' !`);
}
