import HelloFn from "./components/HelloFn";
import HelloCl from "./components/HelloCl";
import ChageStateCl from "./components/ChageStateCl";

const App = () => {
  return (
    <div>
      <HelloFn ime="Dalibor" prezime="Kovačić">
        Učimo react. Ovo su props children
      </HelloFn>
      <HelloCl ime="Ivan" prezime="Ivić">
        Učimo react, ovo su props childreni - CLase
      </HelloCl>
      <ChageStateCl />
    </div>
  );
};

export default App;
