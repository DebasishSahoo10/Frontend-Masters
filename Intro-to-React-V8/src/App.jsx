import Pet from './Pet'

const App = () => {
  return (
    <div>
      <h1>Adopt Me App</h1>
      <Pet name="Purple" breed="Labrador" age="4 Months"/>
      <Pet name="Coco" breed="GSD" age="3 Years"/>
    </div>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));