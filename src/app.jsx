import { ApolloConfiguration } from "./core/ApolloConfiguration";
import { Layout } from "./layout";
import { RenderActiveWindow } from "./helpers/RenderActiveWindow";
import { RenderActiveMenu } from "./helpers/RenderActiveMenu";
import { Analytics } from "@vercel/analytics/react";

export const App = () => {
  return (
    <div className={`app`}>
      <Analytics />
      <ApolloConfiguration>
        <Layout />
        <RenderActiveWindow />
        <RenderActiveMenu />
      </ApolloConfiguration>
    </div>
  );
};
