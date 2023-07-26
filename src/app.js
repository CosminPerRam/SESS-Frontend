import {ApolloConfiguration} from "./core/ApolloConfiguration";
import {Console} from "./console";
import {Layout} from "./layout"; 

export const App = () => {
  return (
    <div className={'app'}
         onContextMenu={(e) => {
             e.preventDefault();
         }}>
      <ApolloConfiguration>
        <Console>
          <Layout />
        </Console>
      </ApolloConfiguration>
    </div>
  );
}
