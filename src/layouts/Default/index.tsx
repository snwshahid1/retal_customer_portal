import { Outlet } from "react-router-dom";
import { PageWrapper, ContentArea } from "./style";

const FullWidth = () => {
  return (
    <PageWrapper className="d-flex">
      <ContentArea className="w-100">
        <Outlet />
      </ContentArea>
    </PageWrapper>
  );
};

export default FullWidth;
