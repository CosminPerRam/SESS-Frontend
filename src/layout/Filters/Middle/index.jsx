import { Checkboxes } from "./Checkboxes";
import { useDispatch, useSelector } from "react-redux";
import { LabelInput } from "../../../common/LabelInput";
import {
  setIsSecured,
  setLocation,
  setRunsMap,
} from "../../../redux/filters/slice";
import {
  setLatency,
  setMaxPlayerCount,
} from "../../../redux/localFilters/slice";
import { Select } from "../../../common/Select";

export const Middle = () => {
  const game = ["Team Fortress 2"];
  const latencyList = [
    "<All>",
    "< 50",
    "< 100",
    "< 150",
    "< 250",
    "< 350",
    "< 600",
  ];
  const locationList = [
    "<All>",
    "US - East",
    "US - West",
    "South America",
    "Europe",
    "Asia",
    "Australia",
    "Middle East",
    "Africa",
  ];
  const antiCheat = ["<All>", "Secure", "Not Secure"];

  const dispatch = useDispatch();

  const runsMap = useSelector((state) => state.filters.runsMap);
  const handleRunsMap = (event) => {
    dispatch(setRunsMap(event.target.value));
  };

  const maxPlayerCount = useSelector(
    (state) => state.localFilters.maxPlayerCount,
  );

  const handleMaxPlayerCount = (event) => {
    dispatch(setMaxPlayerCount(event.target.value));
  };
  const latency = useSelector((state) => state.localFilters.latency);
  const location = useSelector((state) => state.filters.location);
  const isSecured = useSelector((state) => state.filters.isSecured);
  return (
    <div className="middle">
      <Select
        label={"Game"}
        options={game}
        style={{ width: "162px" }}
        selectedOption={"Team Fortress 2"}
      />
      <LabelInput
        title={"Map"}
        style={{ width: "162px" }}
        value={runsMap}
        handleInput={handleRunsMap}
        menu={"map"}
      />
      <LabelInput
        title={"Max player count"}
        style={{ width: "62px" }}
        value={maxPlayerCount}
        handleInput={handleMaxPlayerCount}
        menu={"maxPlayerCount"}
      />
      <Select
        label={"Latency"}
        options={latencyList}
        setOption={setLatency}
        style={{ width: "110px" }}
        selectedOption={latency === null ? "<All>" : latency}
      />
      <Select
        label={"Location"}
        options={locationList}
        setOption={setLocation}
        selectedOption={location === null ? "<All>" : location}
      />
      <Select
        label={"Anti-cheat"}
        options={antiCheat}
        setOption={setIsSecured}
        selectedOption={isSecured === null ? "<All>" : isSecured}
      />
      <Checkboxes />
    </div>
  );
};
