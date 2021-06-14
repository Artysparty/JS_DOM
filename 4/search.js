function search() {
   let items = document.getElementsByTagName("li");
   let text = document.getElementById("searchText");
   let j = 0;
   for(let i of items){
       let city = i.innerText.toLowerCase();
       let text_lower = text.value.toLowerCase();
       if(city.indexOf(text_lower) !=-1)
       {
           i.style.textDecoration ='underline';
           i.style.textDecoration ='bold';
           j++;
       }
   }
   let res = document.getElementById("result");
   res.innerText = j + " matches found";
}