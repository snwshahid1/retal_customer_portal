import { FC, memo } from "react"
import { DataTableWrapper } from "./style"
import DataTable from 'react-data-table-component';
import SortIcon from 'src/assets/icons/sort-icon.svg';
import Pagination from "../Pagination";

const TableData: FC<any> = ( props: any ) => {
  const { columns, data} = props;

  return (
    <DataTableWrapper>
      <DataTable
        sortIcon={<img src={SortIcon} />}
        columns={columns}
        data={data}
        paginationComponent={Pagination}
        pagination
        {...props}
      />
    </DataTableWrapper>
  );
};

export default memo(TableData);
