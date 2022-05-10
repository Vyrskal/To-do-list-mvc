export default class View {
  constructor() {
    this.root = document.getElementById("root");
  }


  createDiv(props) {
    const div = document.createElement("div");

    props.class && (div.className = props.class);
    props.text && (div.innerText = props.text);

    return div;
  }

  createH1(props) {
    const h1 = document.createElement("h1");

    props.class && (h1.className = props.class);
    props.text && (h1.innerText = props.text);

    return h1;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.class && (input.className = props.class);
    props.name && (input.name = props.name);
    input.value = '';

    return input;
  }

  createUl(props) {
    const ul = document.createElement("ul");

    props.class && (ul.className = props.class);

    return ul;
  }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerText = props.text);
    props.class && (button.className = props.class);
    props.type && (button.type = props.type);

    return button;
  }

  createLi(props) {
    const li = document.createElement("li");

    props.text && (li.innerHTML = props.text);
    props.class && (li.className = props.class);

    return li;
  }
  createItem() {
    this.formList.appendChild(this.formItem);
    this.formItem.appendChild(this.delet);
    this.formItem.appendChild(this.drag);
    this.formItem.appendChild(this.formInput);
  }
  add() {
    this.formList.appendChild(this.formItem.cloneNode(true));
    document.querySelector(".js-item:last-of-type .js-input").value = "";
  }

  delete(item) {
    item.parentNode.remove();
  }
  
  sortRender(sortLiItems){
    this.formSort.classList.toggle('sort-bottom');
    this.formList.innerHTML = "";
    for (let li of sortLiItems) {
      this.formList.appendChild(li);
    }
  }


  init() {
    this.mainDiv = this.createDiv({
      class: "container"
    });

    this.formBody = this.createDiv({
      class: "form__body"
    });

    this.formTop = this.createDiv({
      class: "form__body--top"
    });

    this.form = this.createDiv({
      class: "form"
    });

    this.formTitle = this.createH1({
      class: "form__body--title",
      text: "To-do list",
    });

    this.formSort = this.createDiv({
      class: "form__body--sort"
    });

    this.formList = this.createUl({
      class: "form__list js-list"
    });

    this.formItem = this.createLi({
      class: "form__item js-item",
      draggable: "true"
    });

    this.delet = this.createDiv({
      class: "form__item--delet js-delete"
    });

    this.drag = this.createDiv({
      class: "form__item--drag js-drag"
    });

    this.formInput = this.createInput({
      class: "form__input js-input",
      type: "text",
      name: "text",
      placeholder: "Add a to-do"
    });

    this.formBtn = this.createButton({
      class: "form__btn js-btn",
      text: "Добавить"
    });


    this.root.appendChild(this.mainDiv);
    this.mainDiv.appendChild(this.formBody);
    this.formBody.appendChild(this.formTop);
    this.formBody.appendChild(this.form);
    this.form.appendChild(this.formTitle);
    this.form.appendChild(this.formSort);
    this.form.appendChild(this.formList);
    this.form.appendChild(this.formBtn);
    this.formList.appendChild(this.formItem);
    this.formItem.appendChild(this.delet);
    this.formItem.appendChild(this.drag);
    this.formItem.appendChild(this.formInput);
}


}