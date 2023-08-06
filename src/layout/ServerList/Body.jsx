import {Body as TableBody} from "@table-library/react-table-library/table";
import {Row} from "../../common/Row";
import {useSelector} from "react-redux";

export const Body = ({tableList, hiddenColumns}) => {

  return <TableBody>
    {tableList.map(item => 
        <Row item={item} hiddenColumns={hiddenColumns} key={item.id}/>)}
  </TableBody>
}
