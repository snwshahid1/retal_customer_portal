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
import { FilterHolder } from "src/styles/commonStyle"
import SelectField from "src/elements/Form/SelectField"
import DatePickerField from "src/components/DatePickerField"
import { useClickAway } from "@uidotdev/usehooks"

const Appointments = () => {
  const [ startDate, setStartDate ] = useState(null);
  const [ endDate, setEndDate ] = useState(null);
  const [ isOpenDialog, setIsOpenDialog ] = useState(false);
  const [ newApp, setNewApp ] = useState(false);
  const [ appDetails, setAppDetails ] = useState(false);
  const [ appFeedback, setAppFeedback ] = useState(false);
  const [ isOpenModal, setIsOpenModal] = useState(false);
  const [ isScheduleMeeting, setIsScheduleMeeting] = useState(false);
  const [ isCancelMeeting, setIsCancelMeeting] = useState(false);

  const onDateChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const ref = useClickAway(() => {
    setIsOpenModal(false);
  });

  const closeModal = () => {
    setIsCancelMeeting(false);
    setIsScheduleMeeting(false);
    setIsOpenModal(false);
  }
  const openModal = () => {
    handleCloseDialog();
    setIsOpenModal(true);
  }

  const scheduleMeetingHandle = () => {
    setIsCancelMeeting(false);
    setIsScheduleMeeting(true);
  }
  const cancelMeetingHandle = () => {
    setIsScheduleMeeting(false);
    setIsCancelMeeting(true);
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
            scheduleMeeting = {scheduleMeetingHandle}
            cancelMeeting = {cancelMeetingHandle}
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
        </FilterHolder>
        <div className="mb-20 flex-grow">
          <Searchbar placeholder="Search an appointment" />
        </div>
      </div>

      <div className="d-grid appointments-cards-wrapper gap-10">
        {AppointmentsData.map(( appointment, i: number) => (
          <Link to="#" key={i} onClick={(() => openAppointmentDetail())}>
            <AppointmentCard {...appointment} />
          </Link>
        ))}
      </div>

      {isScheduleMeeting && (
        <Modal onClose={closeModal} open={isOpenModal} className="modal-sm" ref={ref}>
          <div className="px-25 text-center mb-2 pb-1">
            <i className="calendar-icon2 mb-1"></i>
            <h2>Are you sure you want to reschedule ?</h2>
            <p>
              By clicking yes, it will cancel the previous meeting and replace it by the new one.
            </p>
          </div>

          <button className="theme-btn btn-lg w-100 mb-2 no-shadow">Yes</button>
          <button onClick={() => closeModal()} className="theme-btn theme-btn-border btn-lg w-100">Cancel</button>
        </Modal>
      )}

      {isCancelMeeting && (
        <Modal onClose={closeModal} open={isOpenModal} className="modal-sm" ref={ref}>
          <div className="px-25 text-center mb-2 pb-1">
            <i className="cancel-icon2 mb-1"></i>
            <h2>Are you sure you want to cancel this meeting ?</h2>
            <p>
              By clicking yes, it will be permanently canceled
            </p>
          </div>

          <button className="theme-btn btn-lg w-100 mb-2 no-shadow">Yes</button>
          <button onClick={() => closeModal()} className="theme-btn theme-btn-border btn-lg w-100">Cancel</button>
        </Modal>
      )}

    </AppointmentsWrapper>
  )
}

export default Appointments