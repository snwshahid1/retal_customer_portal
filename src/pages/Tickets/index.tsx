import { useState } from "react";
import PageTitle from "src/components/PageTitle";
import Searchbar from "src/components/Searchbar";
import TableData from "src/components/TableData";
import { TicketsWrapper } from "./style";
import SidebarDialog from "src/components/SidebarDialog";
import NewTicket from "./components/NewTicket";
import TicketDetail from "./components/TicketDetail";
import ReportProblem from "./components/ReportProblem";
import Navbar from "src/components/Navbar";
import { FilterHolder } from "src/styles/commonStyle";
import SelectField from "src/elements/Form/SelectField";
import DatePickerField from "src/components/DatePickerField";
import Modal from "src/components/Modal";
import { useClickAway } from "@uidotdev/usehooks";
import { useLocation } from "react-router-dom";

const Tickets = () => {
  const location = useLocation();
  const isOpenNewTicket = location.hash === "#new-ticket" ? true : false;

  const [isOpenDialog, setIsOpenDialog] = useState(isOpenNewTicket);
  const [newTicket, setNewTicket] = useState(isOpenNewTicket);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [ticketDetail, setTicketDetail] = useState(false);
  const [reportProblem, setReportProblem] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isCancelTicket, setIsCancelTicket] = useState(false);

  const ref = useClickAway(() => {
    setIsOpenModal(false);
  });

  const onDateChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const closeModal = () => {
    setIsCancelTicket(false);
    setIsOpenModal(false);
  };

  const navbarLinks = [
    { label: "Open", slug: "/create-ticket" },
    { label: "Closed", slug: "" },
  ];

  const handleCloseDialog = () => {
    location.hash = "";
    setIsOpenDialog(false);
  };

  const openNewTicket = () => {
    setReportProblem(false);
    setTicketDetail(false);
    setNewTicket(true);
    setIsOpenDialog(true);
  };

  const showTicketDetail = () => {
    setReportProblem(false);
    setNewTicket(false);
    setIsOpenDialog(true);
    setTicketDetail(true);
  };

  const handleReportProblem = () => {
    setNewTicket(false);
    setTicketDetail(false);
    setIsOpenDialog(true);
    setReportProblem(true);
  };

  const handleTicketCancel = () => {
    setIsOpenDialog(false);
    setIsCancelTicket(true);
    setIsOpenModal(true);
  };

  const columns = [
    {
      name: "Request id",
      selector: (row: any) => row.paymentId,
      sortable: true,
    },
    {
      name: "Property",
      selector: (row: any) => row.property,
      sortable: true,
    },
    {
      name: "Creation date",
      selector: (row: any) => row.dueDate,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
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
      property: "Alaya Al Nakheel",
      dueDate: "Feb 27, 2023 at 09:45 am",
      status: "In progress",
      actions: (
        <span className="table-icon" onClick={() => showTicketDetail()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 2,
      paymentId: "#8726914C",
      property: "Alaya Al Nakheel",
      dueDate: "Feb 27, 2023 at 09:45 am",
      status: "In progress",
      actions: (
        <span className="table-icon" onClick={() => showTicketDetail()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 3,
      paymentId: "#8726914C",
      property: "Retal Rise",
      dueDate: "Feb 27, 2023 at 09:45 am",
      status: "Under review",
      actions: (
        <span className="table-icon" onClick={() => showTicketDetail()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
    {
      id: 4,
      paymentId: "#8726914C",
      property: "Alaya Al Nakheel",
      dueDate: "Feb 27, 2023 at 09:45 am",
      status: "Under review",
      actions: (
        <span className="table-icon" onClick={() => showTicketDetail()}>
          <i className="sm-icon eye-icon"></i>
        </span>
      ),
    },
  ];

  return (
    <TicketsWrapper>
      <SidebarDialog
        show={isOpenDialog}
        className={isOpenDialog ? "show-dialog" : ""}
        handleClose={handleCloseDialog}
      >
        {newTicket && <NewTicket />}
        {ticketDetail && (
          <TicketDetail
            showCancelTicket={handleTicketCancel}
            showReportProblem={handleReportProblem}
          />
        )}
        {reportProblem && <ReportProblem />}
      </SidebarDialog>

      <div className="page-title-holder flex-base-wrapper">
        <PageTitle
          title="Raise Ticket"
          subtitle="Find here all of your ticket"
        />
        <button className="theme-btn" onClick={() => openNewTicket()}>
          Raise new ticket
        </button>
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

          <SelectField
            name="status"
            id="status"
            className="textbox selectbox"
            options={[
              { label: "Filter by Status", value: "" },
              { label: "In progress", value: "In progress" },
              { label: "Under review", value: "Under review" },
              { label: "Closed", value: "Closed" },
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
        <div className="mb-20 flex-grow">
          <Searchbar placeholder="Search a ticket" />
        </div>
      </div>

      <div className="tickets-table-data">
        <TableData columns={columns} data={data} />
      </div>

      {isCancelTicket && (
        <Modal
          onClose={closeModal}
          open={isOpenModal}
          className="modal-sm"
          ref={ref}
        >
          <div className="px-25 text-center mb-2 pb-1">
            <i className="cancel-icon2 mb-1"></i>
            <h2>Are you sure you want to cancel this ticket ?</h2>
            <p>By clicking yes, we will cancel the ticket</p>
          </div>

          <button className="theme-btn btn-lg w-100 mb-2 no-shadow">Yes</button>
          <button
            onClick={() => closeModal()}
            className="theme-btn theme-btn-border btn-lg w-100"
          >
            Cancel
          </button>
        </Modal>
      )}
    </TicketsWrapper>
  );
};

export default Tickets;
