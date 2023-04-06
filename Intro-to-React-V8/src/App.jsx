import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import { SearchParams } from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me App</h1>
      <Pet name="Purple" breed="Labrador" age="4 Months" />
      <Pet name="Coco" breed="GSD" age="3 Years" />
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
