
export const theme = {
  Table: `
    --data-table-library_grid-template-columns: repeat(3, 24px) minmax(24px, 1fr) minmax(100px, 1fr) 80px 80px minmax(100px, 1fr) 80px minmax(80px, 1fr)
  `,
  Header: ``,
  Body: ``,
  BaseRow: ``,
  HeaderRow: `
    color: #393532;
    background-color: #a39884;
  `,
  Row: `
    color: #a39884;
    background-color: #221F1C;
    
    &.row-select-selected, &.row-select-single-selected {
      background-color: #49453D;
      color: #000000;
    }
  `,
  BaseCell: `
    height: 18px;
    padding-left: 6px;
    padding-bottom: 1px;
    font-size: 10px;
    text-align: left;
    font-weight: 100;
  `,
  HeaderCell: `
    border: 1px solid #8e8572;
    padding-left: 4px;
  `,
  Cell: ``,
};
