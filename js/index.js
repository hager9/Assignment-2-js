var quotes = [
  {
    quote: `“Be the change that you wish to see in the world.”`,
    author: `-- Mahatma Gandhi`
  },
  {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    author: `-- Robert Frost`
  },
  {
    quote:   `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,   
    author:   `-- J.K. Rowling`
  },
  {
    quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
    author:   `-- Oscar Wilde`
  },
  {
    quote: `“Without music, life would be a mistake.”`,
    author:   `-- Friedrich Nietzsche`
  },
  {
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    author:   `-- Andre Gide`
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`, 
    author:  `-- Dr. Seuss`
  },
  {
    quote: `"Do not take life too seriously. You will not get out alive."`,
    author: "-- Elbert Hubbard"
  }
];

let lastQuoteIndex = -1;

document.getElementById("qouteBtn").addEventListener("click", newQuote);

function newQuote() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * quotes.length);
    } while (randomNumber === lastQuoteIndex);

    lastQuoteIndex = randomNumber;

    document.getElementById("quoteContent").innerHTML = quotes[randomNumber].quote;
    document.getElementById("quoteAuthor").innerHTML = quotes[randomNumber].author;
}
