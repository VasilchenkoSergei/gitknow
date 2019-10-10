const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', () => {

  
  
    var lastResFind=""; // последний удачный результат
    var copy_page=""; // копия страницы в ихсодном виде
    function TrimStr(s) {
        s = s.replace( /^\s+/g, '');
      return s.replace( /\s+$/g, '');
    }
    function FindOnPage(searchInput) {//ищет текст на странице, в параметр передается ID поля для ввода
      var obj = window.document.getElementById(searchInput);
      var textToFind;
      
      if (obj) {
        textToFind = TrimStr(obj.value);//обрезаем пробелы
      } 

      
      if(document.body.innerHTML.indexOf(textToFind)=="-1")
      alert("Ничего не найдено, проверьте правильность ввода!");
      
      if(copy_page.length > 0) {
        document.body.innerHTML = copy_page
      } else { copy_page = document.body.innerHTML }
    }

    FindOnPage('search-input')
});
