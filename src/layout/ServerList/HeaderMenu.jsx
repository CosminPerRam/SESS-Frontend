import {Checkbox as InternalCheckbox} from "../../common/Checkbox";
import {useRef, useState} from "react";
import {useClickOutside} from "../../hooks/useClickOutside";

const Checkbox = ({title, checked, disabled, setHiddenColumns}) => {
  const changed = (checked) => {
    setHiddenColumns(previousState => ({
      ...previousState,
      [title]: checked
    }))
  }

  return <InternalCheckbox title={title} checked={checked} onChanged={changed} disabled={disabled}/>
}

export const HeaderMenu = ({top, left, setHidden}) => {
  const nodeRef = useRef(null);
  useClickOutside(nodeRef, setHidden);

  const [hiddenColumn, setHiddenColumns] = useState({});
  console.log(hiddenColumn);

  return (
    <div className={'header_menu'} style={{top: top + 'px', left: left + 'px'}} ref={nodeRef}>
      {
        [{
          name: "Password",
          checked: true,
        }, {
          name: "Secure",
          checked: true,
        }, {
          name: "Replay",
          checked: true,
        }, {
          name: "Servers",
          checked: true,
          disabled: true,
        }, {
          name: "IP Address",
        },{
          name: "Game",
          checked: true,
        }, {
          name: "Players",
          checked: true,
        }, {
          name: "Bots",
          checked: true,
        }, {
          name: "Map",
          checked: true,
        }, {
          name: "Latency",
          checked: true,
        }, {
          name: "Tags",
          checked: true,
        }].map(({name, checked, disabled}) =>
          <Checkbox key={name} title={name} checked={checked} disabled={disabled} setHiddenColumns={setHiddenColumns} />)
      }
    </div>
  )
};
