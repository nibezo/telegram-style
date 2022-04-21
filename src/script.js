document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
      var input = document.getElementById("input-link");
      if (input && input.value) {
        let inputValue = document.getElementById("input-link").value;
        inputValue = inputValue.substring(13);
        document.getElementById('input-link').style.visibility = "hidden";
        document.getElementById('input-dropzone').style.visibility = "hidden";
        
        const element = document.getElementById("input-dropzone");
        element.remove();
        
        document.getElementById("widget").setAttribute("sync", "");
        document.getElementById("widget").setAttribute("src", "https://telegram.org/js/telegram-widget.js?19");
        document.getElementById("widget").setAttribute("data-telegram-post", inputValue);
        document.getElementById("widget").setAttribute("data-width", "100%");
        
        
      }
      else {
        alert('Please, enter a link!');
      }
    }
  });
  
  