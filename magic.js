var messages = [
  "It is certain.",
  "Without a doubt.",
  "You may rely on it.",
  "Yes, definitely.",
  "Most likely.",
  "Outlook good.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

var questionInput = document.getElementById('question-input');
var messageElement = document.querySelector('.message');
var shakeButton = document.querySelector('.shake-button');
var magic8Ball = document.querySelector('.magic8ball');

function getRandomMessage() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

function shakeMagic8Ball() {
  var question = questionInput.value.trim();
  if (question !== '') {
    var message = getRandomMessage();
    messageElement.textContent = message;
    magic8Ball.classList.add('hidden');
    setTimeout(function() {
      magic8Ball.classList.remove('hidden');
    }, 500);
  } else {
    messageElement.textContent = 'Please enter a question.';
  }
  questionInput.value = '';
  questionInput.blur();
}

shakeButton.addEventListener('click', shakeMagic8Ball);
