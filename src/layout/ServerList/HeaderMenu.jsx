import {Checkbox} from "../../common/Checkbox";
import {useRef} from "react";
import {useClickOutside} from "../../hooks/useClickOutside";

export const HeaderMenu = ({top, left, setHidden}) => {
  const nodeRef = useRef(null);
  useClickOutside(nodeRef, setHidden);

  return (
    <div className={'header_menu'} style={{top: top + 'px', left: left + 'px'}} ref={nodeRef}>
      <Checkbox title={"Password"}/>
      <Checkbox title={"Secure"}/>
      <Checkbox title={"Replay"}/>
      <Checkbox title={"Servers"}/>
      <Checkbox title={"IP Address"}/>
      <Checkbox title={"Game"}/>
      <Checkbox title={"Players"}/>
      <Checkbox title={"Bots"}/>
      <Checkbox title={"Map"}/>
      <Checkbox title={"Latency"}/>
      <Checkbox title={"Tags"}/>
    </div>
  )
};
