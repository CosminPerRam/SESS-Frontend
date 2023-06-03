import { TitleBar } from "./TitleBar";
import { NavBar } from "./NavBar";
import { Content } from "./Content";
import {ApolloConfiguration} from "./ApolloConfiguration";
import {Console} from "./Console";

function App() {
  return (
    <ApolloConfiguration>
      <body>
        <Console />
        <TitleBar/>
        <NavBar/>
        <Content/>
        <div className='TipBar'></div>
      </body>
    </ApolloConfiguration>
  );
}

export default App;
