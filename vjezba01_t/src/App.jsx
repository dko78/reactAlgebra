import HelloFn from "../components/HelloFn";
import HelloCl from "../components/HelloCl";
import Message from "../components/Message";
import Counter from "../components/Counter";
import ChageStateCl from "../components/ChageStateCl";
import MessageCL from "../components/MessageCL";
import CounterFn2 from "../components/CounterFn2";
{
  /*ako hoces named import
onda import {HelloFn} from ...
a tamo export const HelloFn*/
}

const App = () => {
  return (
    <div>
      <HelloFn ime="Dalibor">Učimo React. Ovo su Props childreni.</HelloFn>
      {/* proslijeđujem props, ali samo od parent to children, ne obrnuto */}
      {/* funkciji pristup */}
      {/*<HelloCl prezime="Kovačić" />*/}
      <HelloCl prezime="Kovačić">
        Učimo React. Ovo su Props childreni. Klase
      </HelloCl>
      <Message />
      <MessageCL />
      <hr />
      <Counter />
      <hr />
      <CounterFn2 />
      <ChageStateCl />
    </div>
  );
};

export default App;
