import Listausera from "./components/Listausera";
import ListaTodo from "./components/ListaTodo";
//ovo je primjena funcije višeg reda da se ne ponavljamo
//HOC je uvijek definirana kao klasa
const App = () => {
  return (
    <>
      <Listausera />
      <ListaTodo />
    </>
  );
};

export default App;
