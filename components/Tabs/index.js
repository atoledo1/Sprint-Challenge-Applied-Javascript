// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const lambdaTab = axios.get("https://lambda-times-backend.herokuapp.com/topics");
lambdaTab
.then(info => {
    lambdaElements = info.data.topics;
    lambdaElements.forEach((element)=>{
        tabCreator(element)
    });
})

.catch(error => {
console.log(`error: ${error}`);
})
	
function tabCreator(textContent){
	const tabTopic = document.querySelector(".topics");		
	const lambdaDiv = document.createElement("div");
	lambdaDiv.classList.add("tab");
	lambdaDiv.textContent = textContent;
	return tabTopic.appendChild(lambdaDiv);
}


