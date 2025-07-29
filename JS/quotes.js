const quotes = [
  {
    q: "I'm Yang eun jun",
    a: ". Yang eun jun ",
  },
  {
    q: "wow wow wow",
    a: ". chromeeeeee",
  },
  {
    q: "android",
    a: ". bomb",
  },
];
const q = document.querySelector("#quotes span:first-child");
const a = document.querySelector("#quotes span:last-child");
console.log(quotes[Math.floor(Math.random() * 2)]);
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
q.innerText = todayQuote.q;
a.innerText = todayQuote.a;
