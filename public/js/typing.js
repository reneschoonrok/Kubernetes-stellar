var title = document.querySelector("p");
var CHAR_TIME = 30;

var text = void 0,index = void 0;

function requestCharAnimation(char, value) {
  setTimeout(function () {
    char.textContent = value;
    char.classList.add("fade-in");
  }, CHAR_TIME);
}

function addChar() {
  var char = document.createElement("span");
  char.classList.add("char");
  char.textContent = "▌";
  title.appendChild(char);
  requestCharAnimation(char, text.substr(index++, 1));
  if (index < text.length) {
    requestChar();
  }
}

function requestChar() {var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  setTimeout(addChar, CHAR_TIME + delay);
}

function start() {
  index = 0;
  text = title.textContent.trim();
  title.textContent = "";
  requestChar(1000);
}
start();