import './style.scss'
import Draggable from "react-draggable";

export const Console = () => {
  return (
    <Draggable
      handle=".ConsoleHeader"
      >
      <div className={'ConsoleContainer'}>
        <div className={'ConsoleHeader'}>

        </div>
      </div>
    </Draggable>
  )
}
