import {Checkbox} from "../../common/Checkbox";
import {useRef} from "react";
import {useClickOutside} from "../../hooks/useClickOutside";

export const HeaderMenu = ({top, left, setHidden}) => {
  const nodeRef = useRef(null);
  useClickOutside(nodeRef, setHidden);

  return (
    <div className={'header_menu'} style={{top: top + 'px', left: left + 'px'}} ref={nodeRef}>
      <Checkbox title={"Password"} checked/>
      <Checkbox title={"Secure"} checked/>
      <Checkbox title={"Replay"} checked/>
      <Checkbox title={"Servers"} checked/>
      <Checkbox title={"IP Address"} />
      <Checkbox title={"Game"} checked/>
      <Checkbox title={"Players"} checked/>
      <Checkbox title={"Bots"} checked/>
      <Checkbox title={"Map"} checked/>
      <Checkbox title={"Latency"} checked/>
      <Checkbox title={"Tags"} checked/>
    </div>
  )
};
