//CREATION D'UN SLIDER EN JS

//Créer un tableau permettant de stocker tous les noms des images
//Créer une variable currentImg permettant de stocker la clé de l'image affichée à l'écran (par défaut : var currentImg = 0;)
var currentImg = 0;

var tabImg = [
	"img/1.jpg",
	"img/2.jpg",
	"img/3.jpg",
	"img/4.jpg",
	"img/5.jpg",
	"img/6.jpg"
];


// var tabImgEvolve = [
// 	{nom:"img/1.jpg",legend:"Melbourne", alt="melbourne"},
// 	{nom:"img/2.jpg",legend:"Chicago", alt="chicago"},
// 	{nom:"img/3.jpg",legend:"Chalmers", alt="chalmers"},
// 	{nom:"img/4.jpg",legend:"Shangai", alt="shangai"},
// 	{nom:"img/5.jpg",legend:"Hong Kong", alt="hong kong"},
// 	{nom:"img/6.jpg",legend:"Paris", alt="paris"}
// ];

// tabImgEvolve[0].nom;
// tabImgEvolve[0].description;

//1. Injecter dans la balise src la première image
	console.log(tabImg);

	var img = document.getElementById("img"); //var img = document.getElementsByTagName("img");
	console.log(img);

	img.setAttribute("src", tabImg[currentImg]); //img[0].setAttribute("src", tabImg[currentImg]); 
 

//2. Ajouter un évènement clique sur le bouton suivant
//3. Récupérer l'index suivant du tableau tabImg et injecter l'image
//Lorsque je clique sur le bouton suivant, il faut incrémenter l'index du tableau puis récupérer l'image associée pour enfin l'afficher dans la balise img
//(ex: je suis sur l'image 0. Je clique sur suivant. Je passe de 0 à 1 ce qui me permet de récupérer la deuxième image)
//avec un test pour ne pas s'arreter à la dernière image

var next = document.getElementById("suiv");


var div = document.getElementById("numPhoto");
div.innerHTML = currentImg+1 + "/" + tabImg.length;

next.addEventListener("click", function() 
{
	if(currentImg == tabImg.length-1){
		currentImg = 0;
		console.log("image courante " + currentImg);
		console.log("tabImg[" + currentImg + "] => affiche image n:" + currentImg)
		img.setAttribute("src", tabImg[currentImg]);
	}else{
		currentImg++;
		console.log("image courante " + currentImg);
		console.log("tabImg[" + currentImg + "] => affiche image n:" + currentImg)
		img.setAttribute("src", tabImg[currentImg]); //img[1].setAttribute("src", tabImg[currentImg]);
	}
	div.innerHTML = currentImg+1 + "/" + tabImg.length;
});

//4. Faire la meme chose pour précédent

var previous = document.getElementById("prec");

previous.addEventListener("click", function() 
{
	if(currentImg == 0){
		currentImg = 5;
		console.log("image courante " + currentImg);
		console.log("tabImg[" + currentImg + "] => affiche image n:" + currentImg)
		img.setAttribute("src", tabImg[currentImg]);
		
	}else{
		currentImg--;
		console.log("image courante " + currentImg);
		console.log("tabImg[" + currentImg + "] => affiche image n:" + currentImg)
		img.setAttribute("src", tabImg[currentImg]);
	}
	
	var div = document.getElementById("numPhoto");
	div.innerHTML = currentImg+1 + "/" + tabImg.length;
});


document.querySelector("#link").addEventListener("click", function()
{
	event.preventDefault(); // stoppe le comportement par défaut
	console.log("Je clique sur un lien");
});


//5. Créer un bouton afin de choisir une image aléatoire. 
//Utiliser la fonction en bas de page

function getRandomInteger(iMin, iMax) {
    return Math.round(Math.random() * (iMax - iMin)) + iMin;
}

var aleatoire = document.getElementById("aleatoire");
aleatoire.addEventListener("click", function() 
{
	currentImg = getRandomInteger(0, tabImg.length-1);
	img.setAttribute("src", tabImg[currentImg]);
	var div = document.getElementById("numPhoto");
	div.innerHTML = currentImg+1 + "/" + tabImg.length;
});


//Ajouter un alt et une légende aux images


//Lorsqu'on clique sur l'image, faire apparaître la légende


//Ajouter un bouton pour aller à la dernière image

var last = document.getElementById("der");
last.addEventListener("click", function() 
{
	currentImg = tabImg.length-1;
	img.setAttribute("src", tabImg[currentImg]);
});


//Ajouter un bouton pour aller à la première image

var first = document.getElementById("prem");
first.addEventListener("click", function() 
{
	currentImg = 0;
	img.setAttribute("src", tabImg[0]);
});

//Ajouter un bouton play et stop afin de lancer le défilement des images 
//automatiquement ou de stop le défilement. 
//Utiliser la fonction setInterval() et clearInterval()


//Ajouter la possibilité de faire défiler les images avec les flèches directionnelles


//Créer un champ permettant d'ajouter une image au slider provenant 
//d'internet (copier coller le lien d'une image dans ce champ 
//ex : http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg)


//Créer une variable timer
//Stocker le code du bouton suivant dans une fonction
//Lorsque je clique sur le bouton Play: 
//-lancer la fonction setInterval en appellant la fonction créée ci-dessous 
//et stocker le tout dans la variable timer
//-lorsque je clique sur stop, utiliser clearInterval sur la variable timer


//Afficher un bouton permettant d'afficher ou de masquer les options (play, stop et aléatoire)

//Ajouter un bouton permettant de supprimer l'image affichée

//Afficher des bulles permettant de situer l'utilisateur dans sa navigation