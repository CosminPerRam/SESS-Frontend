import {Body as TableBody} from "@table-library/react-table-library/table";
import {Row} from "../../common/Row";
import {useEffect, useState} from "react";
import {ContextMenu} from "../../ContextMenu";

export const Body = ({tableList, setClicked, setPoints, setItem}) => {
  return <TableBody>
    {tableList.map(item => 
        <Row item={item} key={item.id} setClicked={setClicked} setPoints={setPoints} setItem={setItem}/>)}
  </TableBody>
}
