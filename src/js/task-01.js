const ul = document.querySelector("#categories"); 
const items = ul.querySelectorAll("li.item");

console.log("Number of categories:", items.length);

items.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;

  console.log("Category:", title);
  console.log("Elements:", elements);
});