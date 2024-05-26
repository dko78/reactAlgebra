import { useState } from "react";
import Header from "./Components/Header";

import StiriliziranaKartica from "./Components/StiriliziranaKartica";
import KarticaData from "./data/KarticaData";
import ListaKartica from "./Components/ListaKartica";

const App = () => {
  const [kartica, setKartica] = useState(KarticaData);
  return (
    <div>
      <Header />
      <ListaKartica kartica={kartica} />
    </div>
  );
};

export default App;
