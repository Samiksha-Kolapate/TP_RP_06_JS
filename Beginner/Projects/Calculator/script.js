const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } 

    else if (item.id == "backspace") {
      //let string = display.innerText.toString();
      //display.innerText = string.substr(0, string.length - 1);
      display.innerText = display.innerText.slice(0, -1);
    } 

    else if (display.innerText != "" && item.id == "equal") {
      try{
        display.innerText = eval(display.innerText);
      }
      catch{
        display.innerText = "Invalid operation";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } 

    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Please enter something!";
      setTimeout(() => (display.innerText = ""), 2000);
    } 

    else {
      display.innerText += item.id;
    }
  };
});

