// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the info.
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



function cardCreator(article){


const articleBox = document.createElement("div");
const title = document.createElement("div");
const authorD = document.createElement("div");
const imageDiv = document.createElement("div");
const photo = document.createElement("img");
const nameA = document.createElement("span");


articleBox.classList.add("card");
title.classList.add("headline");
authorD.classList.add("author");
imageDiv.classList.add("img-container");


title.textContent = article.headline;
photo.src = article.authorPhoto;
nameA.textContent = `By ${article.authorName}`;



articleBox.appendChild(title);
articleBox.appendChild(authorD);
authorD.appendChild(imageDiv);
imageDiv.appendChild(photo);
authorD.appendChild(nameA);


return articleBox;

};

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(info => { 
console.log(info);

const cardsBox = document.querySelector(".cards-container");
const arrayNew = Object.values(info.data.articles);

arrayNew.forEach((element) => { 
element.forEach((article) => {
    cardsBox.appendChild(cardCreator(article));
    
})

})

}).catch(error => {
console.log("error", error)

});  

