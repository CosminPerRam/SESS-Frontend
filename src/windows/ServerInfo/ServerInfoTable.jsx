import { useRowSelect } from "@table-library/react-table-library/select";
import { Table } from "@table-library/react-table-library/table";
import { theme } from "../../layout/ServerList/theme";
import { Body as TableBody } from "@table-library/react-table-library";
import { ServerInfoRow } from "./ServerInfoRow";
import { ServerInfoTableHeader } from "./ServerInfoTableHeader";

export const ServerInfoTable = ({ item }) => {
  const players = item.players;
  const data = { nodes: players };

  const select = useRowSelect(data, {
    onChange: (action, state) => {
      console.log(action, state);
    },
  });

  return (
    <Table
      data={data}
      theme={theme(`minmax(24px, 1fr) minmax(24px, 1fr) 90px`, `4px`, `6px`)}
      select={select}
      layout={{ custom: true, fixedHeader: true }}
    >
      {(tableList) => (
        <>
          <ServerInfoTableHeader />
          <TableBody>
            {tableList.map((item) => (
              <ServerInfoRow item={item} key={item.name} />
            ))}
          </TableBody>
        </>
      )}
    </Table>
  );
};
