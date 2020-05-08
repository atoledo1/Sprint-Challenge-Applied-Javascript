// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
	const javascript = response.data.articles.javascript;
	javascript.forEach(article =>{
	  	articleComponent(article); 	
	  	
	})	

	const bootstrap = response.data.articles.bootstrap;
 	bootstrap.forEach(boot =>{
 	  	articleComponent(boot); 
 	  		
 	})

 	const technology = response.data.articles.technology;
 	technology.forEach(tech =>{
 	  	articleComponent(tech); 
 	  		
 	})	

 	const jquery = response.data.articles.jquery;
 	jquery.forEach(jquery =>{
 	  	articleComponent(jquery); 
 	  		
 	})

 	const node = response.data.articles.node;
 	node.forEach(node =>{
 	   	articleComponent(node); 
 		
 	})														
	
}) 
.catch(error => {
	console.log('error', error);
})

	
function articleComponent(response){
	response = response;
	const cardsContainer = document.querySelector('.cards-container');
    
    
	const card = document.createElement('div');
	const divHeadline = document.createElement('div');
	const divAuthor = document.createElement('div');
	const divImg = document.createElement('img');
	const span = document.createElement('span');

	
	card.classList.add('card');
	divHeadline.classList.add('headline');
	divAuthor.classList.add('author');
	divImg.classList.add('img-container');

	
	divHeadline.textContent = `${response['headline']}`;
	divImg.src = `${response['authorPhoto']}`;
	span.textContent = `${response['authorName']}`;

	
		card.appendChild(divHeadline);
		card.appendChild(divAuthor);
		divAuthor.appendChild(divImg);
		divAuthor.appendChild(span);

		return cardsContainer.appendChild(card);

}



