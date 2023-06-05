import iconPasswordColumn from "./iconPasswordColumn.png";
import iconRobotronColumn from "./iconRobotronColumn.png";
import iconReplayColumn from "./iconReplayColumn.png";

export const DataEntry = ({ entry }) => {
  return (
    <tbody>
      <tr>
        {entry.has_password ? <td className='IconEntry'>
          <img src={iconPasswordColumn} /></td> : <td className='IconEntry'></td>}
        {entry.vac_secured ? <td className='IconEntry'>
          <img src={iconRobotronColumn} /></td> : <td className='IconEntry'></td>}
        {entry.supports_replays ? <td className='IconEntry'>
          <img src={iconReplayColumn} /></td> : <td className='IconEntry'></td>}
        <td className='Entry servers'>{entry.name}</td>
        <td className='Entry games'>{entry.game}</td>
        <td className='Entry'>{entry.players_online}/{entry.players_maximum}</td>
        <td className='Entry'>{entry.players_bots}</td>
        <td className='Entry maps'>{entry.map}</td>
        <td className='Entry'>Latency</td>
        <td className='Entry'>Tags</td>
      </tr>
    </tbody>
  )
}
