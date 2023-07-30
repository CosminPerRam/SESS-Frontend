
export const theme = sizing => ({
  Table: `
    --data-table-library_grid-template-columns: ${sizing};
    height: auto;
    max-height: 100%;
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
    
    &:hover {
      cursor: default;
    }
  `,
  BaseCell: `
    height: 18px;
    font-size: 10px;
    font-weight: 100;
    
    &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3) {
      padding: 2px;
    }
    &:nth-of-type(n+4) {
      padding-left: 6px;
    }
  `,
  HeaderCell: `
    border: 1px solid #8e8572;
    &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3) {
      padding: 0px;
    }
    &:nth-of-type(n+4) {
      padding-left: 4px;
    }
  `,
  Cell: ``,
});
