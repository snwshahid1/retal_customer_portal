import Searchbar from "src/components/Searchbar"
import PageTitle from "src/components/PageTitle"
import { AppointmentsWrapper } from "./style"
import AppointmentCard from "src/components/AppointmentCard"
import SidebarDialog from "src/components/SidebarDialog"
import { useState } from "react"
import NewAppointment from "./components/NewAppointment"
import AppointmentDetails from "./components/AppointmentDetails"
import { Link } from "react-router-dom"
import AppointmentFeedback from "./components/AppointmentFeedback"
import Modal from "src/components/Modal";

const Appointments = () => {
  const AppointmentsData = [
    {
        appointmentID: "#8726914B",
        title: "Meeting with Greg",
        property: "Retal Rise",
        date: "June 05, 2023"
    },
    {
      appointmentID: "#8726914B",
      title: "Meeting with Ali",
      property: "Alaya Al Nakheel",
      date: "June 05, 2023"
    },
    {
      appointmentID: "#8726914B",
      title: "Meeting for plumbing",
      property: "Ewan Sedra",
      date: "June 05, 2023"
    },
    {
      appointmentID: "#8726914B",
      title: "Meeting for maintenance",
      property: "Retal Rise",
      date: "June 05, 2023"
    },
    {
      appointmentID: "#8726914B",
      title: "Meeting with Greg",
      property: "Retal Rise",
      date: "June 05, 2023"
    },
    {
      appointmentID: "#8726914B",
      title: "Meeting with Ali",
      property: "Alaya Al Nakheel",
      date: "June 05, 2023"
    },
    {
      appointmentID: "#8726914B",
      title: "Meeting for plumbing",
      property: "Ewan Sedra",
      date: "June 05, 2023"
    },
    {
      appointmentID: "#8726914B",
      title: "Meeting for maintenance",
      property: "Retal Rise",
      date: "June 05, 2023"
    },
    {
      appointmentID: "#8726914B",
      title: "Meeting for plumbing",
      property: "Ewan Sedra",
      date: "June 05, 2023"
    },
    {
      appointmentID: "#8726914B",
      title: "Meeting for maintenance",
      property: "Retal Rise",
      date: "June 05, 2023"
    },
  ];

  const [ isOpenDialog, setIsOpenDialog ] = useState(false);
  const [ newApp, setNewApp ] = useState(false);
  const [ appDetails, setAppDetails ] = useState(false);
  const [ appFeedback, setAppFeedback ] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => setIsOpenModal(false);
  const openModal = () => {
    handleCloseDialog();
    setIsOpenModal(true);
  }

  const handleCloseDialog = () => setIsOpenDialog(false);

  const openNewAppointment = () => {
    setAppDetails(false);
    setAppFeedback(false);
    setNewApp(true);
    setIsOpenDialog(true); 
  }

  const openAppointmentFeedback = () => {
    setAppDetails(false);
    setNewApp(false);
    setAppFeedback(true);
    setIsOpenDialog(true); 
  }

  const openAppointmentDetail = () => {
    setAppDetails(true);
    setNewApp(false);
    setAppFeedback(false);
    setIsOpenDialog(true); 
  }

  return (
    <AppointmentsWrapper>
      
      <SidebarDialog
        show={isOpenDialog}
        className={ isOpenDialog ? "show-dialog" : ""}
        handleClose={handleCloseDialog}
      >
        {newApp && <NewAppointment /> }
        {appDetails && 
          <AppointmentDetails 
            newAppointmentForm={openAppointmentFeedback}
            openModal = {openModal}
          />
        }
        {appFeedback && <AppointmentFeedback /> }
      </SidebarDialog>
      
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="Appointment" subtitle="Find here all of your Appointments" />
        <button className="theme-btn" onClick={() => openNewAppointment()}>
          New appointment
        </button>
      </div>

      <div className="filter-section flex-base-wrapper">
        <div className="appointments-filters">

        </div>
        <Searchbar placeholder="Search an appointment"  />
      </div>

      <div className="d-grid appointments-cards-wrapper gap-10">
        {AppointmentsData.map(( appointment, i: number) => (
          <Link to="#" key={i} onClick={(() => openAppointmentDetail())}>
            <AppointmentCard {...appointment} />
          </Link>
        ))}
      </div>

      <Modal onClose={closeModal} open={isOpenModal}>
        <div className="px-40 text-center">
          <i className="calendar-icon2 mb-1"></i>
          <i className="cancel-icon2 mb-1"></i>
          <h2>Are you sure you want to reschedule ?</h2>
          <p>
            By clicking yes, it will cancel the previous meeting and replace it by the new one.
          </p>
        </div>

        <button className="theme-btn btn-lg w-100 mb-2">Yes</button>
        <button onClick={() => closeModal} className="theme-btn theme-btn-white btn-lg w-100">Cancel</button>
      </Modal>
    </AppointmentsWrapper>
  )
}

export default Appointments