// const currentDateParagraph = document.getElementById("current-date");
// const dateOptionsSelectElement = document.getElementById("date-options");

// const date = new Date();
// const day = date.getDate();
// const month = date.getMonth() + 1;
// const year = date.getFullYear();
// const hours = date.getHours();
// const minutes = date.getMinutes();

// const formattedDate = `${day}-${month}-${year}`;
// currentDateParagraph.textContent = formattedDate;

// dateOptionsSelectElement.addEventListener("change", () => {

//   switch (dateOptionsSelectElement.value) {
//     case "yyyy-mm-dd":
//       currentDateParagraph.textContent = formattedDate
//         .split("-")
//         .reverse()
//         .join("-");
//       break;
//     case "mm-dd-yyyy-h-mm":
//       currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
//       break;
//     default: currentDateParagraph.textContent = formattedDate;
//   }

// });
const selectElement = document.getElementById("date-options");
const actualDate = document.getElementById("date-para");

const date = new Date();
const todaysDate = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const clockSvg = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="9" fill="#ffffff" stroke="#6c2ca7" stroke-width="1.6"/>
  <circle cx="12" cy="12" r="1.6" fill="#6c2ca7"/>
  <line x1="12" y1="12" x2="12" y2="7" stroke="#6c2ca7" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="12" y1="12" x2="16" y2="12" stroke="#6c2ca7" stroke-width="1.6" stroke-linecap="round"/>
</svg>`;

const updateDisplay = (displayText) => {
  actualDate.innerHTML = `${displayText} ${clockSvg}`;
}

const formattedDate = `${todaysDate}-${month}-${year}`;
 actualDate.textContent = formattedDate;
updateDisplay(formattedDate);

 
 selectElement.addEventListener("change", () => {
 switch(selectElement.value){
  //ou’re using textContent, which overwrites the innerHTML, so your SVG disappears. You need to always use your updateDisplay() function inside the switch instead of textContent
  case "yyyy-mm-dd":
    // actualDate.textContent = formattedDate.split("-").reverse().join("-");
    updateDisplay(formattedDate.split("-").reverse().join("-")); 
  break;
  case "dd-mm-yyyy-h-mm":
    // actualDate.textContent = ${todaysDate}-${month}-${year} ${hours} Hours and ${minutes} Minutes`
     updateDisplay(`${todaysDate}-${month}-${year} ${hours} Hours and ${minutes} Minutes`);
  break;
  default: updateDisplay(formattedDate);
 }
});
 