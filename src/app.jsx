import {ApolloConfiguration} from "./core/ApolloConfiguration";
import {Console} from "./console";
import {Layout} from "./layout";
import {RenderActiveMenu} from "./helpers/RenderActiveMenu";

export const App = () => {
  return (
    <div className={'app'}>
      <ApolloConfiguration>
        <Console>
          <Layout />
        </Console>
        <RenderActiveMenu />
      </ApolloConfiguration>
    </div>
  );
}
