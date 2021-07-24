let quotes = ['"Engineering is the closest thing to magic that exists in the world." - Elon Musk', '"You don’t have to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream." - Michael Dell', '“An entrepreneur is someone who has a vision for something and a want to create.” - David Karp', '"Its not about working harder its about working the system." - Evan Spiegel', '"... the secrets of the universe, or just want to pursue career in the 21st century, basic computer programming is an essential skill to learn"- Stephen Hawking']


let quoteView = document.querySelector(".quotes-container");
let viewQuoteBtn = document.querySelector(".btn-quote");

function quotesSelector() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

function showQuote() {
    quoteView.innerHTML = quotesSelector();

}
viewQuoteBtn.addEventListener('click', showQuote);