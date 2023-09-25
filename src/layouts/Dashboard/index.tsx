import { Outlet } from "react-router-dom";
import { DashboardWrapper, ContentArea, MainContent } from "./style";
import Sidebar from "src/components/Sidebar";
import Header from "src/components/Header";

const Dashboard = () => {
  return (
    <DashboardWrapper className="d-flex">
      <Sidebar />
      <ContentArea id="app-content" className="w-100">
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentArea>
    </DashboardWrapper>
  );
};

export default Dashboard;
