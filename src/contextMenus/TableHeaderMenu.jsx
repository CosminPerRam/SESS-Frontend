import {useDispatch, useSelector} from "react-redux";
import {Checkbox} from "../common/Checkbox";
import {setHiddenColumns} from "../redux/contextMenu/slice";

export const TableHeaderMenu = ({top, left}) => {
  const hiddenColumns = useSelector(state => state.contextMenu.hiddenColumns);
  const dispatch = useDispatch();
  
  const labels = ["Password", "Secure", "Replay", "Servers", "IP Address", "Game", "Players", "Bots", "Map", "Latency", "Tags" ]

  return <div className={'header_menu'} style={{top: top + 'px', left: left + 'px'}} >
    {labels.map(label => 
        <Checkbox title={label} disabled={false} checked={!hiddenColumns[label]} onChanged={() => dispatch(setHiddenColumns(label))}/>
    )}
    </div>
};
