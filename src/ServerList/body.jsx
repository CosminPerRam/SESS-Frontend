import {Body} from "@table-library/react-table-library/table";
import {ServerRow} from "./server";

export const ServerListBody = ({tableList}) => {
  return (<Body>
    {tableList.map(item => <ServerRow item={item} key={item.id} />)}
  </Body>)
}
