// Variables

const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    quote:
      '"Если президенты не могут делать этого со своими женами, они делают это со своими странами."',
    person: "Иосиф Бродский",
  },
  {
    quote:
      '"Оставайся в середине круга, и пусть все вещи следуют своим путем."',
    person: "Лао-Цзы",
  },
  {
    quote:
      '"Большинство людей упускают появившуюся возможность, потому что она бывает одета в комбинезон и с виду напоминает работу."',
    person: "Томас Эдисон",
  },
  {
    quote: '"Где человек находится противясь, там его тюрьма."',
    person: "Эпикет",
  },
];
const dumbQuotes = [
  {
    quote: "quote is not ready",
    person: "Андрей Карп",
  },
  {
    quote: "Я не ловелас.",
    person: "Серега",
  },
  {
    quote: "ХВАТИТ ЛЕЙМИТЬ!",
    person: "Руслан Динозаврович",
  },
  {
    quote: "Если он размутит меня, то он ...dead",
    person: "Кабаноидная масса",
  }
];

quotes.push(...dumbQuotes);

btn.addEventListener("click", (e) => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.textContent = quotes[random].quote;
  person.textContent = quotes[random].person;
});
