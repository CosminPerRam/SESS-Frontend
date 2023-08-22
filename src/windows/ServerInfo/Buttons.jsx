import { Button } from "../../common/Button";
import { useActiveWindow } from "../../hooks/useActiveWindow";
export const Buttons = () => {
  const { closeWindow } = useActiveWindow();

  return (
    <div className="server-info-buttons">
      <Button title={`Join game`} style={{ width: `80px` }} />
      <Button title={`Refresh`} style={{ width: `80px` }} />
      <Button title={`Close`} onClick={closeWindow} style={{ width: `80px` }} />
    </div>
  );
};
