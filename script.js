const quotes = [
    " \"The only limit to our realization of tomorrow is our doubts of today.\" - Franklin D. Roosevelt",
    " \"Do what you can, with what you have, where you are.\" - Theodore Roosevelt",
    " \"It always seems impossible until it's done.\" - Nelson Mandela",
    " \"Act as if what you do makes a difference. It does.\" - William James",
    "\"You are never too old to set another goal or to dream a new dream.\" - C.S. Lewis",
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    "\"The best time to plant a tree was 20 years ago. The second best time is now.\" - Chinese Proverb",
    "\"Start where you are. Use what you have. Do what you can.\" - Arthur Ashe",
    "\"The bird fights its way out of the egg. The egg is the world. Who would be born must first destroy the world.\" - Herman Hesse",
    "\"To live without hope is to cease to live\" - Fyodor Dostoevsky",
  ];
   
  const quoteDisplay = document.getElementById("quoteDisplay");
  const quoteButton = document.getElementById("quoteButton");
   
  quoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  });