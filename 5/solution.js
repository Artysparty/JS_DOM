function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let searchField = document.getElementById("searchField");
  let values = document.getElementsByTagName("td");

  function onClick() {
    let allNames = [];
    for (let i = 0; i < values.length; i++) {
      allNames.push(values[i].textContent.toLowerCase());
  }

    let finded = [];
    for (let i = 1; i < allNames.length; i++) {
      let listItem = document.getElementById(`${i}`);

      listItem.classList.remove("select");

      if (allNames[i].includes(searchField.value.toLowerCase())) {
        finded.push(i);
        listItem.classList.add("select");
      }
    }
  }
}
