var quotes = ["amazing", "hello", "crap", "oh man", "hey hey"]

 function generateQuotes() {
  var randomQuotes = quotes[Math.floor(Math.random()*quotes.length++)];
  document.getElementById("quote-box").value = document.createTextNode(randomQuotes);
  console.log(randomQuotes);
}