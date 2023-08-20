import { useSelector } from "react-redux";
export const useBottomLabel = () => {
  const {
    canBeFull,
    canBeEmpty,
    canHavePassword,
    spectatorProxy,
    isSecured,
    runsMap,
    location,
  } = useSelector((state) => state.filters);

  const latency = useSelector((state) => state.localFilters.latency);
  const maxPlayerCount = Number(
    useSelector((state) => state.localFilters.maxPlayerCount),
  );

  return `Team Fortress 2;
    ${isSecured === null ? `` : isSecured ? ` secure;` : ` not secure;`}
    ${location ? location + `;` : ``}
    ${latency ? ` latency ` + latency + `;` : ``}
    ${
      isNaN(maxPlayerCount) || maxPlayerCount === 0
        ? ``
        : ` max players <= ` + maxPlayerCount + `;`
    }
    ${canBeFull ? `` : ` is not full;`}
    ${canBeEmpty ? `` : ` is not empty;`}
    ${canHavePassword ? `` : ` has no password;`}
    ${spectatorProxy ? ` supports replays;` : ``}
    ${runsMap}`;
};
