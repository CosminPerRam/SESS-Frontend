import { gql, useSubscription } from "@apollo/client";
import { useCallback, useState } from "react";

const SERVER_SUBSCRIPTION = gql`
  subscription Servers($filters: ServersFilters) {
    servers(filters: $filters) {
      appid
      name
      protocol
      map
      folder
      game
      hasPassword
      vacSecured
      version
      isMod
      players {
        name
        score
        duration
      }
      playersBots
      playersOnline
      playersMaximum
    }
  }
`;

export const useFetchServers = () => {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(true);

  const [variables, setVariables] = useState({
    filters: {},
    norFilters: {},
    nandFilters: {},
    limit: 128,
  });

  const appendToServers = useCallback(
    (new_server) => {
      setServers([...servers, new_server]);
    },
    [servers, setServers],
  );

  const { error } = useSubscription(SERVER_SUBSCRIPTION, {
    shouldResubscribe: true,
    variables,
    skip,
    onData: ({ data }) => appendToServers(data.data.servers),
    onComplete: () => {
      setLoading(false);
      setSkip(true);
    },
  });

  const fetch = useCallback(
    ({ filters = {}, norFilters = {}, nandFilters = {}, limit = 128 }) => {
      setServers([]);
      setSkip(false);
      setLoading(true);
      setVariables({
        filters,
        norFilters,
        nandFilters,
        limit,
      });
    },
    [setServers, setSkip, setLoading, setVariables],
  );

  return { loading, error, servers, fetch };
};
