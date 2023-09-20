import { Button } from "../../common/Button";
import { useSelector } from "react-redux";

export const Buttons = () => {
  const addServerTo = useSelector((state) => state.window.addServerTo);
  return (
    <div className={`add-server-buttons`}>
      <Button
        title={`Add this address to ${addServerTo}`}
        style={{ width: `190px` }}
      />
      <Button
        title={`Find games at this address...`}
        style={{ width: `190px` }}
      />
      <Button title={`Cancel`} style={{ width: `64px` }} />
    </div>
  );
};
