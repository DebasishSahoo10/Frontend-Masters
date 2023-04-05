// our JavaScript goes here
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h3", {}, props.breed),
    React.createElement("p", {}, props.age),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me App"),
    React.createElement(Pet, {
      name: "Purple",
      breed: "Labrador",
      age: "4 Months",
    }),
    React.createElement(Pet, {
      name: "Coco",
      breed: "GSD",
      age: "3 Years",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
