import Listausera from "./components/Listausera";
import ListaTodo from "./components/ListaTodo";
//ovo je primjena funcije višeg reda da se ne ponavljamo
const App = () => {
  return (
    <>
      <Listausera />
      <ListaTodo />
    </>
  );
};

export default App;
