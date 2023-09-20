import { useState } from "react";
import PageTitle from "src/components/PageTitle";
import Searchbar from "src/components/Searchbar";
import TableData from "src/components/TableData";
import { TicketsWrapper } from "./style";
import SidebarDialog from "src/components/SidebarDialog";
import NewTicket from "./components/NewTicket";
import TicketDetail from "./components/TicketDetail";
import ReportProblem from "./components/ReportProblem";

const Tickets = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [newTicket, setNewTicket] = useState(false);
  const [ticketDetail, setTicketDetail] = useState(false);
  const [reportProblem, setReportProblem] = useState(false);

  const handleCloseDialog = () => setIsOpenDialog(false);

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
  }

  const handleReportProblem = () => {
    setNewTicket(false);
    setTicketDetail(false);
    setIsOpenDialog(true);
    setReportProblem(true);
  }

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
  ];

  return (
    <TicketsWrapper>
      <SidebarDialog
        show={isOpenDialog}
        className={isOpenDialog ? "show-dialog" : ""}
        handleClose={handleCloseDialog}
      >
        {newTicket && <NewTicket />}
        {ticketDetail && <TicketDetail showReportProblem={handleReportProblem} /> }
        {reportProblem && <ReportProblem /> }
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
      <Searchbar placeholder="Search a ticket" />

      <div className="tickets-table-data">
        <TableData columns={columns} data={data} />
      </div>
    </TicketsWrapper>
  );
};

export default Tickets;
