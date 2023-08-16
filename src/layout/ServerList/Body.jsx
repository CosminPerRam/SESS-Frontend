import { Body as TableBody } from "@table-library/react-table-library/table";
import { Row } from "./Row";

export const Body = ({ tableList }) => {
  return (
    <TableBody>
      {tableList.map((item) => (
        <Row item={item} key={item.id} />
      ))}
    </TableBody>
  );
};
