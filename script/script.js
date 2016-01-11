var quotes = ["amazing", "hello", "crap", "oh man", "hey hey"]
var box = document.getElementById("quote-box")

 function generateQuotes() {
  var randomQuotes = quotes[Math.floor(Math.random()*quotes.length++)];
  console.log(randomQuotes);
}

// box.appendChild(generateQuotes);