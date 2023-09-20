import PageTitle from "src/components/PageTitle"
import NotificationItem from "src/components/NotificationItem";

import Navbar from "src/components/Navbar";
import Pagination from "src/components/Pagination";
import { useState } from "react";
import UserImage1 from "src/assets/images/n-user-img1.png";
import UserImage2 from "src/assets/images/n-user-img2.png";
import UserImage3 from "src/assets/images/n-user-img3.png";
import UserImage4 from "src/assets/images/n-user-img4.png";
import UserImage5 from "src/assets/images/n-user-img5.png";
import UserImage6 from "src/assets/images/n-user-img6.png";

const Notifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const Notifications = [
    {
      imageURL: UserImage1,
      title: "Dr. Sam Wilkinson",
      text: "Hey Tom! I was just wondering if you Have had time to go over the new Revisions for the upcom...",
      time: "3 min ago",
      read: false
    },
    {
      imageURL: UserImage2,
      title: "Ms. Sonja Schaden",
      text: "Hey Tom! I was just wondering if you Have had time to go over the new ?",
      time: "3 min ago",
      read: true
    },
    {
      imageURL: UserImage3,
      title: "Keith Morissette",
      text: "Hey Tom! I was just wondering if you Have had time to go over the new ?",
      time: "3 min ago",
      read: true
    },
    {
      imageURL: UserImage4,
      title: "Damien Mills",
      text: "Hey Tom! I was just wondering if you Have had time to go over the new ?",
      time: "3 min ago",
      read: false
    },
    {
      imageURL: UserImage5,
      title: "Miguel Okeef",
      text: "Hey Tom! I was just wondering if you Have had time to go over the new Revisions for the upcom...",
      time: "3 min ago",
      read: true
    },
    {
      imageURL: UserImage6,
      title: "Achraf Azaiez",
      text: "Hey Tom! I was just wondering if you Have had time to go over the new ?",
      time: "3 min ago",
      read: true
    }
  ]

  const handlePageChange = (currentPage: any) => {
    setCurrentPage(currentPage);
  };

  const handleRowsPerPageChange = (numOfRows: any) => {
    setCurrentPage(1);
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