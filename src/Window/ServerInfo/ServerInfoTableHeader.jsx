import { HeaderCell, HeaderRow } from "@table-library/react-table-library";
import { Header as TableHeader } from "@table-library/react-table-library";
export const ServerInfoTableHeader = () => {
  return (
    <TableHeader>
      <HeaderRow>
        <HeaderCell resize={{ minWidth: 156 }}>Player Name</HeaderCell>
        <HeaderCell resize={{ minWidth: 64 }}>Score</HeaderCell>
        <HeaderCell>Time</HeaderCell>
      </HeaderRow>
    </TableHeader>
  );
};
