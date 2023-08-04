import {Checkbox as InternalCheckbox} from "../common/Checkbox";
import {useRef} from "react";

const Checkbox = ({title, checked, disabled, setHiddenColumns}) => {
  const changed = (checked) => {
    setHiddenColumns(previousState => ({
      ...previousState,
      [title]: checked
    }))
  }

  return <InternalCheckbox title={title} checked={checked} onChanged={changed} disabled={disabled}/>
}

const makeFieldBuilder = (hiddenColumns) => ({name, disabled = false}) => ({
  name,
  disabled,
  checked: !hiddenColumns[name]
})

export const TableHeaderMenu = ({top, left, nodeRef, setHiddenColumns, hiddenColumns}) => {
  const makeField = makeFieldBuilder(hiddenColumns);

  return (
    <div className={'header_menu'} style={{top: top + 'px', left: left + 'px'}} ref={nodeRef}>
      {
        [makeField({name: "Password"}),
          makeField({name: "Secure"}),
          makeField({name: "Replay"}),
          makeField({name: "Servers", disabled: true}),
          makeField({name: "IP Address"}),
          makeField({name: "Game"}),
          makeField({name: "Players"}),
          makeField({name: "Bots"}),
          makeField({name: "Map"}),
          makeField({name: "Latency"}),
          makeField({name: "Tags"})].map(({name, checked, disabled}) =>
          <Checkbox key={name} title={name} checked={checked} disabled={disabled} setHiddenColumns={setHiddenColumns} />)
      }
    </div>
  )
};
