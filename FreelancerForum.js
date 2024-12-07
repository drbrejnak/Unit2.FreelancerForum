
const targetNode = document.querySelector("tbody");

const config = { childList: true, subtree: true };

const average = () => {
  const arr = document.querySelectorAll(".price");
  const prices = [];
  arr.forEach((price) => {
      prices.push(parseFloat(price.textContent))
  });
  const avg = Math.round(prices.reduce((acc,el) => (acc+el),0)/prices.length)
  return avg
}

const observer = new MutationObserver(average);

observer.observe(targetNode, config);

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("p");
  // and give it some content
  const newContent = document.createTextNode("The average starting price is ");
  const newAvg = document.createTextNode(observer);
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  newDiv.appendChild(newAvg)
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("table-title");
  const parentDiv = currentDiv.parentNode
  parentDiv.insertBefore(newDiv, currentDiv);
}

const initialFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
]

const freelancers = [
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

const tableData = (items) => {
    const table = document.querySelector("tbody");
    items.forEach( item => {
      let row = table.insertRow();
      let name = row.insertCell(0);
      name.innerHTML = item.name;
      let occupation = row.insertCell(1);
      occupation.innerHTML = item.occupation;
      let price = row.insertCell(2);
      price.className = "price";
      price.innerHTML = item.price;
    });
  }

tableData(initialFreelancers);

const insertTableData = (items) => {
    const table = document.querySelector("tbody");
    items.forEach((item, index) => {
        setTimeout(() => {
            let row = table.insertRow();
            let name = row.insertCell(0);
            name.innerHTML = item.name;
            let occupation = row.insertCell(1);
            occupation.innerHTML = item.occupation;
            let price = row.insertCell(2);
            price.className = "price";
            price.innerHTML = item.price;
        }, 5000 * index);
    });
  }

insertTableData(freelancers);