import { useState } from "react";
import TableData from "src/components/TableData";
import PageTitle from "src/components/PageTitle";
import Searchbar from "src/components/Searchbar";
import ContentBox from "src/components/ContentBox";
import SidebarDialog from "src/components/SidebarDialog";
import PaymentDetails from "./components/PaymentDetails";
import SelectField from "src/elements/Form/SelectField";
import Navbar from "src/components/Navbar";
import DatePickerField from "src/components/DatePickerField";
import { FilterHolder } from "src/styles/commonStyle";

const Payments = () => {
  const [paymentDetails, setPaymentDetails] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onDateChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleCloseDialog = () => setIsOpenDialog(false);

  const showPaymentDetails = () => {
    setPaymentDetails(true);
    setIsOpenDialog(true);
  };

  const navbarLinks = [
    { label: "Incoming", slug: "/payments" },
    { label: "Paid", slug: "/payments/paid" },
  ];

  const columns = [
    {
      name: "Payment Id",
      selector: (row: any) => row.paymentId,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row: any) => row.amount,
      sortable: true,
    },
    {
      name: "Property",
      selector: (row: any) => row.property,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
      sortable: true,
    },
    {
      name: "Due to",
      selector: (row: any) => row.dueDate,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row: any) => row.actions,
      sortable: true,
      right: true,
    },
  ];

  const data = [
    {
      id: 1,
      paymentId: "#8726914B",
      amount: "- 589,99 SAR",
      property: "Retal Rise",
      status: "In progress",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 2,
      paymentId: "#8726914B",
      amount: "- 85 SAR",
      property: "Alaya Al Nakheel",
      status: "In Progress",
      dueDate: "May 28, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 3,
      paymentId: "#8726914B",
      amount: "- 120 SAR",
      property: "Ewan Sedra",
      status: "Incoming",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 4,
      paymentId: "#8726914B",
      amount: "- 2 870,50 SAR",
      property: "Retal Rise",
      status: "Incoming",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 5,
      paymentId: "#8726914B",
      amount: "- 120 SAR",
      property: "Alaya Al Nakheel",
      status: "Incoming",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 6,
      paymentId: "#8726914B",
      amount: "- 85 SAR",
      property: "Ewan Sedra",
      status: "In Progress",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 7,
      paymentId: "#8726914B",
      amount: "- 2 870,50 SAR",
      property: "Retal Rise",
      status: "Incoming",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 8,
      paymentId: "#8726914B",
      amount: "- 2 870,50 SAR",
      property: "Retal Rise",
      status: "In Progress",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 9,
      paymentId: "#8726914B",
      amount: "- 120 SAR",
      property: "Ewan Sedra",
      status: "Incoming",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 10,
      paymentId: "#8726914B",
      amount: "- 2 870,50 SAR",
      property: "Retal Rise",
      status: "In Progress",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 11,
      paymentId: "#8726914B",
      amount: "- 120 SAR",
      property: "Ewan Sedra",
      status: "In Progress",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 12,
      paymentId: "#8726914B",
      amount: "- 2 870,50 SAR",
      property: "Retal Rise",
      status: "In Progress",
      dueDate: "June 05, 2023",
      actions: (
        <span className="table-icon" onClick={() => showPaymentDetails()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
  ];

  return (
    <>
      <SidebarDialog
        show={isOpenDialog}
        className={isOpenDialog ? "show-dialog" : ""}
        handleClose={handleCloseDialog}
      >
        {paymentDetails && <PaymentDetails />}
      </SidebarDialog>

      <div className="page-title-holder flex-base-wrapper">
        <PageTitle
          title="Payments"
          subtitle="Find here all the your Payments"
        />
      </div>

      <div className="flex-base-wrapper">
        <FilterHolder className="filter-holder mb-20">
          <SelectField
            name="property"
            id="property"
            className="textbox selectbox"
            options={[
              { label: "Filter by property", value: "" },
              { label: "Ewan Sedra", value: "Ewan Sedra" },
              { label: "Retal Rise", value: "retal rise" },
              { label: "Alaya Al Nakeel", value: "Alaya Al Nakeel" },
            ]}
          />

          <DatePickerField
            placeholderText="Choose Date"
            selected={startDate}
            onChange={onDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
          />

          <Navbar navbarLinks={navbarLinks} />
        </FilterHolder>
        <div className="mb-20">
          <Searchbar placeholder="Search a payment" />
        </div>
      </div>

      <div className="d-grid gap-10 payment-boxes">
        <ContentBox className="bg-green">
          <h3>140,937.00 SAR</h3>
          <span>Already paid since</span>
          <span>Jan 10, 2022</span>
        </ContentBox>

        <ContentBox className="bg-brown">
          <h3>861,103.00 SAR</h3>
          <span>Left to pay until</span>
          <span>Jan 10, 2023</span>
        </ContentBox>

        <ContentBox className="bg-blue">
          <h3>979,249.00 SAR</h3>
          <span>Next payment due</span>
          <span>Nov 30, 2022</span>
        </ContentBox>
      </div>
      <div className="payments-table-data">
        <TableData columns={columns} data={data} />
      </div>
    </>
  );
};

export default Payments;
