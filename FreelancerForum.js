//set initial names/occupations/prices
//p element with average price message
//periodically add td element with new name/occupation/price
//update p element after td element is added

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

