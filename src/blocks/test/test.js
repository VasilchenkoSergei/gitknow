// class Modal {
//   constructor(selector, modalId) {
//     this.isOpen = false,
//     this.selector = selector,
//     this.modalId = modalId
//   }
//   say() {
//     console.log(`hello + ${this.selector}`);
    
//   }
//   open(modalId) {
//     // const dataId = this.retrunButtons().forEach(item => {
//     //   const x = item.dataset.id;
//     //   if (this.selector == x) {
//       console.log(modalId);
      
//       document.querySelector(modalId).classList.add('active');
//       this.isOpen = true;

//       console.log(this.isOpen);
      
//       // }
//     // })
    
    
//   }
//   close(modalId) {
//     document.querySelector(modalId).classList.remove('active');
//     this.isOpen = false;
//     console.log(this.isOpen);
//   }
//   retrunButtons() {
//     // Array.prototype.slice.call(document.querySelectorAll('.modal'));
//     // console.log(Array.prototype.call(document.querySelectorAll('.modal-button')));
//     // console.log(Array.prototype.slice.call);
    
//     return Array.prototype.slice.call(document.querySelectorAll('.modal'));
//   }
// }



// const modal1 = new Modal('max');

// // console.log(modal1);
// // const modal2 = new Modal('#modal2');


// const buttons = document.querySelectorAll('.modal-button');
// const buttons1 = document.querySelectorAll('.modal-button-close');

// buttons.forEach(item => {
//   item.addEventListener('click', () => {
//     const modalId = item.dataset.id
//     modal1.open('#' + modalId);
//   })
// })

// buttons1.forEach(item => {
//   item.addEventListener('click', () => {
//     const modalId = item.dataset.id
//     modal1.close('#' + modalId);
//   })
// })

// modal1.say()

// let promise = fetch('https://learn.javascript.ru/fetch');
// console.log(promise);

