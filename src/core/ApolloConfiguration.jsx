import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "@apollo/client/link/ws";

//https://www.apollographql.com/docs/react/data/subscriptions/#the-older-subscriptions-transport-ws-library
const wsLink = new WebSocketLink(
  new SubscriptionClient("wss://cosminperram.com:20240/subscriptions"),
);

const client = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache(),
});

export const ApolloConfiguration = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
