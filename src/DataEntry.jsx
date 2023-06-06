import {ReplayIcon} from "./icons/replay";
import {RobotronIcon} from "./icons/robotron";
import {PasswordIcon} from "./icons/password";

export const DataEntry = ({ entry }) => {
  return (
    <tbody>
      <tr>
        {entry.has_password ? <td className='IconEntry'>
          <PasswordIcon />
        </td> : <td className='IconEntry'></td>}
        {entry.vac_secured ? <td className='IconEntry'>
          <RobotronIcon />
        </td> : <td className='IconEntry'></td>}
        {entry.supports_replays ? <td className='IconEntry'>
          <ReplayIcon />
        </td> : <td className='IconEntry'></td>}
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
