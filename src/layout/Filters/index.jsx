import { Top } from "./Top";
import { Middle } from "./Middle";
import { Bottom } from "./Bottom";
import "./filters.scss";
import { useSelector } from "react-redux";

export const Filters = () => {
  const filters = useSelector((state) => state.layout.filters);
  return (
    <div>
      <Top />
      {filters ? <Middle /> : null}
      <Bottom />
    </div>
  );
};
