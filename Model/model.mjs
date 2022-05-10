export default class Model {
  constructor() {    
  }
  sort(event) {
    let sortLiItems;
    let liItems = document.querySelectorAll('li');
    if (event.target.classList.contains('sort-bottom')) {
      sortLiItems = [...liItems].sort(function (a, b) {
        if (a.lastElementChild.value >= b.lastElementChild.value) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      sortLiItems = [...liItems].sort(function (a, b) {
        if (a.lastElementChild.value <= b.lastElementChild.value) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    return sortLiItems;
  }
}