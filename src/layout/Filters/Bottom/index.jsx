import { Checkbox } from "../../../common/Checkbox";
import { Button } from "../../../common/Button";
import { Label } from "../../../common/Label";
import { ActionButtons } from "./ActionButtons";
import { useBottomLabel } from "../../../hooks/useBottomLabel";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setSimplifiedList } from "../../../redux/layout/slice";

export const Bottom = () => {
  const label = useBottomLabel();
  const simplifiedList = useSelector((state) => state.layout.simplifiedList);
  const filters = useSelector((state) => state.layout.filters);
  const dispatch = useDispatch();

  return (
    <div className="bottom">
      <Checkbox
        title={`Simplified List`}
        checked={simplifiedList}
        onChanged={() => dispatch(setSimplifiedList(!simplifiedList))}
      />
      {simplifiedList ? (
        <div className="label"></div>
      ) : (
        <>
          <Button
            title={`Filters`}
            id={`filters`}
            style={
              filters
                ? {
                    width: `106px`,
                    marginLeft: `32px`,
                    color: `#DEDEDE`,
                    minWidth: `106px`,
                    paddingLeft: `5px`,
                  }
                : {
                    width: `106px`,
                    marginLeft: `32px`,
                    color: `#393532`,
                    minWidth: `106px`,
                    paddingBottom: `2px`,
                    paddingLeft: `3px`,
                  }
            }
            onClick={() => dispatch(setFilters(!filters))}
          />
          <Label name={label} />
        </>
      )}
      <ActionButtons />
    </div>
  );
};
