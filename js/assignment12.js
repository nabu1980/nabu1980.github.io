/* Three ways to select our button; element,
   class, and ID. Best practice probably ID
   because it is the most specific.   */

//  document.querySelector('button');
//  document.querySelector('.new-quote button');
//  document.querySelector('#js-new-quote');

const jokeButton = document.querySelector('#jsNewJoke');
const jokeHolder = document.querySelector('#jsJokeText');
jokeButton.addEventListener('click', newJoke);
const endPoint = 'https://icanhazdadjoke.com';

async function newJoke() {
   console.log("joke button was clicked");
  try {
    const response = await fetch(endPoint,
      {headers: {
        Accept: "application/json",
      },
    });
    if(!response.ok) {
      throw Error(response.statusText);
    }
    const joke = await response.json();
    console.log(joke);
    displayJoke(joke.joke);
  } catch(err) {
    console.log(err);
    alert('Failed');
  }
}

function displayJoke(text) {
  const jokeText = document.querySelector('#jsJokeText');
  jokeText.textContent = text;
}
