import {ApolloConfiguration} from "./core/ApolloConfiguration";
import {Console} from "./console";
import {Layout} from "./layout";
import {RenderActiveMenu} from "./helpers/RenderActiveMenu";
import { Analytics } from '@vercel/analytics/react';

export const App = () => {
  return (
    <div className={'app'}>
      <Analytics />
      <ApolloConfiguration>
        <Console>
          <Layout />
        </Console>
        <RenderActiveMenu />
      </ApolloConfiguration>
    </div>
  );
}
