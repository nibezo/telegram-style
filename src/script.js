let backgroundGradient = new Boolean(false);

document.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    let input = document.getElementById("input-link");
    
    if (input && input.value) {
      let inputValue = document.getElementById("input-link").value;
      inputValue = inputValue.substring(13);
      document.getElementById("input-link").style.visibility = "hidden";
      
      let scriptWidget = document.createElement('script');
      scriptWidget.setAttribute("id", "widget");
      scriptWidget.setAttribute("async", "");
      scriptWidget.setAttribute("src", "https://telegram.org/js/telegram-widget.js?19");
      scriptWidget.setAttribute("data-telegram-post", inputValue);
      scriptWidget.setAttribute("data-width", "100%");
      document.getElementById("input-dropzone").appendChild(scriptWidget);
      // document.getElementsById("input-dropzone").style.backgroundColor = "100px";
      backgroundGradient = true;
      firstButtonClick();      
    } else {
      alert("Please, enter a link!");
    }
  }
});

function resetPost() {
  let element = document.getElementsByTagName("iframe"), index;
  for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
  }
  document.getElementById("widget").remove();
  document.getElementById("input-link").style.visibility = "visible";
  document.getElementById("input-dropzone").style.backgroundImage = "";
  backgroundGradient = false;
}

function firstButtonClick() {
  if(backgroundGradient === true) {
    document.getElementById("input-dropzone").style.backgroundImage = "linear-gradient(to bottom right, #fd6585,rgb(255, 211, 165)";
  }
}

function secondButtonClick() {
  if(backgroundGradient === true) {
    document.getElementById("input-dropzone").style.backgroundImage = "linear-gradient(to bottom right, #00dbde, #fc00ff)";
  }
}

function thirdButtonClick() {
  if(backgroundGradient === true) {
    document.getElementById("input-dropzone").style.backgroundImage = "linear-gradient(to bottom, #c084fc, #6366f1)";
  }
}

function fourthButtonClick() {
  if(backgroundGradient === true) {
    document.getElementById("input-dropzone").style.backgroundImage = "linear-gradient(to bottom, #ed6ea0, #ec8c69)";
  }
}

function fifthButtonClick() {
  if(backgroundGradient === true) {
    document.getElementById("input-dropzone").style.backgroundImage = "linear-gradient(to bottom right, #f9a8d4, #f472b6, #f87171)";
  }
}

function sixthButtonClick() {
  if(backgroundGradient === true) {
    document.getElementById("input-dropzone").style.backgroundImage = "linear-gradient(to bottom right, #84fab0, #8fd3f4)";
  }
}
