import {ApolloConfiguration} from "./core/ApolloConfiguration";
import {Console} from "./console";
import {Layout} from "./layout";
import {renderActiveMenu} from "./helpers/renderActiveMenu";

export const App = () => {
    
  return (
    <div className={'app'}>
      <ApolloConfiguration>
        <Console>
          <Layout />
        </Console>
          {renderActiveMenu()}
      </ApolloConfiguration>
    </div>
  );
}
