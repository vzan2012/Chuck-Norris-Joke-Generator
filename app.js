// Add Event Listener to the 'Get Jokes' button
document.querySelector('.get-jokes').addEventListener('click', getJokes);

// Get the Jokes from the API
function getJokes(e) {
  // Get the Number from the Number field
  const number = document.querySelector('input[type="number"]').value;

  // Create xhr object
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);

      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke, index) {
          output += `<li>${joke.joke}</li>`;
        })
      } else {
        output += `<li style="color: red;">Something went wrong</li>`
      }

      document.querySelector('.jokes').innerHTML = output;

    }
  }

  xhr.send();


  e.preventDefault();
}