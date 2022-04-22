document.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    let input = document.getElementById("input-link");
    if (input && input.value) {
      let inputValue = document.getElementById("input-link").value;
      let scriptWidget = document.getElementById("widget");

      inputValue = inputValue.substring(13);
      document.getElementById("input-link").style.visibility = "hidden";

      scriptWidget.setAttribute("sync", "");
      scriptWidget.setAttribute(
        "src",
        "https://telegram.org/js/telegram-widget.js?19"
      );
      scriptWidget.setAttribute("data-telegram-post", inputValue);
      scriptWidget.setAttribute("data-width", "100%");
    } else {
      alert("Please, enter a link!");
    }
  }
});
