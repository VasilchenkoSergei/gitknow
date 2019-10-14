const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', () => {
  let val = searchInput.value.trim();
  let texts = document.querySelectorAll('.main-card__body');
  if (val != '') {
    texts.forEach(elem => {
      if (elem.innerText.search(val) == -1) {
        elem.closest('.main-card').classList.add('hide');
        elem.closest('.main-card').querySelector('.main-card__header').classList.remove('active');
        elem.innerHTML = elem.innerText
      } else {
        elem.closest('.main-card').classList.remove('hide');
        elem.closest('.main-card').querySelector('.main-card__header').classList.add('active');
        let str = elem.innerText;
        elem.innerHTML = insertMask(str, elem.innerText.search(val), val.length)
      }
    });
  } else {
    texts.forEach(elem => {
      elem.closest('.main-card').classList.remove('hide');
      elem.closest('.main-card').querySelector('.main-card__header').classList.remove('active');
      elem.innerHTML = elem.innerText
    })
  }

  function insertMask(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
  }
  
})