// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const headerBox = document.createElement("div");
  const dateNews = document.createElement("span");
  const firstHeader = document.createElement("h1");
  const tempF = document.createElement("span");

  headerBox.classList.add("header");
  dateNews.classList.add("date");
  tempF.classList.add("temp");

  dateNews.textContent = "SMARCH 28, 2019";
  firstHeader.textContent = "Lambda Times";
  tempF.textContent = "98°";

  headerBox.appendChild(dateNews);
  headerBox.appendChild(firstHeader);
  headerBox.appendChild(tempF);

  return headerBox;
}

const HTMLheaderBox = document.querySelector("div.header-container");

HTMLheaderBox.appendChild(Header());
