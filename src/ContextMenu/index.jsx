import './contextMenu.scss'
export const ContextMenu = ({top, left}) => {
    return <div className="context-menu" style={{top: top + 'px', left: left + 'px'}}>
        <div className="context-menu-element">Connect to server</div>
        <div className="context-menu-element">View server info</div>
        <div className="context-menu-element">Refresh server</div>
        <div className="context-menu-element">Add server to favorites</div>
        <div className="context-menu-element">Add server to blacklist</div>
    </div>
}