import { ApolloConfiguration } from "./core/ApolloConfiguration";
import { Layout } from "./layout";
import { RenderActiveWindow } from "./helpers/RenderActiveWindow";
import { RenderActiveMenu } from "./helpers/RenderActiveMenu";
import { Analytics } from "@vercel/analytics/react";
import { Behaviour } from "./behaviour";

export const App = () => {
  return (
    <div className={`app`}>
      <Behaviour />
      <Analytics />
      <ApolloConfiguration>
        <Layout />
        <RenderActiveWindow />
        <RenderActiveMenu />
      </ApolloConfiguration>
    </div>
  );
};
