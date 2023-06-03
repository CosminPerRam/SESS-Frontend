import {useState} from "react";
import iconPasswordColumn from "./iconPasswordColumn.png";
import iconRobotronColumn from "./iconRobotronColumn.png";
import iconReplayColumn from "./iconReplayColumn.png";

export const ServerListHead = () => {
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
    <thead className='Headings'>
      <tr>
        <td className='IconHeading'>
          <img src={iconPasswordColumn}/>
        </td>
        <td className='IconHeading'>
          <img src={iconRobotronColumn}/>
        </td>
        <td className='IconHeading'>
          <img src={iconReplayColumn}/>
        </td>
        <td className='Heading servers' id={'server'}>
          <span>Servers</span>
          <div
            className='Dragger'
            draggable={true}
            onDragStart={(e) => handleStart(e, "server")}
            onDrag={(e) => handleMove(e, "servers")}
          />
        </td>
        <td className='Heading games' id={'game'}>Game <div
          className='Dragger'
          draggable={true}
          onDragStart={(e) => handleStart(e, "game")}
          onDrag={(e) => handleMove(e, "games")}
        /></td>
        <td className='Heading'>Players</td>
        <td className='Heading'>Bots</td>
        <td className='Heading maps' id={'map'}>Map <div
          className='Dragger'
          draggable={true}
          onDragStart={(e) => handleStart(e, "map")}
          onDrag={(e) => handleMove(e, "maps")}
        /></td>
        <td className='Heading'>Latency</td>
        <td className='Heading'>Tags</td>
      </tr>
    </thead>
  )
}