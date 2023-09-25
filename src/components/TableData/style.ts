import styled from "styled-components";

export const DataTableWrapper = styled.div`
  .rdt_Table,
  .rdt_TableHeadRow,
  .rdt_TableRow {
    background: none;
  }

  .rdt_TableHeadRow {
    font-weight: 500;
    color: #797979;
    border-top: 1px solid rgba(0,0,0,.12);
    min-height: 34px;
  }

  .__rdt_custom_sort_icon__ {
    margin: 0 6px;
    order: 2;
  }

  .rdt_TableRow {
    &:hover {
      background: rgba(133, 85, 58, 0.1);
      border-bottom-color: rgba(0,0,0,.12);
    }
  }
`;