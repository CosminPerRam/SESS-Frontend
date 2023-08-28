import { VerticalDivider } from "./VerticalDivider";
import { TopInput } from "./TopInput";
import { Button } from "../../../common/Button";
import { HorizontalDivider } from "./HorizontalDivider";
import { useDispatch, useSelector } from "react-redux";
import { setHasTags } from "../../../redux/filters/slice";
import { Select } from "../../../common/Select";

export const Top = () => {
  const workshop = [`<All>`, `Workshop maps`, `Subscribed`];
  const tags = [`include`, `do not include`];
  const dispatch = useDispatch();

  const hasTags = useSelector((state) => state.filters.hasTags);
  const handleHasTags = (event) => {
    dispatch(setHasTags(event.target.value));
    console.log(event.target.value);
  };
  //handles
  return (
    <div className="top">
      <div className="top-settings">
        <Select label={`Workshop`} options={workshop} />
        <VerticalDivider />
        <Select label={`Tags`} options={tags} />
        <TopInput
          value={hasTags}
          onChange={handleHasTags}
          menu={`serverInput`}
        />
        <Button title={`Add common tags...`} style={{ minWidth: `144px` }} />
      </div>
      <HorizontalDivider />
    </div>
  );
};
