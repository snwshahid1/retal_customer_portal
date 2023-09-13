import TableData from "src/components/TableData";
import PageTitle from "src/components/PageTitle"
import Searchbar from "src/components/Searchbar";
import ContentBox from "src/components/ContentBox";
import DatePicker from "src/components/DatePicker1";

const Payments = () => {
  const columns = [
    {
        name: 'Payment Id',
        selector: (row: any) => row.paymentId,
        sortable: true,
    },
    {
        name: 'Amount',
        selector: (row: any)  => row.amount,
        sortable: true,
    },
    {
      name: 'Property',
      selector: (row: any)  => row.property,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row: any)  => row.status,
      sortable: true,
    },
    {
      name: 'Due to',
      selector: (row: any)  => row.dueDate,
      sortable: true,
    },
    {
      name: 'Actions',
      selector: (row: any)  => row.actions,
      sortable: true,
      right: true,
    },
  ];

  const data = [
      {
          id: 1,
          paymentId: '#8726914B',
          amount: '-589,99 SAR',
          property: 'Retal Rise',
          status: 'In Progress',
          dueDate: 'June 05, 2023',
          actions: 'Action'
      },
      {
        id: 2,
        paymentId: '#1726914B',
        amount: '-589,99 SAR',
        property: 'Retal Rise',
        status: 'In Progress',
        dueDate: 'June 05, 2023',
        actions: 'Action'
    },
  ]

  return(
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="Payments" subtitle="Find here all the your Payments" />
        <Searchbar placeholder="Search a payment"  />
      </div>
      <DatePicker />
      <div className="d-grid gap-10 payment-boxes">
        <ContentBox className="bg-green">
          <h3>140,937.00 SAR</h3>
          <span>Already paid since</span><br />
          <span>Jan 10, 2022</span>
        </ContentBox>

        <ContentBox className="bg-brown">
          <h3>861,103.00 SAR</h3>
          <span>Left to pay until</span><br />
          <span>Jan 10, 2023</span>
        </ContentBox>

        <ContentBox className="bg-blue">
          <h3>979,249.00 SAR</h3>
          <span>Next payment due</span><br />
          <span>Nov 30, 2022</span>
        </ContentBox>
      </div>
      <div className="payments-table-data">
        <TableData 
          columns={columns}
          data={data}
        />
      </div>
    </>
  )
}

export default Payments