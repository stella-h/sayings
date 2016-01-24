var words = ["amazing " , "hello " , "crap " , "oh man " , "hey hey ", "chicken ", "crows ", "fish "]
var box = document.getElementById("quote-box")

 function generateQuotes() {
  // generates the random number from array.
  var randomize = Math.floor(Math.random() * words.length);

  var displayWord = document.createTextNode((words[randomize]))
  box.appendChild(displayWord);
  // console.log(words[randomize]);


}

// clears existing text on div
// text node with the right text attribute



