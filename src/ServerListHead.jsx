import {useState} from "react";
import {ReplayIcon} from "./icons/replay";
import {RobotronIcon} from "./icons/robotron";
import {PasswordIcon} from "./icons/password";

const Dragger = ({controlId, changersName}) => {
  const [drag, setDrag] = useState(false);

  const handleStart = (e, id) => {
    let iniMouse = e.clientX;
    let iniSize  = document.getElementById(id).offsetWidth;

    setDrag({
      iniMouse: iniMouse,
      iniSize:  iniSize
    })
  }

  const handleMove = (e, className) => {
    if(e.clientX){
      let iniMouse = drag.iniMouse;
      let iniSize  = drag.iniSize;
      let endMouse = e.clientX;
      let endSize = iniSize + (endMouse - iniMouse);

      let elements = document.getElementsByClassName(className);
      for (let i = 0; i < elements.length; i++)
        elements[i].style.width = `${endSize}px`
    }
  }

  return (
    <div
      className='Dragger'
      draggable={true}
      onDragStart={(e) => handleStart(e, controlId)}
      onDrag={(e) => handleMove(e, changersName)}
    />
  )
}

export const ServerListHead = () => {
  return (
    <thead className='Headings'>
      <tr>
        <td className='IconHeading'>
          <PasswordIcon />
        </td>
        <td className='IconHeading'>
          <RobotronIcon />
        </td>
        <td className='IconHeading'>
          <ReplayIcon />
        </td>
        <td className='Heading servers' id={'server'}>
          Servers
          <Dragger controlId={'server'} changersName={'servers'} />
        </td>
        <td className='Heading games' id={'game'}>
          Game
          <Dragger controlId={'game'} changersName={'games'} />
        </td>
        <td className='Heading'>Players</td>
        <td className='Heading'>Bots</td>
        <td className='Heading maps' id={'map'}>
          Map
          <Dragger controlId={'map'} changersName={'maps'} />
        </td>
        <td className='Heading'>Latency</td>
        <td className='Heading'>Tags</td>
      </tr>
    </thead>
  )
}