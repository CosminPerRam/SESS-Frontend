import {ApolloConfiguration} from "./core/ApolloConfiguration";
import {Console} from "./console";
import {Layout} from "./layout"; 

export const App = () => {
  return (
    <div className={'app'}>
      <ApolloConfiguration>
        <Console>
          <Layout />
        </Console>
      </ApolloConfiguration>
    </div>
  );
}
