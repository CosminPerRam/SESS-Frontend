import { TitleBar } from "./TitleBar";
import { NavBar } from "./NavBar";
import { Content } from "./Content";
import {ApolloConfiguration} from "./ApolloConfiguration";
import {Console} from "./Console";

function App() {
  return (
    <div className={'App'}>
      <ApolloConfiguration>
        <Console />
        <TitleBar/>
        <NavBar/>
        <Content/>
        <div className='TipBar'></div>
      </ApolloConfiguration>
    </div>
  );
}

export default App;
