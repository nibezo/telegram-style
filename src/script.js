document.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    let input = document.getElementById("input-link");
    
    if (input && input.value) {
      let inputValue = document.getElementById("input-link").value;
      inputValue = inputValue.substring(13);
      document.getElementById("input-link").style.visibility = "hidden";
      
      let scriptWidget = document.createElement('script');
      scriptWidget.setAttribute("async", "");
      scriptWidget.setAttribute("src", "https://telegram.org/js/telegram-widget.js?19");
      scriptWidget.setAttribute("data-telegram-post", inputValue);
      scriptWidget.setAttribute("data-width", "100%");
      document.getElementById("input-dropzone").appendChild(scriptWidget);
    } else {
        alert("Please, enter a link!");
      }
    }
  });
  
  function resetPost() {
    document.getElementById("input-link").style.visibility = "visible";
    
    document.getElementsByTagName("script")[0].removeAttribute("async"); 
    document.getElementsByTagName("script")[0].removeAttribute("src"); 
    document.getElementsByTagName("script")[0].removeAttribute("data-telegram-post"); 
    document.getElementsByTagName("script")[0].removeAttribute("data-width");
    var element = document.getElementsByTagName("iframe"), index;

    for (index = element.length - 1; index >= 0; index--) {
      element[index].parentNode.removeChild(element[index]);
    }
}