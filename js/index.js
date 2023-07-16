var quotes = [
  `“Be the change that you wish to see in the world.”`,
  `“In three words I can sum up everything I've learned about life: it goes on.”`,
  `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
  `“To live is the rarest thing in the world. Most people exist, that is all.”`,
  `“Without music, life would be a mistake.”`,
  `“It is better to be hated for what you are than to be loved for what you are not.”`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
  `"Do not take life too seriously. You will not get out alive."`
];

var quoteAuthor = [
  `-- Mahatma Gandhi`,
  `-- Robert Frost`,
  `-- J.K. Rowling`,
  `-- Oscar Wilde`,
  `-- Friedrich Nietzsche,`,
  `-- Andre Gide`,
  `-- Dr. Seuss`,
  "-- Elbert Hubbard"
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteContent").innerHTML = (quotes[randomNumber]);
    document.getElementById("quoteAuthor").innerHTML = quoteAuthor[randomNumber];
}

