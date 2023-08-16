import { Checkboxes } from "./Checkboxes";
import { DropDown } from "../../../common/DropDown";
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

export const Middle = () => {
  const game = ["Team Fortress 2"];
  const latency = [
    "<All>",
    "< 50",
    "< 100",
    "< 150",
    "< 250",
    "< 350",
    "< 600",
  ];
  const location = [
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
    console.log(event.target.value);
  };

  const maxPlayerCount = useSelector(
    (state) => state.localFilters.maxPlayerCount
  );
  const handleMaxPlayerCount = (event) => {
    dispatch(setMaxPlayerCount(event.target.value));
    console.log(event.target.value);
  };
  const handleLocation = (e) => {
    if (e.target.value === "<All>") dispatch(setLocation(null));
    else dispatch(setLocation(e.target.value));
  };
  const handleIsSecured = (e) => {
    if (e.target.value === "<All>") dispatch(setIsSecured(null));
    else if (e.target.value === "Secure") dispatch(setIsSecured(true));
    else dispatch(setIsSecured(false));
  };
  const handleLatency = (e) => {
    if (e.target.value === "<All>") dispatch(setLatency(null));
    else dispatch(setLatency(e.target.value));
  };
  //handles
  return (
    <div className='middle'>
      <DropDown label={"Game"} options={game} style={{ width: "162px" }} />
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
      <DropDown
        label={"Latency"}
        options={latency}
        handleChange={handleLatency}
      />
      <DropDown
        label={"Location"}
        options={location}
        handleChange={handleLocation}
      />
      <DropDown
        label={"Anti-cheat"}
        options={antiCheat}
        handleChange={handleIsSecured}
      />
      <Checkboxes />
    </div>
  );
};
