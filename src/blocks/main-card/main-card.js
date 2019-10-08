
if (window.innerWidth < 1024) {
  const mainCardHeaders = document.querySelectorAll('.main-card__title');

  mainCardHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      const goToHeader = e.target.closest('div');
      mainCardHeaders.forEach(item => {
        item.closest('div').classList.remove('active');
      })

      if (goToHeader.classList.contains('active')) {
        goToHeader.classList.remove('active');
      } else {
        goToHeader.classList.add('active');
      }
    });
  });
}