const searchInput = document.querySelector('.search input');

searchInput.addEventListener('input', () => {
  let text = searchInput.value;

  var source = document.querySelectorAll('.main-card__body');

  source.forEach(item => {
    const innerText = item.innerHTML
    if(innerText.search(text) !== -1){
      // console.log(innerText.search(text));
      
    } else {
      // console.log(7787897897897987);
      
    }

  })
  
  
});