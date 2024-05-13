import HelloFn from "./components/HelloFn";
import HelloCl from "./components/HelloCl";

const App = () => {
  return (
    <div>
      <HelloFn ime="Dalibor" prezime="Kovačić">
        Učimo react. Ovo su props children
      </HelloFn>
      <HelloCl ime="Ivan" prezime="Ivić">
        Učimo react, ovo su props childreni - CLase
      </HelloCl>
    </div>
  );
};

export default App;
