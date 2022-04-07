/* Three ways to select our button; element,
   class, and ID. Best practice probably ID
   because it is the most specific.   */

//  document.querySelector('button');
//  document.querySelector('.new-quote button');
//  document.querySelector('#js-new-quote');

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', newQuote);
const endPoint = 'https://catfact.ninja/fact';

async function newQuote() {
  // console.log("quote button was clicked");
  try {
    const response = await fetch(endPoint);
    if(!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    // console.log(json.fact);
    displayQuote(json.fact);
  } catch(err) {
    console.log(err);
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
