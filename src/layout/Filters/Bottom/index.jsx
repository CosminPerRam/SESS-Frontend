import { Checkbox } from "../../../common/Checkbox";
import { Button } from "../../../common/Button";
import { Label } from "../../../common/Label";
import { ActionButtons } from "./ActionButtons";
import { useBottomLabel } from "../../../hooks/useBottomLabel";
import { useDispatch, useSelector } from "react-redux";
import { setSimplifiedList } from "../../../redux/layout/slice";

export const Bottom = () => {
  const label = useBottomLabel();
  const simplifiedList = useSelector((state) => state.layout.simplifiedList);
  const dispatch = useDispatch();

  return (
    <div className='bottom'>
      <Checkbox
        title={"Simplified List"}
        checked={simplifiedList}
        onChanged={() => dispatch(setSimplifiedList(!simplifiedList))}
      />
      {simplifiedList ? (
        <div className='label'></div>
      ) : (
        <>
          <Button
            title={"Filters"}
            id={"filters"}
            style={{
              width: "106px",
              marginLeft: "32px",
              color: "$buttonText",
              minWidth: "106px",
            }}
          />
          <Label name={label} />
        </>
      )}
      <ActionButtons />
    </div>
  );
};
