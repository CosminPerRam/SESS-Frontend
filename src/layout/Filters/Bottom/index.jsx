import { Checkbox } from "../../../common/Checkbox";
import { Button } from "../../../common/Button";
import { Label } from "../../../common/Label";
import { ActionButtons } from "./ActionButtons";
import { useBottomLabel } from "../../../hooks/useBottomLabel";
import { useState } from "react";

export const Bottom = () => {
  const label = useBottomLabel();
  const [checked, setChecked] = useState(false);

  return (
    <div className='bottom'>
      <Checkbox
        title={"Simplified List"}
        checked={checked}
        onChanged={() => setChecked(!checked)}
      />
      {checked ? (
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
