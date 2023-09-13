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

const Appointments = () => {
  const AppointmentsData = [
    {
        appointmentID: "#8726914B",
        title: "Meeting with Greg",
        property: "Retal Rise",
        date: "June 05, 2023"
    }
  ];

  const [ isOpenDialog, setIsOpenDialog ] = useState(false);
  const [ newApp, setNewApp ] = useState(false);
  const [ appDetails, setAppDetails ] = useState(false);
  const [ appFeedback, setAppFeedback ] = useState(false);

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

  const openAppointmentDetail = (appointment: any) => {
    setAppDetails(true);
    setNewApp(false);
    setAppFeedback(false);
    setIsOpenDialog(true); 
    console.log(appointment);
  }

  return (
    <AppointmentsWrapper>
      
      <SidebarDialog
        show={isOpenDialog}
        className={ isOpenDialog ? "show-dialog" : ""}
        handleClose={handleCloseDialog}
      >
        {newApp && <NewAppointment /> }
        {appDetails && <AppointmentDetails newAppointmentForm={openAppointmentFeedback} />}
        {appFeedback && <AppointmentFeedback /> }
      </SidebarDialog>
      
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="Appointment" subtitle="Find here all of your Appointments" />
        <button className="theme-btn" onClick={() => openNewAppointment()}>
          New Appointment
        </button>
      </div>

      <div className="filter-section flex-base-wrapper">
        <div className="appointments-filters">

        </div>
        <Searchbar placeholder="Search an appointment"  />
      </div>

      <div className="d-grid appointments-cards-wrapper gap-10">
        {AppointmentsData.map(( appointment, i: number) => (
          <Link to="#" key={i} onClick={(() => openAppointmentDetail(appointment))}>
            <AppointmentCard {...appointment} />
          </Link>
        ))}
      </div>
    </AppointmentsWrapper>
  )
}

export default Appointments