import { Checkbox } from "../../../common/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  setCanBeEmpty,
  setCanBeFull,
  setCanHavePassword,
  setSpectatorProxy,
} from "../../../redux/filters/slice";

export const Checkboxes = () => {
  const dispatch = useDispatch();
  const canBeFull = useSelector((state) => state.filters.canBeFull);
  const canBeEmpty = useSelector((state) => state.filters.canBeEmpty);
  const canHavePassword = useSelector((state) => state.filters.canHavePassword);
  const spectatorProxy = useSelector((state) => state.filters.spectatorProxy);

  return (
    <form className="checkboxes">
      <Checkbox
        title={"Server not full"}
        checked={!canBeFull}
        onChanged={() => dispatch(setCanBeFull(!canBeFull))}
      />
      <Checkbox
        title={"Has users playing"}
        checked={!canBeEmpty}
        onChanged={() => dispatch(setCanBeEmpty(!canBeEmpty))}
      />
      <Checkbox
        title={"Is not password protected"}
        checked={!canHavePassword}
        onChanged={() => dispatch(setCanHavePassword(!canHavePassword))}
      />
      <Checkbox
        title={"Supports replays"}
        checked={spectatorProxy}
        onChanged={() => dispatch(setSpectatorProxy(!spectatorProxy))}
      />
    </form>
  );
};
