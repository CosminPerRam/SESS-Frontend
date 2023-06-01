import iconRobotronColumn from './iconRobotronColumn.png'
import iconPasswordColumn from './iconPasswordColumn.png'
import iconReplayColumn from './iconReplayColumn.png'

export const ServerList = () => {
    return (
        <div class='ServerList' >
            <table class='Servers' cellSpacing={0} >
                <thead class='Headings'>
                    <tr>
                        <td class='IconHeading'>
                            <img src={iconPasswordColumn} />
                        </td>
                        <td class='IconHeading'><img src={iconRobotronColumn} /></td>
                        <td class='IconHeading'><img src={iconReplayColumn} /></td>
                        <td class='Heading'style={{ flexGrow: 1 }}><div class='da'>Servers</div></td>
                        <td class='Heading'>Game</td>
                        <td class='Heading'>Players</td>
                        <td class='Heading'>Bots</td>
                        <td class='Heading'>Map</td>
                        <td class='Heading'>Latency</td>
                        <td class='Heading' >Tags</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}