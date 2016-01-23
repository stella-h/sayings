
var quotes = 
{ key1:"amazing",
  key2: "hello", 
  key3:"crap",
  key4:"oh man",
  key5:"hey hey" }

// max = 5
// min = 1

var words = ["he", "yeah", "come", "hello", "yes!"]
// var randomize = Math.floor(Math.random() * words.length);

// var box = document.getElementById("quote-box")

 function generateQuotes() {
  // var randomKey = Math.floor(Math.random() * (max - min) + min)
  // var genKey = key+randomKey

  // for (var property in quotes) {
  //   console.log( property + " word is " + quotes[property] )
  // }

  // var gimme = quotes.key2;
 //  var randomQuotes = quotes.1;
  // console.log(quotes[]);
  // console.log(hello);
// var randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];
  // console.log(genKey);
  // quotes[Math.floor(Math.random()*quotes.length)];
  var randomize = Math.floor(Math.random() * words.length);

console.log(words[randomize]);
  // box.outerHTML = randomQuotes;
}

// box.outerHTML = generateQuotes;

// box.appendChild(generateQuotes);