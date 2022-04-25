let backgroundGradient = false;
const settings = {
  paddings: 0,
  wrapperCorners: 0,
  shadow: null,
};

document.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    let input = document.getElementById("input-link");

    if (input && input.value) {
      let inputValue = document.getElementById("input-link").value;
      inputValue = inputValue.substring(13);
      document.getElementById("input-link").style.display = "none";

      let scriptWidget = document.createElement("script");
      scriptWidget.setAttribute("id", "widget");
      scriptWidget.setAttribute("async", "");
      scriptWidget.setAttribute(
        "src",
        "https://telegram.org/js/telegram-widget.js?19"
      );
      scriptWidget.setAttribute("data-telegram-post", inputValue);
      scriptWidget.setAttribute("data-width", "100%");

      let widgetContainer = document.createElement("div");
      widgetContainer.id = "widget-container";
      widgetContainer.classList.add("widget-container");
      let widgetSideElement = document.getElementById("widget-side");
      widgetSideElement.appendChild(widgetContainer);
      widgetContainer.appendChild(scriptWidget);

      backgroundGradient = true;
      firstButtonClick();
    } else {
      showToast();
    }
  }
});

function resetPost() {
  let element = document.getElementsByTagName("iframe"),
    index;
  for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
  }
  document.getElementById("widget-container").remove();
  document.getElementById("input-link").style.display = "block";
  document.getElementById("widget-container").style.backgroundImage = "";
  backgroundGradient = false;
}

function togglersListener() {
  const togglers = document.getElementById("togglers");
  togglers.addEventListener("input", (e) => {
    const toggler = e.target;
    switch (toggler.name) {
      case "paddings":
        settings[toggler.name] = toggler.value;
        document.body.style.setProperty(
          "--widget-paddings",
          `${settings.paddings}px`
        );
        break;

      default:
        break;
    }
  });
}
togglersListener();

function firstButtonClick() {
  if (backgroundGradient === true) {
    document.getElementById("widget-container").style.backgroundImage =
      "linear-gradient(to bottom right, #fd6585,rgb(255, 211, 165)";
    document.getElementById("widget-container").style.borderRadius = "10px";
  }
}

function secondButtonClick() {
  if (backgroundGradient === true) {
    document.getElementById("widget-container").style.backgroundImage =
      "linear-gradient(to bottom right, #00dbde, #fc00ff)";
    document.getElementById("widget-container").style.borderRadius = "10px";
  }
}

function thirdButtonClick() {
  if (backgroundGradient === true) {
    document.getElementById("widget-container").style.backgroundImage =
      "linear-gradient(to bottom, #c084fc, #6366f1)";
    document.getElementById("widget-container").style.borderRadius = "10px";
  }
}

function fourthButtonClick() {
  if (backgroundGradient === true) {
    document.getElementById("widget-container").style.backgroundImage =
      "linear-gradient(to bottom, #ed6ea0, #ec8c69)";
    document.getElementById("widget-container").style.borderRadius = "10px";
  }
}

function fifthButtonClick() {
  if (backgroundGradient === true) {
    document.getElementById("widget-container").style.backgroundImage =
      "linear-gradient(to bottom right, #f9a8d4, #f472b6, #f87171)";
    document.getElementById("widget-container").style.borderRadius = "10px";
  }
}

function sixthButtonClick() {
  if (backgroundGradient === true) {
    document.getElementById("widget-container").style.backgroundImage =
      "linear-gradient(to bottom right, #84fab0, #8fd3f4)";
    document.getElementById("widget-container").style.borderRadius = "10px";
  }
}

let isToastAlreadyShow = false;
function showToast() {
  const toast = document.getElementById("toast");

  if (!isToastAlreadyShow) {
    toast.classList.add("toast--show");
    isToastAlreadyShow = true;

    setTimeout(() => {
      toast.classList.remove("toast--show");
    }, 2000);

    setTimeout(() => {
      isToastAlreadyShow = false;
    }, 2500);
  }
}
