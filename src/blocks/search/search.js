const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', () => {
  let val = searchInput.value.trim();
  console.log(val);
  

  let texts = document.querySelectorAll('.main-card__body p');
  if (val != '') {
    texts.forEach(elem => {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add('hide');
        elem.innerHTML = elem.innerText
      } else {
        elem.classList.remove('hide');
        let str = elem.innerText;
        elem.innerHTML = insertMask(str, elem.innerText.search(val), val.length)
        console.log(elem.innerHTML);
        
      }
    });
  } else {
    texts.forEach(elem => {
      elem.classList.remove('hide');
      elem.innerHTML = elem.innerText
    })
  }

  function insertMask(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '<mark>' + string.slice(pos + len);
  }
  
})