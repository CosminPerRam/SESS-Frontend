export const ServerDetailValues = ({items}) => {
    return <div className="server-detail-values">
            {items.map(item => <div className="server-detail-value" key={item}>
                {item}
            </div>)}
    </div>
}