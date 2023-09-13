import PageTitle from "src/components/PageTitle"
import NotificationItem from "src/components/NotificationItem";

import UserImage from "src/assets/images/user-img1.png";
import Navbar from "src/components/Navbar";
import Pagination from "src/components/Pagination";
import { useState } from "react";

const Notifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(1);
  const Notifications = [
    {
      imageURL: UserImage,
      title: "Title",
      text: "Text",
      time: "3 min ago",
      read: false
    },
    {
      imageURL: UserImage,
      title: "Titel",
      text: "Text",
      time: "3 min ago",
      read: true
    }
  ]

  const handlePageChange = (currentPage: any) => {
    setCurrentPage(currentPage);
  };

  const handleRowsPerPageChange = (numOfRows: any, currentPage: any) => {
    setCurrentPage(currentPage);
    setRecordsPerPage(numOfRows);
  };

  const pagination = {
    currentPage : currentPage,
    rowsPerPage: recordsPerPage, 
    rowCount: Notifications.length,
    onChangePage: handlePageChange,
    onChangeRowsPerPage: handleRowsPerPageChange
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const NotificationsData = Notifications.slice(indexOfFirstRecord, indexOfLastRecord);

  const navbarLinks = [
    {label: 'Overview', slug: "#"},
    {label: 'Property', slug: "#"},
    {label: 'Orders', slug: "#"},
    {label: 'Profile', slug: "/notifications"}
  ];

  return(
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="Notifications" subtitle="Find here all of your Notifications" />        
      </div>
      <div className="notifications-wrapper">
        <Navbar navbarLinks={navbarLinks} />
        {NotificationsData.map( (item, i) => (
          <NotificationItem {...item} key={i} />
        ))}
      </div>
      <Pagination {...pagination} />
    </>
  )
}

export default Notifications