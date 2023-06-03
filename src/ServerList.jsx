import iconRobotronColumn from './iconRobotronColumn.png'
import iconPasswordColumn from './iconPasswordColumn.png'
import iconReplayColumn from './iconReplayColumn.png'

export const ServerList = () => {
    return (
        <div class='ServerList' >
            <div class='head'></div>
            <div class='Table'>

                <div class='Layer first' style={{minWidth: '400px'}}>
                    <div class='texts'>
                        <div class='heading'>Servers</div>
                        <div class='text'>Servers</div>
                        <div class='text'>Servers</div>
                    </div>
                    <div class='Layer' style={{minWidth: '350px'}}>
                        <div class='texts'>
                            <div class='heading'>Game</div>
                            <div class='text'>Servers</div>
                            <div class='text'>Servers</div>
                        </div>
                        <div class='Layer' style={{minWidth: '300px'}}>
                            <div class='texts'>
                                <div class='heading'>Players</div>
                                <div class='text'>Servers</div>
                                <div class='text'>Servers</div>
                            </div>
                            <div class='Layer' style={{minWidth: '250px'}}>
                                <div class='texts'>
                                    <div class='heading'>Bots</div>
                                    <div class='text'>Servers</div>
                                    <div class='text'>Servers</div>
                                </div>
                                <div class='Layer' style={{minWidth: '200px'}}>
                                    <div class='texts'>
                                        <div class='heading'>Map</div>
                                        <div class='text'>Servers</div>
                                        <div class='text'>Servers</div>
                                    </div>
                                    <div class='Layer' style={{minWidth: '150px'}}>
                                        <div class='texts'>
                                            <div class='heading'>Latency</div>
                                            <div class='text'>Servers</div>
                                            <div class='text'>Servers</div>
                                        </div>
                                        <div class='Layer' style={{minWidth: '50px'}}>
                                            <div class='texts'>
                                                <div class='heading'>Tags</div>
                                                <div class='text'>Servers</div>
                                                <div class='text'>Servers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}