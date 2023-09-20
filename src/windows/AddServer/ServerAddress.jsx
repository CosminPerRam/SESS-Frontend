import { Input } from "../../common/Input";
import { IPExamples } from "./IPExamples";
import { useDispatch, useSelector } from "react-redux";
import { setAddServerIp } from "../../redux/window/slice";

export const ServerAddress = () => {
  const dispatch = useDispatch();
  const addServerIp = useSelector((state) => state.window.addServerIp);
  const handleIpChange = (event) => {
    dispatch(setAddServerIp(event.target.value));
  };

  return (
    <div className={`server-address`}>
      <div className={`server-address-label`}>
        Enter the IP address of the server you wish to add.
      </div>
      <Input
        style={{ width: `330px` }}
        value={addServerIp}
        onChange={(e) => handleIpChange(e)}
        menu={`addServerIp`}
      />
      <IPExamples />
    </div>
  );
};
