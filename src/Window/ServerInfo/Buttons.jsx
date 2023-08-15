import { Button } from "../../common/Button";
import { setActiveWindow } from "../../redux/window/slice";
import { useDispatch } from "react-redux";
export const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <div className="server-info-buttons">
      <Button title={"Join game"} style={{ width: "80px" }} />
      <Button title={"Refresh"} style={{ width: "80px" }} />
      <Button
        title={"Close"}
        onClick={() => dispatch(setActiveWindow(null))}
        style={{ width: "80px" }}
      />
    </div>
  );
};
