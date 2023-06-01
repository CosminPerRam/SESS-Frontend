import { TitleBar } from "./TitleBar";
import { NavBar } from "./NavBar";
import { Content } from "./Content";
import {ApolloConfiguration} from "./ApolloConfiguration";

function App() {
  return (
    <ApolloConfiguration>
      <body>
        <TitleBar/>
        <NavBar/>
        <Content/>
        <div className='TipBar'></div>
      </body>
    </ApolloConfiguration>
  );
}

export default App;
