import { FC, memo } from "react"
import { DataTableWrapper } from "./style"
import DataTable from 'react-data-table-component';
//import SortIcon from 'src/assets/icons/dots-icon.svg';
import Pagination from "../Pagination";

const TableData: FC<any> = ({ columns, data }: any) => {

  return (
    <DataTableWrapper>
      <DataTable
        //defaultSortFieldId={1}
        //sortIcon={<img src={SortIcon} />}
        // paginationComponentOptions={paginationComponentOptions}
        columns={columns}
        data={data}
        paginationComponent={Pagination}
        pagination
      />
    </DataTableWrapper>
  );
};

export default memo(TableData);
