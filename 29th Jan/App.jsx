console.log("hi");

const parent = document.getElementById("container");
const root = ReactDOM.createRoot(parent);

// elements
const h2 = React.createElement("h2", {}, "welcome to React");

const li1 = React.createElement("li", {}, "Java");
const li2 = React.createElement("li", {}, "C Programming");

const ul = React.createElement("ul", {}, li1, li2);

const img = React.createElement("img", {
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqKroQYwB3NHXxoS8AKX4ukSXNaQ7Y-YF2g&s",
  style: { width: "100px" }
});

// first render
const firstUI = React.createElement("div", {}, h2, ul, img);
root.render(firstUI);

// change order after 3 seconds
setTimeout(() => {
  const secondUI = React.createElement("div", {}, img, h2, ul);
  root.render(secondUI);
}, 3000);