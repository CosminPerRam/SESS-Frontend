import iconPasswordColumn from "./iconPasswordColumn.png";
import iconRobotronColumn from "./iconRobotronColumn.png";
import iconReplayColumn from "./iconReplayColumn.png";

export const ServerListData = ({ servers }) => {
  return (
    <tbody>
      <tr>
        <td className='IconEntry'>
          <img src={iconPasswordColumn} alt={'Is password protected?'}/>
        </td>
        <td className='IconEntry'>
          <img src={iconRobotronColumn} alt={'Is secured?'}/>
        </td>
        <td className='IconEntry'>
          <img src={iconReplayColumn} alt={'Has replay?'}/>
        </td>
        <td className='Entry servers'>Servers</td>
        <td className='Entry games'>Game</td>
        <td className='Entry'>Players</td>
        <td className='Entry'>Bots</td>
        <td className='Entry maps'>Map</td>
        <td className='Entry'>Latency</td>
        <td className='Entry'>Tags</td>
      </tr>
    </tbody>
  )
}
