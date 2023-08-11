import {Row as TableRow} from "@table-library/react-table-library";
import {Cell} from "@table-library/react-table-library/table";
export const ServerInfoRow = ({item}) => {
    return <TableRow item={item}>
        <Cell>{item.name}</Cell>
        <Cell>{item.score}</Cell>
        <Cell>{item.duration}</Cell>
    </TableRow>
}