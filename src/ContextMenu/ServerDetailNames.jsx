export const ServerDetailNames = ({items}) => {
    return <div className="server-detail-names">
            {items.map(item => <div className="server-detail-name" key={item}>
                {item}: 
            </div>)}
    </div>
}