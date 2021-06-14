function addItem() {
  let menu = document.getElementById("menu");
  let newItemText = document.getElementById("newItemText");
  let newItemValue = document.getElementById("newItemValue");

  menu.append(new Option(newItemText.value, newItemValue.value));
}
