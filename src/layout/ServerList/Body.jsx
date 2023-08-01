import {Body as TableBody} from "@table-library/react-table-library/table";
import {Row} from "../../common/Row";

export const Body = ({tableList, hiddenColumns, setPoints, setItem}) => {
  return <TableBody>
    {tableList.map(item => 
        <Row item={item} hiddenColumns={hiddenColumns} key={item.id} setPoints={setPoints} setItem={setItem}/>)}
  </TableBody>
}
